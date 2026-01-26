import { ref, readonly, watch } from 'vue';
import type { Ref } from 'vue';
import { lightTheme, darkTheme, type Theme, type ThemeName } from '../../tokens/themes';

const themeName = ref<ThemeName>('light');
const theme = ref<Theme>(lightTheme);
let storageKey = 'design-tokens-theme';

export const useTheme = () => {
  const setTheme = (name: ThemeName) => {
    themeName.value = name;
    theme.value = name === 'dark' ? darkTheme : lightTheme;
  };

  const toggleTheme = () => {
    setTheme(themeName.value === 'light' ? 'dark' : 'light');
  };

  return {
    theme: readonly(theme) as Readonly<Ref<Theme>>,
    themeName: readonly(themeName) as Readonly<Ref<ThemeName>>,
    setTheme,
    toggleTheme,
  };
};

export const initializeTheme = (options: {
  defaultTheme?: ThemeName;
  storageKey?: string;
}) => {
  const { defaultTheme = 'light', storageKey: key = 'design-tokens-theme' } = options;
  storageKey = key;

  // Initialize theme from localStorage
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(storageKey) as ThemeName;
    if (stored === 'light' || stored === 'dark') {
      themeName.value = stored;
      theme.value = stored === 'dark' ? darkTheme : lightTheme;
    } else {
      themeName.value = defaultTheme;
      theme.value = defaultTheme === 'dark' ? darkTheme : lightTheme;
    }

    // Watch for theme changes
    watch(
      themeName,
      (newTheme) => {
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(storageKey, newTheme);
      },
      { immediate: true }
    );
  }
};
