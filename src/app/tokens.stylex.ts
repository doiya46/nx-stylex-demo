import stylex from '@stylexjs/stylex';
import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities';
export const DARK = '@media (prefers-color-scheme: dark)';

const theme = themeFromSourceColor(argbFromHex('#386a1e'), [
  {
    name: 'custom-1',
    value: argbFromHex('#ff0000'),
    blend: true,
  },
]);

export const mColors = {
  primary: {
    default: hexFromArgb(theme.schemes.light.primary),
    [DARK]: hexFromArgb(theme.schemes.dark.primary),
  },
};

export const colors = stylex.defineVars({
  primary: {
    default: '#0053db',
    [DARK]: '#b4c5ff',
  },
  red600: '#dc2626',
  purple600: '#9333ea',
});
