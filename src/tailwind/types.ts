import type { Config } from 'tailwindcss';

export interface TailwindPresetOptions {
  /**
   * Use CSS variables for theming support.
   * When true, semantic colors reference CSS custom properties
   * When false, colors use static hex values
   * @default true
   */
  cssVariables?: boolean;

  /**
   * Whether to extend Tailwind defaults or replace them entirely.
   * When true, tokens are merged with Tailwind defaults
   * When false, tokens completely replace Tailwind defaults
   * @default false
   */
  extend?: boolean;

  /**
   * Dark mode strategy
   * @default 'class'
   */
  darkMode?: 'class' | 'media' | ['class', string];
}

export type TailwindPreset = Partial<Config> & {
  theme: NonNullable<Config['theme']>;
  darkMode?: 'class' | 'media' | ['class', string];
};

export interface TailwindColors {
  [key: string]: string | TailwindColors;
}

export type ColorShade = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 | 160 | 170 | 180;

export interface TailwindColorScale {
  5: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
  110: string;
  120: string;
  130: string;
  140: string;
  150: string;
  160: string;
  170: string;
  180: string;
}

export interface TailwindColorPalette {
  gray: TailwindColorScale;
  blue: TailwindColorScale;
  skyBlue: TailwindColorScale;
  purple: TailwindColorScale;
  red: TailwindColorScale;
  yellow: TailwindColorScale;
  green: TailwindColorScale;
  orange: TailwindColorScale;
  cyan: TailwindColorScale;
}

export interface TailwindSemanticColors {
  text: Record<string, string>;
  background: Record<string, string>;
  border: Record<string, string>;
  interactive: Record<string, string>;
  status: Record<string, string>;
}
