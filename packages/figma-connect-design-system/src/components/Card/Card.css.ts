import { style, styleVariants } from '@vanilla-extract/css';
import { shadows } from '../../theme/tokens';

export const card = style({
  backgroundColor: 'var(--color-surface)',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--color-border-subtle)',
  overflow: 'hidden',
  transition: 'all 0.2s ease-in-out',
});

export const cardVariants = styleVariants({
  default: {
    boxShadow: shadows.sm,

    ':hover': {
      boxShadow: shadows.md,
      transform: 'translateY(-1px)',
    },
  },

  elevated: {
    boxShadow: shadows.md,

    ':hover': {
      boxShadow: shadows.lg,
      transform: 'translateY(-2px)',
    },
  },

  flat: {
    boxShadow: 'none',

    ':hover': {
      backgroundColor: 'var(--color-surface-muted)',
    },
  },
});
