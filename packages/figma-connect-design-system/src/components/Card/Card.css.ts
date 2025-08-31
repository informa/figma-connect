import { style, styleVariants } from '@vanilla-extract/css';
import { colors, spacing, borderRadius, shadows } from '../../theme/tokens';

export const card = style({
  backgroundColor: colors.white,
  borderRadius: borderRadius.lg,
  border: `1px solid ${colors.gray[200]}`,
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
      backgroundColor: colors.gray[50],
    },
  },
});

export const cardPadding = styleVariants({
  none: {
    padding: 0,
  },
  
  sm: {
    padding: spacing[4],
  },
  
  md: {
    padding: spacing[6],
  },
  
  lg: {
    padding: spacing[8],
  },
});

export const cardHeader = style({
  padding: spacing[6],
  borderBottom: `1px solid ${colors.gray[200]}`,
});

export const cardContent = style({
  padding: spacing[6],
});

export const cardFooter = style({
  padding: spacing[6],
  borderTop: `1px solid ${colors.gray[200]}`,
  backgroundColor: colors.gray[50],
});
