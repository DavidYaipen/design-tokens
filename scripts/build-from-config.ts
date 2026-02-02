/**
 * Build from Config
 * =================
 * Este script lee design.config.ts y genera todos los tokens
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import type {
  DesignConfig,
  SemanticColorValue,
  ColorPalette,
} from '../src/types/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar configuración
async function loadConfig(): Promise<DesignConfig> {
  const configPath = path.resolve(__dirname, '../design.config.ts');
  // Convertir a file:// URL para Windows
  const configUrl = new URL(`file:///${configPath.replace(/\\/g, '/')}`).href;
  const config = await import(configUrl);
  return config.default;
}

// Resolver un color semántico a su valor hexadecimal
function resolveColor(
  value: SemanticColorValue,
  palettes: Record<string, ColorPalette>
): string {
  if ('value' in value) {
    return value.value;
  }
  const palette = palettes[value.palette];
  if (!palette) {
    throw new Error(`Palette "${value.palette}" not found`);
  }
  const color = palette[value.shade];
  if (!color) {
    throw new Error(`Shade ${value.shade} not found in palette "${value.palette}"`);
  }
  return color;
}

// Generar archivo de colores TypeScript
async function generateColorsTS(config: DesignConfig): Promise<void> {
  const { palettes, semantic } = config.colors;

  let content = `/**
 * Color Palette - Scale 5-180
 * Auto-generated from design.config.ts
 */

`;

  // Generar cada paleta
  for (const [name, shades] of Object.entries(palettes)) {
    content += `// ${name.charAt(0).toUpperCase() + name.slice(1)} scale\n`;
    content += `export const ${name} = {\n`;
    for (const [shade, value] of Object.entries(shades)) {
      content += `  ${shade}: '${value}',\n`;
    }
    content += `} as const;\n\n`;
  }

  // Generar colorPalettes
  const paletteNames = Object.keys(palettes);
  content += `// All color palettes\nexport const colorPalettes = {\n`;
  for (const name of paletteNames) {
    content += `  ${name},\n`;
  }
  content += `} as const;\n\n`;

  // Tipos
  content += `export type ColorScale = typeof ${paletteNames[0]};\n`;
  content += `export type ColorPalettes = typeof colorPalettes;\n`;
  content += `export type ColorName = keyof ColorPalettes;\n`;
  content += `export type ColorShade = keyof ColorScale;\n\n`;

  // Tipo SemanticColors
  content += `/**
 * Semantic color tokens type
 */
export type SemanticColors = {
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    link: string;
    success: string;
    error: string;
    warning: string;
    info: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    success: string;
    error: string;
    warning: string;
    info: string;
  };
  border: {
    primary: string;
    secondary: string;
    focus: string;
    success: string;
    error: string;
    warning: string;
    info: string;
  };
  interactive: {
    primary: string;
    primaryHover: string;
    primaryActive: string;
    primaryDisabled: string;
    secondary: string;
    secondaryHover: string;
    secondaryActive: string;
  };
  status: {
    success: string;
    error: string;
    warning: string;
    info: string;
  };
};\n\n`;

  // Generar lightSemanticColors
  content += `/**
 * Light theme semantic colors
 */
export const lightSemanticColors: SemanticColors = {\n`;
  for (const [category, tokens] of Object.entries(semantic.light)) {
    content += `  ${category}: {\n`;
    for (const [tokenName, tokenValue] of Object.entries(tokens as Record<string, SemanticColorValue>)) {
      const resolved = resolveColor(tokenValue, palettes);
      content += `    ${tokenName}: '${resolved}',\n`;
    }
    content += `  },\n`;
  }
  content += `};\n\n`;

  // Generar darkSemanticColors
  content += `/**
 * Dark theme semantic colors
 */
export const darkSemanticColors: SemanticColors = {\n`;
  for (const [category, tokens] of Object.entries(semantic.dark)) {
    content += `  ${category}: {\n`;
    for (const [tokenName, tokenValue] of Object.entries(tokens as Record<string, SemanticColorValue>)) {
      const resolved = resolveColor(tokenValue, palettes);
      content += `    ${tokenName}: '${resolved}',\n`;
    }
    content += `  },\n`;
  }
  content += `};\n\n`;

  // Legacy exports
  content += `// Legacy exports for compatibility
export const colorPalette = {
  ...Object.fromEntries(
    Object.entries(gray).map(([k, v]) => [\`gray\${k}\`, v])
  ),
  ...Object.fromEntries(
    Object.entries(blue).map(([k, v]) => [\`brand\${k}\`, v])
  ),
  ...Object.fromEntries(
    Object.entries(green).map(([k, v]) => [\`success\${k}\`, v])
  ),
  ...Object.fromEntries(
    Object.entries(red).map(([k, v]) => [\`error\${k}\`, v])
  ),
  ...Object.fromEntries(
    Object.entries(yellow).map(([k, v]) => [\`warning\${k}\`, v])
  ),
  ...Object.fromEntries(
    Object.entries(purple).map(([k, v]) => [\`info\${k}\`, v])
  ),
} as const;

export type ColorToken = SemanticColors;
export const semanticColors = lightSemanticColors;
`;

  const outputPath = path.resolve(__dirname, '../src/tokens/core/colors.ts');
  await fs.writeFile(outputPath, content);
  console.log('✓ Generated: src/tokens/core/colors.ts');
}

