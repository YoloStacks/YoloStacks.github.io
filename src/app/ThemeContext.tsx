import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'system' | 'light' | 'dark';
export type EffectiveTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  effectiveTheme: EffectiveTheme;
  setTheme: (theme: ThemeMode) => void;
  cycleTheme: () => void;
}

const STORAGE_KEY = 'yolostacks-theme';
const LEGACY_STORAGE_KEY = 'aad-theme';

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  effectiveTheme: 'dark',
  setTheme: () => {},
  cycleTheme: () => {},
});

function getSystemPreference(): EffectiveTheme {
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'system';
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const qTheme = urlParams.get('theme');
    if (qTheme === 'light' || qTheme === 'dark') return qTheme;

    const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return 'system';
  } catch {
    return 'system';
  }
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(getStoredTheme);
  const [systemPref, setSystemPref] = useState<EffectiveTheme>(getSystemPreference);

  const effectiveTheme: EffectiveTheme = theme === 'system' ? systemPref : theme;

  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPref(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      try {
        localStorage.setItem(STORAGE_KEY, 'light');
      } catch {}
    } else if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      try {
        localStorage.setItem(STORAGE_KEY, 'dark');
      } catch {}
    } else {
      root.removeAttribute('data-theme');
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(LEGACY_STORAGE_KEY);
      } catch {}
    }
  }, [theme]);

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
  };

  const cycleTheme = () => {
    setThemeState((current) => {
      if (current === 'system') {
        return systemPref === 'dark' ? 'light' : 'dark';
      }
      if (current === 'light') {
        return 'dark';
      }
      return 'system';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
