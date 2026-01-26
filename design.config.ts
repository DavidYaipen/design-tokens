/**
 * Design System Configuration
 * ===========================
 *
 * Este archivo es el punto central para configurar todo el design system.
 * Aquí se definen colores, iconos y otros tokens que se generarán automáticamente
 * para React, Vue, Tailwind y CSS.
 *
 * Para agregar un nuevo color:
 *   1. Agrégalo al objeto `colors.palettes` con su escala completa
 *   2. Opcionalmente, úsalo en `colors.semantic` para asignarle significado
 *   3. Ejecuta `npm run generate` para regenerar todos los outputs
 *
 * Para agregar un nuevo icono:
 *   1. Agrega el archivo SVG a la carpeta especificada en `icons.sourceDir`
 *   2. Ejecuta `npm run generate` para generar componentes React y Vue
 *
 * Uso:
 *   npm run generate         # Regenera todo
 *   npm run add:color        # Wizard para agregar color
 *   npm run add:icon         # Wizard para agregar icono
 */

import type { DesignConfig } from './src/types/config';

const config: DesignConfig = {
  /**
   * ===================
   * CONFIGURACIÓN DE COLORES
   * ===================
   */
  colors: {
    /**
     * Paletas de colores base
     * Cada paleta tiene una escala de 5-180 (18 tonos)
     * Los tonos bajos (5-30) son claros, los altos (150-180) son oscuros
     */
    palettes: {
      gray: {
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
      },
      blue: {
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
      },
      sky: {
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
      },
      purple: {
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
      },
      red: {
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
      },
      yellow: {
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
      },
      // =============================================
      // AGREGAR NUEVAS PALETAS AQUÍ
      // =============================================
      // Ejemplo:
      // green: {
      //   5: '#F0FFF4',
      //   10: '#C6F6D5',
      //   ...
      //   180: '#022C22',
      // },
    },

    /**
     * Colores semánticos
     * Mapean las paletas a significados específicos en la UI
     */
    semantic: {
      // Tema claro
      light: {
        text: {
          primary: { palette: 'gray', shade: 150 },
          secondary: { palette: 'gray', shade: 80 },
          tertiary: { palette: 'gray', shade: 60 },
          inverse: { value: '#FFFFFF' },
          link: { palette: 'blue', shade: 100 },
          success: { palette: 'sky', shade: 120 },
          error: { palette: 'red', shade: 100 },
          warning: { palette: 'yellow', shade: 120 },
          info: { palette: 'purple', shade: 100 },
        },
        background: {
          primary: { value: '#FFFFFF' },
          secondary: { palette: 'gray', shade: 5 },
          tertiary: { palette: 'gray', shade: 10 },
          inverse: { palette: 'gray', shade: 160 },
          success: { palette: 'sky', shade: 5 },
          error: { palette: 'red', shade: 5 },
          warning: { palette: 'yellow', shade: 5 },
          info: { palette: 'purple', shade: 5 },
        },
        border: {
          primary: { palette: 'gray', shade: 30 },
          secondary: { palette: 'gray', shade: 20 },
          focus: { palette: 'blue', shade: 80 },
          success: { palette: 'sky', shade: 100 },
          error: { palette: 'red', shade: 80 },
          warning: { palette: 'yellow', shade: 90 },
          info: { palette: 'purple', shade: 80 },
        },
        interactive: {
          primary: { palette: 'blue', shade: 100 },
          primaryHover: { palette: 'blue', shade: 110 },
          primaryActive: { palette: 'blue', shade: 120 },
          primaryDisabled: { palette: 'gray', shade: 30 },
          secondary: { palette: 'gray', shade: 20 },
          secondaryHover: { palette: 'gray', shade: 30 },
          secondaryActive: { palette: 'gray', shade: 40 },
        },
        status: {
          success: { palette: 'sky', shade: 100 },
          error: { palette: 'red', shade: 90 },
          warning: { palette: 'yellow', shade: 90 },
          info: { palette: 'purple', shade: 80 },
        },
      },
      // Tema oscuro
      dark: {
        text: {
          primary: { palette: 'gray', shade: 5 },
          secondary: { palette: 'gray', shade: 30 },
          tertiary: { palette: 'gray', shade: 50 },
          inverse: { palette: 'gray', shade: 160 },
          link: { palette: 'blue', shade: 50 },
          success: { palette: 'sky', shade: 60 },
          error: { palette: 'red', shade: 60 },
          warning: { palette: 'yellow', shade: 60 },
          info: { palette: 'purple', shade: 60 },
        },
        background: {
          primary: { palette: 'gray', shade: 160 },
          secondary: { palette: 'gray', shade: 140 },
          tertiary: { palette: 'gray', shade: 130 },
          inverse: { value: '#FFFFFF' },
          success: { palette: 'sky', shade: 160 },
          error: { palette: 'red', shade: 160 },
          warning: { palette: 'yellow', shade: 160 },
          info: { palette: 'purple', shade: 160 },
        },
        border: {
          primary: { palette: 'gray', shade: 120 },
          secondary: { palette: 'gray', shade: 130 },
          focus: { palette: 'blue', shade: 70 },
          success: { palette: 'sky', shade: 90 },
          error: { palette: 'red', shade: 70 },
          warning: { palette: 'yellow', shade: 80 },
          info: { palette: 'purple', shade: 70 },
        },
        interactive: {
          primary: { palette: 'blue', shade: 80 },
          primaryHover: { palette: 'blue', shade: 70 },
          primaryActive: { palette: 'blue', shade: 60 },
          primaryDisabled: { palette: 'gray', shade: 120 },
          secondary: { palette: 'gray', shade: 120 },
          secondaryHover: { palette: 'gray', shade: 110 },
          secondaryActive: { palette: 'gray', shade: 100 },
        },
        status: {
          success: { palette: 'sky', shade: 80 },
          error: { palette: 'red', shade: 80 },
          warning: { palette: 'yellow', shade: 80 },
          info: { palette: 'purple', shade: 70 },
        },
      },
    },
  },

  /**
   * ===================
   * CONFIGURACIÓN DE ICONOS
   * ===================
   */
  icons: {
    /**
     * Directorio donde se encuentran los SVGs fuente
     * Los archivos deben estar en formato kebab-case (ej: arrow-right.svg)
     */
    sourceDir: 'src/icons/svg',

    /**
     * Configuración de salida
     */
    output: {
      react: 'src/react/icons',
      vue: 'src/vue/icons',
    },

    /**
     * Tamaño por defecto de los iconos (en pixels)
     */
    defaultSize: 24,

    /**
     * Reemplazo de colores
     * Los colores especificados serán reemplazados por currentColor
     */
    colorReplacements: ['#000', '#000000', 'black', '#fff', '#ffffff', 'white'],
  },

  /**
   * ===================
   * CONFIGURACIÓN DE TIPOGRAFÍA
   * ===================
   */
  typography: {
    fontFamilies: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"Fira Code", "JetBrains Mono", Consolas, monospace',
    },
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
    },
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  /**
   * ===================
   * CONFIGURACIÓN DE ESPACIADO
   * ===================
   */
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
  },

  /**
   * ===================
   * CONFIGURACIÓN DE BORDES
   * ===================
   */
  borders: {
    radius: {
      none: '0',
      sm: '0.125rem',   // 2px
      base: '0.25rem',  // 4px
      md: '0.375rem',   // 6px
      lg: '0.5rem',     // 8px
      xl: '0.75rem',    // 12px
      '2xl': '1rem',    // 16px
      full: '9999px',
    },
    widths: {
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
    },
  },

  /**
   * ===================
   * CONFIGURACIÓN DE SOMBRAS
   * ===================
   */
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  /**
   * ===================
   * CONFIGURACIÓN DE BREAKPOINTS
   * ===================
   */
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export default config;
