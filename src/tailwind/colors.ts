import {
  colorPalettes,
  lightSemanticColors,
  darkSemanticColors,
} from '../tokens/core/colors';
import type { TailwindColorPalette, TailwindSemanticColors, TailwindColorScale } from './types';

/**
 * Get all color palettes for Tailwind (static values)
 */
export function getTailwindColorPalette(): TailwindColorPalette {
  return {
    gray: colorPalettes.gray as unknown as TailwindColorScale,
    blue: colorPalettes.blue as unknown as TailwindColorScale,
    sky: colorPalettes.sky as unknown as TailwindColorScale,
    purple: colorPalettes.purple as unknown as TailwindColorScale,
    red: colorPalettes.red as unknown as TailwindColorScale,
    yellow: colorPalettes.yellow as unknown as TailwindColorScale,
  };
}

/**
 * Get semantic colors for light theme (static values)
 */
export function getTailwindSemanticColors(): TailwindSemanticColors {
  return {
    text: {
      primary: lightSemanticColors.text.primary,
      secondary: lightSemanticColors.text.secondary,
      tertiary: lightSemanticColors.text.tertiary,
      inverse: lightSemanticColors.text.inverse,
      link: lightSemanticColors.text.link,
      success: lightSemanticColors.text.success,
      error: lightSemanticColors.text.error,
      warning: lightSemanticColors.text.warning,
      info: lightSemanticColors.text.info,
    },
    background: {
      primary: lightSemanticColors.background.primary,
      secondary: lightSemanticColors.background.secondary,
      tertiary: lightSemanticColors.background.tertiary,
      inverse: lightSemanticColors.background.inverse,
      success: lightSemanticColors.background.success,
      error: lightSemanticColors.background.error,
      warning: lightSemanticColors.background.warning,
      info: lightSemanticColors.background.info,
    },
    border: {
      primary: lightSemanticColors.border.primary,
      secondary: lightSemanticColors.border.secondary,
      focus: lightSemanticColors.border.focus,
      success: lightSemanticColors.border.success,
      error: lightSemanticColors.border.error,
      warning: lightSemanticColors.border.warning,
      info: lightSemanticColors.border.info,
    },
    interactive: {
      primary: lightSemanticColors.interactive.primary,
      primaryHover: lightSemanticColors.interactive.primaryHover,
      primaryActive: lightSemanticColors.interactive.primaryActive,
      primaryDisabled: lightSemanticColors.interactive.primaryDisabled,
      secondary: lightSemanticColors.interactive.secondary,
      secondaryHover: lightSemanticColors.interactive.secondaryHover,
      secondaryActive: lightSemanticColors.interactive.secondaryActive,
    },
    status: {
      success: lightSemanticColors.status.success,
      error: lightSemanticColors.status.error,
      warning: lightSemanticColors.status.warning,
      info: lightSemanticColors.status.info,
    },
  };
}

/**
 * Get semantic colors using CSS variables for dynamic theming
 */
export function getTailwindSemanticColorsCssVars(): TailwindSemanticColors {
  return {
    text: {
      primary: 'var(--colors-text-primary)',
      secondary: 'var(--colors-text-secondary)',
      tertiary: 'var(--colors-text-tertiary)',
      inverse: 'var(--colors-text-inverse)',
      link: 'var(--colors-text-link)',
      success: 'var(--colors-text-success)',
      error: 'var(--colors-text-error)',
      warning: 'var(--colors-text-warning)',
      info: 'var(--colors-text-info)',
    },
    background: {
      primary: 'var(--colors-background-primary)',
      secondary: 'var(--colors-background-secondary)',
      tertiary: 'var(--colors-background-tertiary)',
      inverse: 'var(--colors-background-inverse)',
      success: 'var(--colors-background-success)',
      error: 'var(--colors-background-error)',
      warning: 'var(--colors-background-warning)',
      info: 'var(--colors-background-info)',
    },
    border: {
      primary: 'var(--colors-border-primary)',
      secondary: 'var(--colors-border-secondary)',
      focus: 'var(--colors-border-focus)',
      success: 'var(--colors-border-success)',
      error: 'var(--colors-border-error)',
      warning: 'var(--colors-border-warning)',
      info: 'var(--colors-border-info)',
    },
    interactive: {
      primary: 'var(--colors-interactive-primary)',
      primaryHover: 'var(--colors-interactive-primaryHover)',
      primaryActive: 'var(--colors-interactive-primaryActive)',
      primaryDisabled: 'var(--colors-interactive-primaryDisabled)',
      secondary: 'var(--colors-interactive-secondary)',
      secondaryHover: 'var(--colors-interactive-secondaryHover)',
      secondaryActive: 'var(--colors-interactive-secondaryActive)',
    },
    status: {
      success: 'var(--colors-status-success)',
      error: 'var(--colors-status-error)',
      warning: 'var(--colors-status-warning)',
      info: 'var(--colors-status-info)',
    },
  };
}

/**
 * Combine all colors for Tailwind theme
 */
export function getAllTailwindColors(useCssVariables = true): Record<string, unknown> {
  const palette = getTailwindColorPalette();
  const semantic = useCssVariables
    ? getTailwindSemanticColorsCssVars()
    : getTailwindSemanticColors();

  return {
    transparent: 'transparent',
    current: 'currentColor',
    white: '#ffffff',
    black: '#000000',
    ...palette,
    ...semantic,
  };
}

// Export color palettes directly
export { colorPalettes, lightSemanticColors, darkSemanticColors };
