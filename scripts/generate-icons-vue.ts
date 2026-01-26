import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { optimize } from 'svgo';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_DIR = path.resolve(__dirname, '../src/icons/svg');
const OUTPUT_DIR = path.resolve(__dirname, '../src/vue/icons');

async function generateVueIcons() {
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

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const iconNames: string[] = [];

  for (const svgFile of svgFiles) {
    const svgPath = path.join(SVG_DIR, svgFile);
    const svgCode = await fs.readFile(svgPath, 'utf-8');

    try {
      // Optimize SVG
      const optimized = optimize(svgCode, {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          'removeXMLNS',
          {
            name: 'convertColors',
            params: {
              currentColor: true,
            },
          },
        ],
      });

      const iconName = svgFile
        .replace('.svg', '')
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');

      iconNames.push(iconName);

      // Extract SVG attributes and content
      let svgContent = optimized.data;

      // Replace fill/stroke colors with currentColor
      svgContent = svgContent
        .replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"')
        .replace(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"');

      // Extract viewBox
      const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
      const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

      // Extract inner content
      const match = svgContent.match(/<svg[^>]*>(.*)<\/svg>/s);
      const innerContent = match ? match[1] : svgContent;

      // Generate Vue component
      const componentCode = `<template>
  <svg
    :width="size"
    :height="size"
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    ${innerContent.trim()}
  </svg>
</template>

<script setup lang="ts">
interface ${iconName}Props {
  size?: string | number;
}

withDefaults(defineProps<${iconName}Props>(), {
  size: 24,
});
</script>
`;

      const outputPath = path.join(OUTPUT_DIR, `${iconName}.vue`);
      await fs.writeFile(outputPath, componentCode);

      console.log(`✓ Generated: ${iconName}.vue`);
    } catch (error) {
      console.error(`✗ Error generating ${svgFile}:`, error);
    }
  }

  // Generate index file
  const indexContent = iconNames
    .map((name) => `export { default as ${name} } from './${name}.vue';`)
    .join('\n');

  await fs.writeFile(path.join(OUTPUT_DIR, 'index.ts'), indexContent + '\n');

  console.log(`\n✓ Generated ${iconNames.length} Vue icon component(s)`);
}

generateVueIcons().catch((error) => {
  console.error('Error generating Vue icons:', error);
  process.exit(1);
});
