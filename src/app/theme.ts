import stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const lightTheme = stylex.createTheme(colors, {
  primary: 'green',
});

export const darkTheme = stylex.createTheme(colors, {
  primary: 'purple',
});
