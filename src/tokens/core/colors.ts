/**
 * Color Palette - Scale 5-180
 * Auto-generated from design.config.ts
 */

// Gray scale
export const gray = {
  5: '#FAFAFA',
  10: '#F5F5F5',
  20: '#EEEEEE',
  30: '#E0E0E0',
  40: '#BDBDBD',
  50: '#9E9E9E',
  60: '#757575',
  70: '#616161',
  80: '#525252',
  90: '#424242',
  100: '#3D3D3D',
  110: '#353535',
  120: '#2E2E2E',
  130: '#262626',
  140: '#1F1F1F',
  150: '#1A1A1A',
  160: '#141414',
  170: '#0F0F0F',
  180: '#0A0A0A',
} as const;

// Blue scale
export const blue = {
  5: '#E8F4FD',
  10: '#D6EBFC',
  20: '#C0E0FA',
  30: '#A8D4F8',
  40: '#8BC5F5',
  50: '#6CB4F1',
  60: '#4DA2ED',
  70: '#3190E8',
  80: '#1F7FE0',
  90: '#1A6FC9',
  100: '#1660B3',
  110: '#13529D',
  120: '#104588',
  130: '#0D3973',
  140: '#0B2E5F',
  150: '#08244C',
  160: '#061B3A',
  170: '#041329',
  180: '#020B19',
} as const;

// Sky scale
export const sky = {
  5: '#E6FBFF',
  10: '#D1F7FF',
  20: '#B8F2FF',
  30: '#9CECFF',
  40: '#7DE5FF',
  50: '#5CDDFF',
  60: '#3AD3FF',
  70: '#1AC8FF',
  80: '#00BBFA',
  90: '#00A8E0',
  100: '#0096C7',
  110: '#0084AE',
  120: '#007396',
  130: '#00627E',
  140: '#005167',
  150: '#004150',
  160: '#00323B',
  170: '#002328',
  180: '#001516',
} as const;

// Purple scale
export const purple = {
  5: '#FAF5FF',
  10: '#F5EBFF',
  20: '#EEDCFF',
  30: '#E5C9FF',
  40: '#DAB3FF',
  50: '#CD99FF',
  60: '#BE7CFF',
  70: '#AD5CFF',
  80: '#9B3BFF',
  90: '#8B1FFF',
  100: '#7A0CE8',
  110: '#6A00D1',
  120: '#5B00BA',
  130: '#4D00A3',
  140: '#40008C',
  150: '#330075',
  160: '#27005E',
  170: '#1C0047',
  180: '#110030',
} as const;

// Red scale
export const red = {
  5: '#FFF5F5',
  10: '#FFE8E8',
  20: '#FFD6D6',
  30: '#FFC2C2',
  40: '#FFAAAA',
  50: '#FF8F8F',
  60: '#FF7070',
  70: '#FF4F4F',
  80: '#FF2D2D',
  90: '#F01010',
  100: '#D60C0C',
  110: '#BD0909',
  120: '#A40707',
  130: '#8C0505',
  140: '#740404',
  150: '#5D0303',
  160: '#470202',
  170: '#320101',
  180: '#1E0101',
} as const;

// Yellow scale
export const yellow = {
  5: '#FFFEF5',
  10: '#FFFDE8',
  20: '#FFFBD6',
  30: '#FFF8C2',
  40: '#FFF4AA',
  50: '#FFEF8F',
  60: '#FFE970',
  70: '#FFE14F',
  80: '#FFD82D',
  90: '#F5C800',
  100: '#DEB200',
  110: '#C79D00',
  120: '#B08900',
  130: '#997500',
  140: '#826200',
  150: '#6B5000',
  160: '#553F00',
  170: '#3F2E00',
  180: '#2A1F00',
} as const;

// All color palettes
export const colorPalettes = {
  gray,
  blue,
  sky,
  purple,
  red,
  yellow,
} as const;

export type ColorScale = typeof gray;
export type ColorPalettes = typeof colorPalettes;
export type ColorName = keyof ColorPalettes;
export type ColorShade = keyof ColorScale;

/**
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
};

/**
 * Light theme semantic colors
 */
export const lightSemanticColors: SemanticColors = {
  text: {
    primary: '#1A1A1A',
    secondary: '#525252',
    tertiary: '#757575',
    inverse: '#FFFFFF',
    link: '#1660B3',
    success: '#007396',
    error: '#D60C0C',
    warning: '#B08900',
    info: '#7A0CE8',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F5F5F5',
    inverse: '#141414',
    success: '#E6FBFF',
    error: '#FFF5F5',
    warning: '#FFFEF5',
    info: '#FAF5FF',
  },
  border: {
    primary: '#E0E0E0',
    secondary: '#EEEEEE',
    focus: '#1F7FE0',
    success: '#0096C7',
    error: '#FF2D2D',
    warning: '#F5C800',
    info: '#9B3BFF',
  },
  interactive: {
    primary: '#1660B3',
    primaryHover: '#13529D',
    primaryActive: '#104588',
    primaryDisabled: '#E0E0E0',
    secondary: '#EEEEEE',
    secondaryHover: '#E0E0E0',
    secondaryActive: '#BDBDBD',
  },
  status: {
    success: '#0096C7',
    error: '#F01010',
    warning: '#F5C800',
    info: '#9B3BFF',
  },
};

/**
 * Dark theme semantic colors
 */
export const darkSemanticColors: SemanticColors = {
  text: {
    primary: '#FAFAFA',
    secondary: '#E0E0E0',
    tertiary: '#9E9E9E',
    inverse: '#141414',
    link: '#6CB4F1',
    success: '#3AD3FF',
    error: '#FF7070',
    warning: '#FFE970',
    info: '#BE7CFF',
  },
  background: {
    primary: '#141414',
    secondary: '#1F1F1F',
    tertiary: '#262626',
    inverse: '#FFFFFF',
    success: '#00323B',
    error: '#470202',
    warning: '#553F00',
    info: '#27005E',
  },
  border: {
    primary: '#2E2E2E',
    secondary: '#262626',
    focus: '#3190E8',
    success: '#00A8E0',
    error: '#FF4F4F',
    warning: '#FFD82D',
    info: '#AD5CFF',
  },
  interactive: {
    primary: '#1F7FE0',
    primaryHover: '#3190E8',
    primaryActive: '#4DA2ED',
    primaryDisabled: '#2E2E2E',
    secondary: '#2E2E2E',
    secondaryHover: '#353535',
    secondaryActive: '#3D3D3D',
  },
  status: {
    success: '#00BBFA',
    error: '#FF2D2D',
    warning: '#FFD82D',
    info: '#AD5CFF',
  },
};

// Legacy exports for compatibility
export const colorPalette = {
  ...Object.fromEntries(
    Object.entries(gray).map(([k, v]) => [`gray${k}`, v])
  ),
  ...Object.fromEntries(
    Object.entries(blue).map(([k, v]) => [`brand${k}`, v])
  ),
  ...Object.fromEntries(
    Object.entries(sky).map(([k, v]) => [`success${k}`, v])
  ),
  ...Object.fromEntries(
    Object.entries(red).map(([k, v]) => [`error${k}`, v])
  ),
  ...Object.fromEntries(
    Object.entries(yellow).map(([k, v]) => [`warning${k}`, v])
  ),
  ...Object.fromEntries(
    Object.entries(purple).map(([k, v]) => [`info${k}`, v])
  ),
} as const;

export type ColorToken = SemanticColors;
export const semanticColors = lightSemanticColors;
