import { useButton, AriaButtonProps } from 'react-aria';
import { useRef } from 'react';
import stylex from '@stylexjs/stylex';
import { tokens } from '../tokens.stylex';
import { buttonTokens } from './button-tokens.stylex';

const baseStyles = stylex.create({
  button: {
    borderRadius: buttonTokens.borderRadius,
    outline: 'none',
    position: 'relative',
    display: 'inline-block',
    paddingHorizontal: 15,
    border: 'transparent',
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
    },
    // Base button styles here
  },
  // Other base styles...
});

// Define types for color and variant
type Color =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';
type Variant =
  | 'solid'
  | 'bordered'
  | 'light'
  | 'flat'
  | 'faded'
  | 'shadow'
  | 'ghost';

type Size = 'sm' | 'md' | 'lg';
const styles = stylex.create({
  primarySolid: {
    backgroundColor: tokens.mdSysColorPrimary,
    color: '#ffffff',

    // Other styles specific to primary solid
  },
  primaryGhost: {
    backgroundColor: 'white',
    color: tokens.mdSysColorPrimary,
    borderColor: tokens.mdSysColorPrimary,
    // Other styles specific to primary ghost
  },
  sm: {
    height: 24,
  },
  md: {
    height: 32,
  },
  lg: {
    height: 40,
  },
  // ... other combinations
});

function getCombinedStyles(color: Color, variant: Variant) {
  // Type-safe way to access properties
  const styleKey = `${color}${
    variant.charAt(0).toUpperCase() + variant.slice(1)
  }` as keyof typeof styles;
  return styles[styleKey];
}

function getSizeStyles(size: Size) {
  return styles[size];
}

export type ButtonProps = AriaButtonProps & {
  color?: Color;
  size?: Size;
  variant?: Variant;
};

export function Button({
  color = 'default',
  variant = 'shadow',
  size = 'md',
  ...props
}: ButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>();
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button
      {...buttonProps}
      {...stylex.props(
        //
        baseStyles.button,
        getSizeStyles(size),
        getCombinedStyles(color, variant)
      )}
      ref={ref}
    >
      {children}
    </button>
  );
}
