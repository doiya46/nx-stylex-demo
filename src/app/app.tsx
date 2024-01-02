import './app.css';
import { colors } from './tokens.stylex';
import stylex from '@stylexjs/stylex';
import { useState } from 'react';
import { darkTheme, lightTheme } from './theme';

export const DARK = '@media (prefers-color-scheme: dark)';

console.log(Object.keys(colors));

const keys: { [key: string]: string } = {
  primary: colors.primary.replace('var(--', '').replace(')', ''),
};

const overrideTheme = stylex.create({
  colors: (isDark, dynamicColors) => ({
    [keys.primary]: dynamicColors.primary[isDark ? DARK : 'default'],
  }),
});

export function App() {
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useState(systemDark);

  return (
    <div
      {
        ...stylex.props(
          isDark ? darkTheme : lightTheme,
          overrideTheme.colors(isDark, {
            primary: {
              default: 'blue',
              [DARK]: 'red',
            },
          })
        )
        // ...{}
      }
    >
      <p {...stylex.props(styles.p)}>
        Hello, theme is {isDark ? 'dark' : 'light'}
      </p>
      <button
        {...stylex.props(styles.primaryButton)}
        onClick={() => {
          setIsDark(true);
        }}
      >
        Dark
      </button>
      <button
        {...stylex.props(styles.primaryButton)}
        onClick={() => {
          setIsDark(false);
        }}
      >
        Light
      </button>
      <button
        {...stylex.props(styles.customButton('red'))}
        onClick={() => {
          setIsDark(false);
        }}
      >
        Custom button
      </button>
    </div>
  );
}

const styles = stylex.create({
  primaryButton: {
    backgroundColor: colors.primary,
    color: 'white',
  },
  customButton: (color) => ({
    backgroundColor: color,
    color: 'white',
  }),
  p: {
    backgroundColor: colors.primary,
    color: 'white',
  },
});

export default App;
