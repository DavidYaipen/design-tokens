import {
  colorPalettes,
  lightSemanticColors,
  darkSemanticColors,
  type SemanticColors,
  type ColorPalettes,
} from '../core/colors';
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from '../core/typography';
import { spacing } from '../core/spacing';
import { shadows } from '../core/shadows';
import { borderRadius, borderWidths } from '../core/borders';
import { breakpoints, mediaQueries } from '../core/breakpoints';

export type Theme = {
  colors: SemanticColors;
  palette: ColorPalettes;
  typography: {
    fontFamilies: typeof fontFamilies;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    lineHeights: typeof lineHeights;
    letterSpacings: typeof letterSpacings;
  };
  spacing: typeof spacing;
  shadows: typeof shadows;
  borders: {
    borderRadius: typeof borderRadius;
    borderWidths: typeof borderWidths;
  };
  breakpoints: typeof breakpoints;
  mediaQueries: typeof mediaQueries;
};

export const lightTheme: Theme = {
  colors: lightSemanticColors,
  palette: colorPalettes,
  typography: { fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings },
  spacing,
  shadows,
  borders: { borderRadius, borderWidths },
  breakpoints,
  mediaQueries,
};

export const darkTheme: Theme = {
  ...lightTheme,
  colors: darkSemanticColors,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type ThemeName = keyof typeof themes;
