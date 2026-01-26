import type { Config } from 'tailwindcss';
import { tailwindPreset } from '@oyaipen/design-tokens/tailwind';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [tailwindPreset],
} satisfies Config;
