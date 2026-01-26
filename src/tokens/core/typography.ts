/**
 * Typography Tokens
 * Auto-generated from design.config.ts
 */

export const fontFamilies = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  mono: '"Fira Code", "JetBrains Mono", Consolas, monospace',
} as const;

export const fontSizes = {
  'xs': '0.75rem',
  'sm': '0.875rem',
  'base': '1rem',
  'lg': '1.125rem',
  'xl': '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
} as const;

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeights = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75,
} as const;

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
