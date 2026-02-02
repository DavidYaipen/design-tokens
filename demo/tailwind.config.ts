import type { Config } from 'tailwindcss';
import { tailwindPreset } from '@smcore/corex-design/tailwind';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [tailwindPreset],
} satisfies Config;
