/**
 * Breakpoint Tokens
 * Auto-generated from design.config.ts
 */

export const breakpoints = {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
} as const;

export type BreakpointKey = keyof typeof breakpoints;
export type BreakpointValue = (typeof breakpoints)[BreakpointKey];

export const mediaQueries = {
  'sm': `@media (min-width: ${breakpoints['sm']})`,
  'md': `@media (min-width: ${breakpoints['md']})`,
  'lg': `@media (min-width: ${breakpoints['lg']})`,
  'xl': `@media (min-width: ${breakpoints['xl']})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
} as const;
