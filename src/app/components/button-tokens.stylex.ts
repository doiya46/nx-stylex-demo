import stylex from '@stylexjs/stylex';
import { tokens } from '../tokens.stylex';
export const DARK = '@media (prefers-color-scheme: dark)';

export const buttonTokens = stylex.defineVars({
  borderRadius: tokens.borderRadius,
});
