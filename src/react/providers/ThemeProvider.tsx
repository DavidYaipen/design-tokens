import React, { createContext, useContext, useEffect, useState } from 'react';
import { lightTheme, darkTheme, type Theme, type ThemeName } from '../../tokens/themes';

interface ThemeContextValue {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  storageKey = 'design-tokens-theme',
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as ThemeName;
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    }
    return defaultTheme;
  });

  const theme = themeName === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      root.setAttribute('data-theme', themeName);
      localStorage.setItem(storageKey, themeName);
    }
  }, [themeName, storageKey]);

  const setTheme = (name: ThemeName) => {
    setThemeName(name);
  };

  const toggleTheme = () => {
    setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
