/**
 * Design System Configuration Types
 */

export type ColorShade = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160 | 170 | 180;

export type ColorPalette = Record<ColorShade, string>;

export interface PaletteColorRef {
  palette: string;
  shade: ColorShade;
}

export interface DirectColorValue {
  value: string;
}

export type SemanticColorValue = PaletteColorRef | DirectColorValue;

export interface SemanticColorCategories {
  text: {
    primary: SemanticColorValue;
    secondary: SemanticColorValue;
    tertiary: SemanticColorValue;
    inverse: SemanticColorValue;
    link: SemanticColorValue;
    success: SemanticColorValue;
    error: SemanticColorValue;
    warning: SemanticColorValue;
    info: SemanticColorValue;
  };
  background: {
    primary: SemanticColorValue;
    secondary: SemanticColorValue;
    tertiary: SemanticColorValue;
    inverse: SemanticColorValue;
    success: SemanticColorValue;
    error: SemanticColorValue;
    warning: SemanticColorValue;
    info: SemanticColorValue;
  };
  border: {
    primary: SemanticColorValue;
    secondary: SemanticColorValue;
    focus: SemanticColorValue;
    success: SemanticColorValue;
    error: SemanticColorValue;
    warning: SemanticColorValue;
    info: SemanticColorValue;
  };
  interactive: {
    primary: SemanticColorValue;
    primaryHover: SemanticColorValue;
    primaryActive: SemanticColorValue;
    primaryDisabled: SemanticColorValue;
    secondary: SemanticColorValue;
    secondaryHover: SemanticColorValue;
    secondaryActive: SemanticColorValue;
  };
  status: {
    success: SemanticColorValue;
    error: SemanticColorValue;
    warning: SemanticColorValue;
    info: SemanticColorValue;
  };
}

export interface ColorsConfig {
  palettes: Record<string, ColorPalette>;
  semantic: {
    light: SemanticColorCategories;
    dark: SemanticColorCategories;
  };
}

export interface IconsConfig {
  sourceDir: string;
  output: {
    react: string;
    vue: string;
  };
  defaultSize: number;
  colorReplacements: string[];
}

export interface TypographyConfig {
  fontFamilies: Record<string, string>;
  fontSizes: Record<string, string>;
  fontWeights: Record<string, number>;
  lineHeights: Record<string, number>;
}

export type SpacingConfig = Record<string | number, string>;

export interface BordersConfig {
  radius: Record<string, string>;
  widths: Record<string | number, string>;
}

export type ShadowsConfig = Record<string, string>;

export type BreakpointsConfig = Record<string, string>;

export interface DesignConfig {
  colors: ColorsConfig;
  icons: IconsConfig;
  typography: TypographyConfig;
  spacing: SpacingConfig;
  borders: BordersConfig;
  shadows: ShadowsConfig;
  breakpoints: BreakpointsConfig;
}
