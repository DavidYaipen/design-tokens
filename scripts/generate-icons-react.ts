import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { transform } from '@svgr/core';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_DIR = path.resolve(__dirname, '../src/icons/svg');
const OUTPUT_DIR = path.resolve(__dirname, '../src/react/icons');

async function generateReactIcons() {
  // Check if SVG directory exists
  try {
    await fs.access(SVG_DIR);
  } catch {
    console.log('⚠ No SVG directory found. Creating placeholder...');
    await fs.mkdir(SVG_DIR, { recursive: true });
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Create empty index file
    await fs.writeFile(
      path.join(OUTPUT_DIR, 'index.ts'),
      '// Icon components will be generated here when SVG files are added\n'
    );
    console.log('✓ Created placeholder files');
    return;
  }

  // Get all SVG files
  const svgFiles = await glob('**/*.svg', { cwd: SVG_DIR });

  if (svgFiles.length === 0) {
    console.log('⚠ No SVG files found in src/icons/svg/');
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.writeFile(
      path.join(OUTPUT_DIR, 'index.ts'),
      '// Icon components will be generated here when SVG files are added\n'
    );
    return;
  }

  // Ensure output directory exists
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const iconNames: string[] = [];

  for (const svgFile of svgFiles) {
    const svgPath = path.join(SVG_DIR, svgFile);
    const svgCode = await fs.readFile(svgPath, 'utf-8');

    // Convert kebab-case to PascalCase
    const iconName = svgFile
      .replace('.svg', '')
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

    iconNames.push(iconName);

    try {
      // Transform SVG to simple JSX first
      let jsxCode = await transform(
        svgCode,
        {
          typescript: false,
          icon: false,
          native: false,
          plugins: ['@svgr/plugin-jsx'],
          replaceAttrValues: {
            '#000': 'currentColor',
            '#000000': 'currentColor',
            black: 'currentColor',
          },
          svgProps: {
            width: '{size}',
            height: '{size}',
            ref: '{ref}',
          },
        },
        { componentName: iconName }
      );

      // Extract the SVG element
      const svgMatch = jsxCode.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
      if (!svgMatch) {
        console.error(`✗ Could not extract SVG for ${iconName}`);
        return;
      }

      const svgContent = svgMatch[0]
        .replace(/width=\{24\}/g, 'width={size}')
        .replace(/height=\{24\}/g, 'height={size}');

      // Build complete TypeScript component
      const componentCode = `import * as React from 'react';

export interface ${iconName}Props extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const ${iconName} = React.forwardRef<SVGSVGElement, ${iconName}Props>(
  ({ size = 24, ...props }, ref) => (
    ${svgContent}
  )
);

${iconName}.displayName = '${iconName}';

export default ${iconName};
`;

      // Write component file
      const outputPath = path.join(OUTPUT_DIR, `${iconName}.tsx`);
      await fs.writeFile(outputPath, componentCode);

      console.log(`✓ Generated: ${iconName}.tsx`);
    } catch (error) {
      console.error(`✗ Error generating ${iconName}:`, error);
    }
  }

  // Generate index file
  const indexContent = iconNames
    .map((name) => `export { default as ${name} } from './${name}';`)
    .join('\n');

  await fs.writeFile(path.join(OUTPUT_DIR, 'index.ts'), indexContent + '\n');

  console.log(`\n✓ Generated ${iconNames.length} React icon component(s)`);
}

generateReactIcons().catch((error) => {
  console.error('Error generating React icons:', error);
  process.exit(1);
});
