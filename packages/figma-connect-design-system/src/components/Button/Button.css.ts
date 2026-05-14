import { style, styleVariants } from '@vanilla-extract/css';
import { shadows, typography } from '../../theme/tokens';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: typography.fontFamily.sans.join(', '),
  fontWeight: typography.fontWeight.medium,
  borderRadius: 'var(--radius-md)',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  outline: 'none',
  userSelect: 'none',

  ':focus': {
    outline: '2px solid var(--color-focus-outline-primary)',
    outlineOffset: '2px',
  },

  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: 'var(--color-primary-600)',
    color: 'var(--color-white)',
    boxShadow: shadows.sm,

    ':hover': {
      backgroundColor: 'var(--color-primary-700)',
      boxShadow: shadows.md,
    },

    ':active': {
      backgroundColor: 'var(--color-primary-800)',
      transform: 'translateY(1px)',
    },
  },

  secondary: {
    backgroundColor: 'var(--color-gray-100)',
    color: 'var(--color-gray-800)',
    border: '1px solid var(--color-gray-200)',
    boxShadow: shadows.sm,

    ':hover': {
      backgroundColor: 'var(--color-gray-200)',
      borderColor: 'var(--color-gray-300)',
      boxShadow: shadows.md,
    },

    ':active': {
      backgroundColor: 'var(--color-gray-300)',
      transform: 'translateY(1px)',
    },

    ':focus': {
      outline: '2px solid var(--color-focus-outline-neutral)',
      outlineOffset: '2px',
    },
  },

  destructive: {
    backgroundColor: 'var(--color-destructive-600)',
    color: 'var(--color-white)',
    boxShadow: shadows.sm,

    ':hover': {
      backgroundColor: 'var(--color-destructive-700)',
      boxShadow: shadows.md,
    },

    ':active': {
      backgroundColor: 'var(--color-destructive-800)',
      transform: 'translateY(1px)',
    },

    ':focus': {
      outline: '2px solid var(--color-focus-outline-destructive)',
      outlineOffset: '2px',
    },
  },
});

export const buttonSizes = styleVariants({
  small: {
    fontSize: typography.fontSize.sm,
    padding: `var(--space-2) var(--space-3)`,
    height: '2rem',
  },

  large: {
    fontSize: typography.fontSize.lg,
    padding: `var(--space-4) var(--space-6)`,
    height: '3rem',
  },
});
