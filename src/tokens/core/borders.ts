/**
 * Border Tokens
 * Auto-generated from design.config.ts
 */

export const borderRadius = {
  'none': '0',
  'sm': '0.125rem',
  'base': '0.25rem',
  'md': '0.375rem',
  'lg': '0.5rem',
  'xl': '0.75rem',
  '2xl': '1rem',
  'full': '9999px',
} as const;

export const borderWidths = {
  '0': '0',
  '1': '1px',
  '2': '2px',
  '4': '4px',
} as const;

export type BorderRadiusKey = keyof typeof borderRadius;
export type BorderWidthKey = keyof typeof borderWidths;