// Generar archivo de tipografía
async function generateTypographyTS(config: DesignConfig): Promise<void> {
  const { fontFamilies, fontSizes, fontWeights, lineHeights } = config.typography;

  let content = `/**
 * Typography Tokens
 * Auto-generated from design.config.ts
 */

export const fontFamilies = {\n`;
  for (const [name, value] of Object.entries(fontFamilies)) {
    content += `  ${name}: '${value}',\n`;
  }
  content += `} as const;

export const fontSizes = {\n`;
  for (const [name, value] of Object.entries(fontSizes)) {
    content += `  '${name}': '${value}',\n`;
  }
  content += `} as const;

export const fontWeights = {\n`;
  for (const [name, value] of Object.entries(fontWeights)) {
    content += `  ${name}: ${value},\n`;
  }
  content += `} as const;

export const lineHeights = {\n`;
  for (const [name, value] of Object.entries(lineHeights)) {
    content += `  ${name}: ${value},\n`;
  }
  content += `} as const;

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

export type FontFamily = keyof typeof fontFamilies;
export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type LineHeight = keyof typeof lineHeights;
export type LetterSpacing = keyof typeof letterSpacings;

export const typography = {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} as const;
`;

  const outputPath = path.resolve(__dirname, '../src/tokens/core/typography.ts');
  await fs.writeFile(outputPath, content);
  console.log('✓ Generated: src/tokens/core/typography.ts');
}

// Generar archivo de espaciado
async function generateSpacingTS(config: DesignConfig): Promise<void> {
  const { spacing } = config;

  let content = `/**
 * Spacing Tokens
 * Auto-generated from design.config.ts
 */

export const spacing = {\n`;
  for (const [name, value] of Object.entries(spacing)) {
    content += `  '${name}': '${value}',\n`;
  }
  content += `} as const;

export type SpacingKey = keyof typeof spacing;
export type SpacingValue = (typeof spacing)[SpacingKey];
`;

  const outputPath = path.resolve(__dirname, '../src/tokens/core/spacing.ts');
  await fs.writeFile(outputPath, content);
  console.log('✓ Generated: src/tokens/core/spacing.ts');
}

// Generar archivo de bordes
async function generateBordersTS(config: DesignConfig): Promise<void> {
  const { radius, widths } = config.borders;

  let content = `/**
 * Border Tokens
 * Auto-generated from design.config.ts
 */

export const borderRadius = {\n`;
  for (const [name, value] of Object.entries(radius)) {
    content += `  '${name}': '${value}',\n`;
  }
  content += `} as const;

export const borderWidths = {\n`;
  for (const [name, value] of Object.entries(widths)) {
    content += `  '${name}': '${value}',\n`;
  }
  content += `} as const;

export type BorderRadiusKey = keyof typeof borderRadius;
export type BorderWidthKey = keyof typeof borderWidths;
`;

  const outputPath = path.resolve(__dirname, '../src/tokens/core/borders.ts');
  await fs.writeFile(outputPath, content);
  console.log('✓ Generated: src/tokens/core/borders.ts');
}

// Generar archivo de sombras
async function generateShadowsTS(config: DesignConfig): Promise<void> {
  const { shadows } = config;

  let content = `/**
 * Shadow Tokens
 * Auto-generated from design.config.ts
 */

export const shadows = {\n`;
  for (const [name, value] of Object.entries(shadows)) {
    content += `  '${name}': '${value}',\n`;
  }
  content += `} as const;

export type ShadowKey = keyof typeof shadows;
export type ShadowValue = (typeof shadows)[ShadowKey];
`;

  const outputPath = path.resolve(__dirname, '../src/tokens/core/shadows.ts');
  await fs.writeFile(outputPath, content);
  console.log('✓ Generated: src/tokens/core/shadows.ts');
}

