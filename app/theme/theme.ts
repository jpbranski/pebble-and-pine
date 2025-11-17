'use client';

import { createTheme, Theme } from '@mui/material/styles';
import lightThemeOptions from './lightThemeOptions';
import darkThemeOptions from './darkThemeOptions';

export const lightTheme: Theme = createTheme(lightThemeOptions);
export const darkTheme: Theme = createTheme(darkThemeOptions);

export function getTheme(mode: 'light' | 'dark'): Theme {
  return mode === 'dark' ? darkTheme : lightTheme;
}
