import { style, styleVariants } from '@vanilla-extract/css';
import { colors, borderRadius, shadows } from '../../theme/tokens';

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