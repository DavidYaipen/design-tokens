import type { App, Plugin } from 'vue';
import { initializeTheme } from '../composables/useTheme';
import type { ThemeName } from '../../tokens/themes';

interface ThemePluginOptions {
  defaultTheme?: ThemeName;
  storageKey?: string;
}

export const ThemePlugin: Plugin = {
  install(app: App, options: ThemePluginOptions = {}) {
    initializeTheme(options);
  },
};
