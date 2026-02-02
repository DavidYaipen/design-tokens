/**
 * Color Palette - Scale 5-180
 * Auto-generated from design.config.ts
 */

// Gray scale
export const gray = {
  5: '#F9F9F9',
  10: '#F2F2F2',
  20: '#E4E4E5',
  30: '#D6D7D8',
  40: '#C8C9CB',
  50: '#BABBBE',
  60: '#ACADB1',
  70: '#9E9FA4',
  80: '#909296',
  90: '#828489',
  100: '#74767C',
  110: '#6B6D73',
  120: '#626469',
  130: '#595B60',
  140: '#505256',
  150: '#46484D',
  160: '#3D3F43',
  170: '#34363A',
  180: '#2B2D30',
} as const;

// Blue scale
export const blue = {
  5: '#E0ECF6',
  10: '#D7E5F2',
  20: '#C6D8E8',
  30: '#B4CBDF',
  40: '#A3BED6',
  50: '#91B1CD',
  60: '#7FA4C4',
  70: '#6E96BB',
  80: '#5C89B2',
  90: '#4B7CA9',
  100: '#396FA0',
  110: '#356895',
  120: '#31618A',
  130: '#2D597F',
  140: '#295274',
  150: '#264A69',
  160: '#22435E',
  170: '#1E3B54',
  180: '#1B344B',
} as const;

// SkyBlue scale
export const skyBlue = {
  5: '#EBF5FF',
  10: '#DCEEFF',
  20: '#BFE2FF',
  30: '#A3D6FF',
  40: '#86CAFF',
  50: '#6ABEFF',
  60: '#4DB2FF',
  70: '#31A6FF',
  80: '#149AFF',
  90: '#008EFF',
  100: '#0080FF',
  110: '#0A72E6',
  120: '#095CDD',
  130: '#0E4BCB',
  140: '#1239BA',
  150: '#1727A9',
  160: '#1B1698',
  170: '#200486',
  180: '#240075',
} as const;

// Purple scale
export const purple = {
  5: '#FCF8FB',
  10: '#F3E8F2',
  20: '#EAD6E8',
  30: '#E1C4DF',
  40: '#D8B3D5',
  50: '#D0A3CD',
  60: '#C790C2',
  70: '#BE80B9',
  80: '#B66EB0',
  90: '#AD5DA6',
  100: '#A6509F',
  110: '#984992',
  120: '#8A4285',
  130: '#7C3C77',
  140: '#6F356A',
  150: '#612E5D',
  160: '#532850',
  170: '#452142',
  180: '#371A35',
} as const;

// Red scale
export const red = {
  5: '#F6F2F1',
  10: '#FDE9E8',
  20: '#FBD0CC',
  30: '#F9BDB8',
  40: '#F8ACA6',
  50: '#F69991',
  60: '#F4857C',
  70: '#F27066',
  80: '#F0594D',
  90: '#EE392B',
  100: '#EA1100',
  110: '#CE0F00',
  120: '#B70D00',
  130: '#A20C00',
  140: '#8D0A00',
  150: '#780900',
  160: '#630700',
  170: '#500600',
  180: '#3D0400',
} as const;

// Yellow scale
export const yellow = {
  5: '#FFFCF4',
  10: '#FFF9E9',
  20: '#FFF3D3',
  30: '#FFEDBC',
  40: '#FFE7A6',
  50: '#FFE190',
  60: '#FFDA79',
  70: '#FFD463',
  80: '#FFCE4D',
  90: '#FFC836',
  100: '#FFC220',
  110: '#E8AF1C',
  120: '#D29D19',
  130: '#BB8A15',
  140: '#A47711',
  150: '#8D640D',
  160: '#77520A',
  170: '#603F06',
  180: '#492C02',
} as const;

// Green scale
export const green = {
  5: '#F2FFEF',
  10: '#E3FED7',
  20: '#C6F9A9',
  30: '#A8F07A',
  40: '#8DE64F',
  50: '#6FDB2E',
  60: '#52CD1A',
  70: '#3FBA10',
  80: '#2EA314',
  90: '#399A12',
  100: '#329210',
  110: '#2A8703',
  120: '#267A03',
  130: '#226D03',
  140: '#1D5F02',
  150: '#195102',
  160: '#184705',
  170: '#0B3A0A',
  180: '#143214',
} as const;

