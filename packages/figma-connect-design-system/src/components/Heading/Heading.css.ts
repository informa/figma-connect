import { style, styleVariants } from '@vanilla-extract/css';
import { colors, typography } from '../../theme/tokens';

export const heading = style({
  fontFamily: typography.fontFamily.sans.join(', '),
  fontWeight: typography.fontWeight.semibold,
  color: colors.gray[900],
  margin: 0,
  lineHeight: typography.lineHeight.tight,
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

export const headingVariants = styleVariants({
  default: {
    color: colors.gray[900],
  },
  
  primary: {
    color: colors.primary[600],
  },
  
  secondary: {
    color: colors.gray[600],
  },
  
  muted: {
    color: colors.gray[500],
  },
});
