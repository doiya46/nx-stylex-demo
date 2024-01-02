import stylex from '@stylexjs/stylex';
import { tokens } from './tokens.stylex';
import { buttonTokens } from './components/button-tokens.stylex';
export const DARK = '@media (prefers-color-scheme: dark)';

export const lightTheme = stylex.createTheme(tokens, {
  mdSysColorPrimary: '#386a1e',
});

export const darkTheme = stylex.createTheme(tokens, {
  mdSysColorPrimary: '#13c2c2',
});

// Override
export const overrideButton = stylex.createTheme(buttonTokens, {
  borderRadius: '4px',
});
