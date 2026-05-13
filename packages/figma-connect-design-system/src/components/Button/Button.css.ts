import { style, styleVariants } from '@vanilla-extract/css';
import { colors, spacing, borderRadius, typography, shadows } from '../../theme/tokens';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: typography.fontFamily.sans.join(', '),
  fontWeight: typography.fontWeight.medium,
  borderRadius: borderRadius.md,
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  outline: 'none',
  userSelect: 'none',
  
  ':focus': {
    outline: `2px solid ${colors.primary[500]}`,
    outlineOffset: '2px',
  },
  
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: colors.primary[600],
    color: colors.white,
    boxShadow: shadows.sm,
    
    ':hover': {
      backgroundColor: colors.primary[700],
      boxShadow: shadows.md,
    },
    
    ':active': {
      backgroundColor: colors.primary[800],
      transform: 'translateY(1px)',
    },
  },
  
  secondary: {
    backgroundColor: colors.gray[100],
    color: colors.gray[800],
    border: `1px solid ${colors.gray[200]}`,
    boxShadow: shadows.sm,

    ':hover': {
      backgroundColor: colors.gray[200],
      borderColor: colors.gray[300],
      boxShadow: shadows.md,
    },

    ':active': {
      backgroundColor: colors.gray[300],
      transform: 'translateY(1px)',
    },

    ':focus': {
      outline: `2px solid ${colors.gray[400]}`,
      outlineOffset: '2px',
    },
  },

  destructive: {
    backgroundColor: colors.destructive[600],
    color: colors.white,
    boxShadow: shadows.sm,

    ':hover': {
      backgroundColor: colors.destructive[700],
      boxShadow: shadows.md,
    },

    ':active': {
      backgroundColor: colors.destructive[800],
      transform: 'translateY(1px)',
    },

    ':focus': {
      outline: `2px solid ${colors.destructive[500]}`,
      outlineOffset: '2px',
    },
  },
});

export const buttonSizes = styleVariants({
  small: {
    fontSize: typography.fontSize.sm,
    padding: `${spacing[2]} ${spacing[3]}`,
    height: '2rem',
  },
  
  large: {
    fontSize: typography.fontSize.lg,
    padding: `${spacing[4]} ${spacing[6]}`,
    height: '3rem',
  },
});
