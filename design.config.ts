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
      // Colores validados desde colors/*.svg
      gray: {
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
      },
      blue: {
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
      },
      skyBlue: {
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
      },
      purple: {
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
      },
      red: {
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
      },
      yellow: {
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
      },
      green: {
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
      },
      orange: {
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
      },
      cyan: {
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
      },
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
          link: { palette: 'skyBlue', shade: 100 },
          success: { palette: 'green', shade: 120 },
          error: { palette: 'red', shade: 100 },
          warning: { palette: 'orange', shade: 120 },
          info: { palette: 'skyBlue', shade: 120 },
        },
        background: {
          primary: { value: '#FFFFFF' },
          secondary: { palette: 'gray', shade: 5 },
          tertiary: { palette: 'gray', shade: 10 },
          inverse: { palette: 'gray', shade: 160 },
          success: { palette: 'green', shade: 5 },
          error: { palette: 'red', shade: 5 },
          warning: { palette: 'orange', shade: 5 },
          info: { palette: 'skyBlue', shade: 5 },
        },
        border: {
          primary: { palette: 'gray', shade: 30 },
          secondary: { palette: 'gray', shade: 20 },
          focus: { palette: 'skyBlue', shade: 100 },
          success: { palette: 'green', shade: 100 },
          error: { palette: 'red', shade: 80 },
          warning: { palette: 'orange', shade: 90 },
          info: { palette: 'skyBlue', shade: 100 },
        },
        interactive: {
          primary: { palette: 'skyBlue', shade: 100 },
          primaryHover: { palette: 'skyBlue', shade: 110 },
          primaryActive: { palette: 'skyBlue', shade: 120 },
          primaryDisabled: { palette: 'gray', shade: 30 },
          secondary: { palette: 'gray', shade: 20 },
          secondaryHover: { palette: 'gray', shade: 30 },
          secondaryActive: { palette: 'gray', shade: 40 },
        },
        status: {
          success: { palette: 'green', shade: 100 },
          error: { palette: 'red', shade: 100 },
          warning: { palette: 'orange', shade: 100 },
          info: { palette: 'skyBlue', shade: 100 },
        },
      },
      // Tema oscuro
      dark: {
        text: {
          primary: { palette: 'gray', shade: 5 },
          secondary: { palette: 'gray', shade: 30 },
          tertiary: { palette: 'gray', shade: 50 },
          inverse: { palette: 'gray', shade: 160 },
          link: { palette: 'skyBlue', shade: 60 },
          success: { palette: 'green', shade: 60 },
          error: { palette: 'red', shade: 60 },
          warning: { palette: 'orange', shade: 60 },
          info: { palette: 'skyBlue', shade: 60 },
        },
        background: {
          primary: { palette: 'gray', shade: 160 },
          secondary: { palette: 'gray', shade: 140 },
          tertiary: { palette: 'gray', shade: 130 },
          inverse: { value: '#FFFFFF' },
          success: { palette: 'green', shade: 160 },
          error: { palette: 'red', shade: 160 },
          warning: { palette: 'orange', shade: 160 },
          info: { palette: 'skyBlue', shade: 160 },
        },
        border: {
          primary: { palette: 'gray', shade: 120 },
          secondary: { palette: 'gray', shade: 130 },
          focus: { palette: 'skyBlue', shade: 80 },
          success: { palette: 'green', shade: 90 },
          error: { palette: 'red', shade: 70 },
          warning: { palette: 'orange', shade: 80 },
          info: { palette: 'skyBlue', shade: 90 },
        },
        interactive: {
          primary: { palette: 'skyBlue', shade: 80 },
          primaryHover: { palette: 'skyBlue', shade: 70 },
          primaryActive: { palette: 'skyBlue', shade: 60 },
          primaryDisabled: { palette: 'gray', shade: 120 },
          secondary: { palette: 'gray', shade: 120 },
          secondaryHover: { palette: 'gray', shade: 110 },
          secondaryActive: { palette: 'gray', shade: 100 },
        },
        status: {
          success: { palette: 'green', shade: 80 },
          error: { palette: 'red', shade: 80 },
          warning: { palette: 'orange', shade: 80 },
          info: { palette: 'skyBlue', shade: 80 },
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

  /**
   * ===================
   * CONFIGURACIÓN DE ANIMACIONES
   * ===================
   */
  animations: {
    /**
     * Duraciones de transición
     */
    durations: {
      instant: '0ms',
      fast: '100ms',
      normal: '200ms',
      slow: '300ms',
      slower: '500ms',
      slowest: '1000ms',
    },

    /**
     * Curvas de aceleración (easing)
     */
    easings: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      // Curvas personalizadas
      easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.1)',
    },

    /**
     * Keyframes para animaciones predefinidas
     */
    keyframes: {
      fadeIn: {
        from: { opacity: '0' },
        to: { opacity: '1' },
      },
      fadeOut: {
        from: { opacity: '1' },
        to: { opacity: '0' },
      },
      slideInUp: {
        from: { transform: 'translateY(10px)', opacity: '0' },
        to: { transform: 'translateY(0)', opacity: '1' },
      },
      slideInDown: {
        from: { transform: 'translateY(-10px)', opacity: '0' },
        to: { transform: 'translateY(0)', opacity: '1' },
      },
      slideInLeft: {
        from: { transform: 'translateX(-10px)', opacity: '0' },
        to: { transform: 'translateX(0)', opacity: '1' },
      },
      slideInRight: {
        from: { transform: 'translateX(10px)', opacity: '0' },
        to: { transform: 'translateX(0)', opacity: '1' },
      },
      scaleIn: {
        from: { transform: 'scale(0.95)', opacity: '0' },
        to: { transform: 'scale(1)', opacity: '1' },
      },
      scaleOut: {
        from: { transform: 'scale(1)', opacity: '1' },
        to: { transform: 'scale(0.95)', opacity: '0' },
      },
      spin: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
      ping: {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '75%, 100%': { transform: 'scale(2)', opacity: '0' },
      },
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      },
      bounce: {
        '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
        '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
      },
      shake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
        '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
      },
    },

    /**
     * Animaciones predefinidas (combinación de keyframe + duración + easing)
     */
    presets: {
      fadeIn: 'fadeIn 200ms ease-out',
      fadeOut: 'fadeOut 200ms ease-in',
      slideInUp: 'slideInUp 300ms ease-out',
      slideInDown: 'slideInDown 300ms ease-out',
      slideInLeft: 'slideInLeft 300ms ease-out',
      slideInRight: 'slideInRight 300ms ease-out',
      scaleIn: 'scaleIn 200ms ease-out',
      scaleOut: 'scaleOut 200ms ease-in',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      shake: 'shake 500ms ease-in-out',
    },
  },

  /**
   * ===================
   * CONFIGURACIÓN DE Z-INDEX
   * ===================
   */
  zIndex: {
    // Capas base
    behind: -1,
    base: 0,
    raised: 1,

    // Elementos de UI
    dropdown: 10,
    sticky: 20,
    header: 30,
    overlay: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
    toast: 80,

    // Máximos
    max: 9999,
  },
};

export default config;
