// Main exports
export { tailwindPreset, createTailwindPreset } from './preset';

// Color utilities (for advanced customization)
export {
  getTailwindColorPalette,
  getTailwindSemanticColors,
  getTailwindSemanticColorsCssVars,
  getAllTailwindColors,
  colorPalettes,
  lightSemanticColors,
  darkSemanticColors,
} from './colors';

// Types
export type {
  TailwindPresetOptions,
  TailwindPreset,
  TailwindColors,
  TailwindColorPalette,
  TailwindSemanticColors,
  TailwindColorScale,
  ColorShade,
} from './types';