// Orange scale
export const orange = {
  5: '#FFF7F2',
  10: '#FFF0E6',
  20: '#FFE1CC',
  30: '#FFD2B3',
  40: '#FFC399',
  50: '#FFB480',
  60: '#FFA566',
  70: '#FF964D',
  80: '#FF8733',
  90: '#FF781A',
  100: '#FA6400',
  110: '#E95E00',
  120: '#D95501',
  130: '#C94B01',
  140: '#B94102',
  150: '#A93702',
  160: '#993002',
  170: '#6F2803',
  180: '#4E2103',
} as const;

// Cyan scale
export const cyan = {
  5: '#F6FFFF',
  10: '#E3FFFF',
  20: '#CFFFFF',
  30: '#B5FFFF',
  40: '#80FFFF',
  50: '#00FFFF',
  60: '#00F3F3',
  70: '#00E7E7',
  80: '#00DCDC',
  90: '#00D0D0',
  100: '#00C4C4',
  110: '#00B8B8',
  120: '#00ACAC',
  130: '#00A1A1',
  140: '#009595',
  150: '#008989',
  160: '#007E7E',
  170: '#007272',
  180: '#006666',
} as const;

// All color palettes
export const colorPalettes = {
  gray,
  blue,
  skyBlue,
  purple,
  red,
  yellow,
  green,
  orange,
  cyan,
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
    primary: '#46484D',
    secondary: '#909296',
    tertiary: '#ACADB1',
    inverse: '#FFFFFF',
    link: '#0080FF',
    success: '#267A03',
    error: '#EA1100',
    warning: '#D95501',
    info: '#095CDD',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F9F9F9',
    tertiary: '#F2F2F2',
    inverse: '#3D3F43',
    success: '#F2FFEF',
    error: '#F6F2F1',
    warning: '#FFF7F2',
    info: '#EBF5FF',
  },
  border: {
    primary: '#D6D7D8',
    secondary: '#E4E4E5',
    focus: '#0080FF',
    success: '#329210',
    error: '#F0594D',
    warning: '#FF781A',
    info: '#0080FF',
  },
  interactive: {
    primary: '#0080FF',
    primaryHover: '#0A72E6',
    primaryActive: '#095CDD',
    primaryDisabled: '#D6D7D8',
    secondary: '#E4E4E5',
    secondaryHover: '#D6D7D8',
    secondaryActive: '#C8C9CB',
  },
  status: {
    success: '#329210',
    error: '#EA1100',
    warning: '#FA6400',
    info: '#0080FF',
  },
};

/**
 * Dark theme semantic colors
 */
export const darkSemanticColors: SemanticColors = {
  text: {
    primary: '#F9F9F9',
    secondary: '#D6D7D8',
    tertiary: '#BABBBE',
    inverse: '#3D3F43',
    link: '#4DB2FF',
    success: '#52CD1A',
    error: '#F4857C',
    warning: '#FFA566',
    info: '#4DB2FF',
  },
  background: {
    primary: '#3D3F43',
    secondary: '#505256',
    tertiary: '#595B60',
    inverse: '#FFFFFF',
    success: '#184705',
    error: '#630700',
    warning: '#993002',
    info: '#1B1698',
  },
  border: {
    primary: '#626469',
    secondary: '#595B60',
    focus: '#149AFF',
    success: '#399A12',
    error: '#F27066',
    warning: '#FF8733',
    info: '#008EFF',
  },
  interactive: {
    primary: '#149AFF',
    primaryHover: '#31A6FF',
    primaryActive: '#4DB2FF',
    primaryDisabled: '#626469',
    secondary: '#626469',
    secondaryHover: '#6B6D73',
    secondaryActive: '#74767C',
  },
  status: {
    success: '#2EA314',
    error: '#F0594D',
    warning: '#FF8733',
    info: '#149AFF',
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
    Object.entries(green).map(([k, v]) => [`success${k}`, v])
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