// Generar archivo de breakpoints
async function generateBreakpointsTS(config: DesignConfig): Promise<void> {
  const { breakpoints } = config;

  let content = `/**
 * Breakpoint Tokens
 * Auto-generated from design.config.ts
 */

export const breakpoints = {\n`;
  for (const [name, value] of Object.entries(breakpoints)) {
    content += `  '${name}': '${value}',\n`;
  }
  content += `} as const;

export type BreakpointKey = keyof typeof breakpoints;
export type BreakpointValue = (typeof breakpoints)[BreakpointKey];

export const mediaQueries = {\n`;
  for (const [name, value] of Object.entries(breakpoints)) {
    content += `  '${name}': \`@media (min-width: \${breakpoints['${name}']})\`,\n`;
  }
  content += `} as const;
`;

  const outputPath = path.resolve(__dirname, '../src/tokens/core/breakpoints.ts');
  await fs.writeFile(outputPath, content);
  console.log('✓ Generated: src/tokens/core/breakpoints.ts');
}

// Generar archivo de animaciones
async function generateAnimationsTS(config: DesignConfig): Promise<void> {
  const { animations } = config;

  let content = `/**
 * Animation & Transition Tokens
 * Auto-generated from design.config.ts
 */

/**
 * Transition durations
 */
export const durations = {\n`;
  for (const [name, value] of Object.entries(animations.durations)) {
    content += `  ${name}: '${value}',\n`;
  }
  content += `} as const;

/**
 * Easing functions
 */
export const easings = {\n`;
  for (const [name, value] of Object.entries(animations.easings)) {
    content += `  ${name}: '${value}',\n`;
  }
  content += `} as const;

/**
 * Keyframe definitions
 */
export const keyframes = {\n`;
  for (const [name, steps] of Object.entries(animations.keyframes)) {
    content += `  ${name}: {\n`;
    for (const [step, props] of Object.entries(steps)) {
      content += `    '${step}': {\n`;
      for (const [prop, val] of Object.entries(props as Record<string, string>)) {
        content += `      ${prop}: '${val}',\n`;
      }
      content += `    },\n`;
    }
    content += `  },\n`;
  }
  content += `} as const;

/**
 * Animation presets (ready to use)
 */
export const animationPresets = {\n`;
  for (const [name, value] of Object.entries(animations.presets)) {
    content += `  ${name}: '${value}',\n`;
  }
  content += `} as const;

export type Duration = keyof typeof durations;
export type Easing = keyof typeof easings;
export type KeyframeName = keyof typeof keyframes;
export type AnimationPreset = keyof typeof animationPresets;

/**
 * Helper to create a transition string
 */
export function createTransition(
  property: string | string[] = 'all',
  duration: Duration = 'normal',
  easing: Easing = 'ease'
): string {
  const props = Array.isArray(property) ? property : [property];
  return props.map(p => \`\${p} \${durations[duration]} \${easings[easing]}\`).join(', ');
}

export const animations = {
  durations,
  easings,
  keyframes,
  presets: animationPresets,
  createTransition,
} as const;
`;

  const outputPath = path.resolve(__dirname, '../src/tokens/core/animations.ts');
  await fs.writeFile(outputPath, content);
  console.log('✓ Generated: src/tokens/core/animations.ts');
}

// Generar archivo de z-index
async function generateZIndexTS(config: DesignConfig): Promise<void> {
  const { zIndex } = config;

  let content = `/**
 * Z-Index Scale
 * Auto-generated from design.config.ts
 */

export const zIndex = {\n`;
  for (const [name, value] of Object.entries(zIndex)) {
    content += `  ${name}: ${value},\n`;
  }
  content += `} as const;

export type ZIndexKey = keyof typeof zIndex;
export type ZIndexValue = (typeof zIndex)[ZIndexKey];

/**
 * Get z-index value by key
 */
export function getZIndex(key: ZIndexKey): number {
  return zIndex[key];
}
`;

  const outputPath = path.resolve(__dirname, '../src/tokens/core/zindex.ts');
  await fs.writeFile(outputPath, content);
  console.log('✓ Generated: src/tokens/core/zindex.ts');
}

// Función principal
async function main() {
  console.log('Building tokens from design.config.ts...\n');

  try {
    const config = await loadConfig();

    await Promise.all([
      generateColorsTS(config),
      generateTypographyTS(config),
      generateSpacingTS(config),
      generateBordersTS(config),
      generateShadowsTS(config),
      generateBreakpointsTS(config),
      generateAnimationsTS(config),
      generateZIndexTS(config),
    ]);

    console.log('\n✓ All tokens generated successfully!');
  } catch (error) {
    console.error('Error building from config:', error);
    process.exit(1);
  }
}

main();
