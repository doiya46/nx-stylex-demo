import { colors } from './tokens.stylex';
import stylex from '@stylexjs/stylex';
import './app.css';
import { useState } from 'react';
import { darkTheme, lightTheme } from './theme';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      {
        ...stylex.props(isDark ? darkTheme : lightTheme)
        // ...{}
      }
    >
      <p {...stylex.props(styles.p)}>Hello</p>
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
