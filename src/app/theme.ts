import stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';
export const DARK = '@media (prefers-color-scheme: dark)';

export const lightTheme = stylex.createTheme(colors, {
  primary: {
    default: '#386a1e',
    [DARK]: '#9dd67c',
  },
});

export const darkTheme = stylex.createTheme(colors, {
  primary: 'purple',
});
