import { colors } from './tokens.stylex';
import * as stylex from '@stylexjs/stylex';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  return (
    <div>
      <p {...stylex.props(styles.p)}>Hello</p>
    </div>
  );
}

const styles = stylex.create({
  p: {
    backgroundColor: colors.primary,
    color: 'white',
  },
});

export default App;
