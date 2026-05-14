import { style, styleVariants } from '@vanilla-extract/css';
import { typography } from '../../theme/tokens';

export const heading = style({
  fontFamily: typography.fontFamily.sans.join(', '),
  fontWeight: typography.fontWeight.semibold,
  color: 'var(--color-text-primary)',
  margin: 0,
  lineHeight: typography.lineHeight.tight,
});

export const paragraph = style({
  fontFamily: typography.fontFamily.sans.join(', '),
  fontWeight: typography.fontWeight.normal,
  color: 'var(--color-text-primary)',
  margin: 0,
  fontSize: typography.fontSize.base,
  lineHeight: typography.lineHeight.relaxed,
});

export const textColors = styleVariants({
  default: {
    color: 'var(--color-text-primary)',
  },
  neutral: {
    color: 'var(--color-text-muted)',
  },
  danger: {
    color: 'var(--color-text-danger)',
  },
  inverse: {
    color: 'var(--color-text-inverse)',
  },
});

export const headingLevels = styleVariants({
  h1: {
    fontSize: typography.fontSize['4xl'],
    '@media': {
      '(min-width: 768px)': {
        fontSize: typography.fontSize['5xl'],
      },
    },
  },

  h2: {
    fontSize: typography.fontSize['3xl'],
    '@media': {
      '(min-width: 768px)': {
        fontSize: typography.fontSize['4xl'],
      },
    },
  },

  h3: {
    fontSize: typography.fontSize['2xl'],
    '@media': {
      '(min-width: 768px)': {
        fontSize: typography.fontSize['3xl'],
      },
    },
  },

  h4: {
    fontSize: typography.fontSize.xl,
    '@media': {
      '(min-width: 768px)': {
        fontSize: typography.fontSize['2xl'],
      },
    },
  },

  h5: {
    fontSize: typography.fontSize.lg,
    '@media': {
      '(min-width: 768px)': {
        fontSize: typography.fontSize.xl,
      },
    },
  },

  h6: {
    fontSize: typography.fontSize.base,
    '@media': {
      '(min-width: 768px)': {
        fontSize: typography.fontSize.lg,
      },
    },
  },
});
