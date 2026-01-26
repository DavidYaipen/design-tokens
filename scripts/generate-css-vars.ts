import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { lightTheme, darkTheme } from '../src/tokens/themes/index.js';
import { colorPalettes } from '../src/tokens/core/colors.js';
import type { Theme } from '../src/tokens/themes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.resolve(__dirname, '../src/css');

function flattenObject(
  obj: any,
  prefix = '',
  result: Record<string, string> = {}
): Record<string, string> {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = String(value);
    }
  }

  return result;
}

function generateColorPaletteVars(): string {
  const vars: string[] = [];

  for (const [colorName, shades] of Object.entries(colorPalettes)) {
    for (const [shade, value] of Object.entries(shades)) {
      vars.push(`  --color-${colorName}-${shade}: ${value};`);
    }
  }

  return vars.join('\n');
}

function generateCSSVars(theme: Theme, selector: string, includeStatic = true): string {
  const flattened = flattenObject(theme);

  const cssVars = Object.entries(flattened)
    .filter(([key]) => !key.startsWith('palette-')) // Exclude palette from theme vars
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n');

  return `${selector} {\n${cssVars}\n}\n`;
}

async function generateCSS() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // Generate color palette (static, doesn't change with theme)
  const paletteCSS = `:root {\n  /* Color Palettes (Scale 5-180) */\n${generateColorPaletteVars()}\n}\n`;

  // Generate base tokens (light theme as default)
  const lightCSS = generateCSSVars(lightTheme, ':root');
  const lightWithPalette = `/* Design Tokens - Light Theme (Default) */\n\n${paletteCSS}\n${lightCSS}`;
  await fs.writeFile(path.join(OUTPUT_DIR, 'tokens.css'), lightWithPalette);

  // Generate light theme specific
  const lightThemeCSS = generateCSSVars(lightTheme, ':root, [data-theme="light"]');
  await fs.writeFile(path.join(OUTPUT_DIR, 'light.css'), `/* Light Theme */\n${lightThemeCSS}`);

  // Generate dark theme
  const darkThemeCSS = generateCSSVars(darkTheme, '[data-theme="dark"], .dark');
  await fs.writeFile(path.join(OUTPUT_DIR, 'dark.css'), `/* Dark Theme */\n${darkThemeCSS}`);

  // Generate combined file with palette + themes
  const combined = `/* Design Tokens CSS Variables */
/* Import this file for full theming support */

${paletteCSS}
/* Light Theme (Default) */
${lightCSS}
/* Dark Theme */
${darkThemeCSS}`;
  await fs.writeFile(path.join(OUTPUT_DIR, 'themes.css'), combined);

  console.log('✓ Generated CSS variable files:');
  console.log('  - src/css/tokens.css (default/light with palette)');
  console.log('  - src/css/light.css');
  console.log('  - src/css/dark.css');
  console.log('  - src/css/themes.css (combined)');
}

generateCSS().catch((error) => {
  console.error('Error generating CSS:', error);
  process.exit(1);
});
