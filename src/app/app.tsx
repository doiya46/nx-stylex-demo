import './app.css';
import stylex from '@stylexjs/stylex';
import { useState } from 'react';
import { darkTheme, lightTheme, overrideButton } from './theme';
import { tokens } from './tokens.stylex';
import { Button } from './components';

export const DARK = '@media (prefers-color-scheme: dark)';

const keys: { [key: string]: string } = {
  primary: tokens.mdSysColorPrimary.replace('var(--', '').replace(')', ''),
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
          overrideButton
          // overrideTheme.colors(isDark, {
          //   primary: {
          //     default: 'blue',
          //     [DARK]: 'red',
          //   },
          // })
        )
        // ...{}
      }
    >
      <p>Hello, theme is {isDark ? 'dark' : 'light'}</p>
      <Button
        color="primary"
        variant="solid"
        onPress={() => {
          setIsDark(true);
        }}
      >
        Dark
      </Button>
      <Button
        variant="ghost"
        color="primary"
        onPress={() => {
          setIsDark(false);
        }}
      >
        Light
      </Button>
      <Button
        onPress={() => {
          setIsDark(false);
        }}
      >
        Custom button
      </Button>
      <Button isDisabled>Disabled</Button>
    </div>
  );
}

export default App;
