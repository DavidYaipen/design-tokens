import { fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings } from '../tokens/core/typography';
import { spacing } from '../tokens/core/spacing';
import { shadows } from '../tokens/core/shadows';
import { borderRadius, borderWidths } from '../tokens/core/borders';
import { breakpoints } from '../tokens/core/breakpoints';
import { durations, easings, keyframes, animationPresets } from '../tokens/core/animations';
import { zIndex } from '../tokens/core/zindex';
import { getAllTailwindColors } from './colors';
import type { TailwindPreset, TailwindPresetOptions } from './types';

/**
 * Create a Tailwind CSS preset from design tokens
 */
export function createTailwindPreset(options: TailwindPresetOptions = {}): TailwindPreset {
  const { cssVariables = true, extend = false, darkMode = 'class' } = options;

  const colors = getAllTailwindColors(cssVariables);

  const themeConfig = {
    colors,
    fontFamily: {
      sans: fontFamilies.sans.split(', '),
      mono: fontFamilies.mono.split(', '),
    },
    fontSize: {
      xs: fontSizes.xs,
      sm: fontSizes.sm,
      base: fontSizes.base,
      lg: fontSizes.lg,
      xl: fontSizes.xl,
      '2xl': fontSizes['2xl'],
      '3xl': fontSizes['3xl'],
      '4xl': fontSizes['4xl'],
      '5xl': fontSizes['5xl'],
    },
    fontWeight: {
      light: String(fontWeights.light),
      normal: String(fontWeights.normal),
      medium: String(fontWeights.medium),
      semibold: String(fontWeights.semibold),
      bold: String(fontWeights.bold),
    },
    lineHeight: {
      tight: String(lineHeights.tight),
      normal: String(lineHeights.normal),
      relaxed: String(lineHeights.relaxed),
    },
    letterSpacing: {
      tighter: letterSpacings.tighter,
      tight: letterSpacings.tight,
      normal: letterSpacings.normal,
      wide: letterSpacings.wide,
      wider: letterSpacings.wider,
      widest: letterSpacings.widest,
    },
    spacing: { ...spacing },
    boxShadow: {
      none: shadows.none,
      sm: shadows.sm,
      DEFAULT: shadows.base,
      md: shadows.md,
      lg: shadows.lg,
      xl: shadows.xl,
      '2xl': shadows['2xl'],
      inner: shadows.inner,
    },
    borderRadius: {
      none: borderRadius.none,
      sm: borderRadius.sm,
      DEFAULT: borderRadius.base,
      md: borderRadius.md,
      lg: borderRadius.lg,
      xl: borderRadius.xl,
      '2xl': borderRadius['2xl'],
      full: borderRadius.full,
    },
    borderWidth: {
      0: borderWidths[0],
      DEFAULT: borderWidths[1],
      2: borderWidths[2],
      4: borderWidths[4],
    },
    screens: {
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
      '2xl': breakpoints['2xl'],
    },
    // Animation tokens
    transitionDuration: {
      instant: durations.instant,
      fast: durations.fast,
      DEFAULT: durations.normal,
      slow: durations.slow,
      slower: durations.slower,
      slowest: durations.slowest,
    },
    transitionTimingFunction: {
      linear: easings.linear,
      ease: easings.ease,
      'ease-in': easings.easeIn,
      'ease-out': easings.easeOut,
      'ease-in-out': easings.easeInOut,
      'ease-in-quad': easings.easeInQuad,
      'ease-out-quad': easings.easeOutQuad,
      'ease-in-out-quad': easings.easeInOutQuad,
      'ease-in-cubic': easings.easeInCubic,
      'ease-out-cubic': easings.easeOutCubic,
      'ease-in-out-cubic': easings.easeInOutCubic,
      'ease-in-back': easings.easeInBack,
      'ease-out-back': easings.easeOutBack,
      'ease-in-out-back': easings.easeInOutBack,
      spring: easings.spring,
    },
    keyframes: {
      fadeIn: keyframes.fadeIn,
      fadeOut: keyframes.fadeOut,
      slideInUp: keyframes.slideInUp,
      slideInDown: keyframes.slideInDown,
      slideInLeft: keyframes.slideInLeft,
      slideInRight: keyframes.slideInRight,
      scaleIn: keyframes.scaleIn,
      scaleOut: keyframes.scaleOut,
      spin: keyframes.spin,
      ping: keyframes.ping,
      pulse: keyframes.pulse,
      bounce: keyframes.bounce,
      shake: keyframes.shake,
    },
    animation: {
      none: 'none',
      fadeIn: animationPresets.fadeIn,
      fadeOut: animationPresets.fadeOut,
      slideInUp: animationPresets.slideInUp,
      slideInDown: animationPresets.slideInDown,
      slideInLeft: animationPresets.slideInLeft,
      slideInRight: animationPresets.slideInRight,
      scaleIn: animationPresets.scaleIn,
      scaleOut: animationPresets.scaleOut,
      spin: animationPresets.spin,
      ping: animationPresets.ping,
      pulse: animationPresets.pulse,
      bounce: animationPresets.bounce,
      shake: animationPresets.shake,
    },
    // Z-index scale
    zIndex: {
      auto: 'auto',
      behind: String(zIndex.behind),
      base: String(zIndex.base),
      raised: String(zIndex.raised),
      dropdown: String(zIndex.dropdown),
      sticky: String(zIndex.sticky),
      header: String(zIndex.header),
      overlay: String(zIndex.overlay),
      modal: String(zIndex.modal),
      popover: String(zIndex.popover),
      tooltip: String(zIndex.tooltip),
      toast: String(zIndex.toast),
      max: String(zIndex.max),
    },
  };

  if (extend) {
    return {
      darkMode,
      theme: {
        extend: themeConfig,
      },
    };
  }

  return {
    darkMode,
    theme: themeConfig,
  };
}

/**
 * Default Tailwind preset with CSS variables for theming
 */
export const tailwindPreset: TailwindPreset = createTailwindPreset({
  cssVariables: true,
  extend: false,
  darkMode: 'class',
});
