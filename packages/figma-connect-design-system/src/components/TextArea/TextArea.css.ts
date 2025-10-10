import { style } from '@vanilla-extract/css';
import { colors, typography } from '../../theme/tokens';

export const textareaContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem', // 8px
  width: '100%',
});

export const textareaWrapper = style({
  position: 'relative',
  width: '100%',
});

export const textarea = style({
  width: '100%',
  padding: '0.75rem', // 12px
  fontSize: typography.fontSize.base,
  lineHeight: typography.lineHeight.normal,
  color: colors.gray[900],
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray[300]}`,
  borderRadius: '0.5rem', // 8px to match Box md border radius
  outline: 'none',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  resize: 'vertical',
  minHeight: '80px',
  
  '::placeholder': {
    color: colors.gray[500],
  },
  
  ':focus': {
    borderColor: '#3b82f6', // info color to match Box
    boxShadow: '0 0 0 3px rgb(59 130 246 / 0.1)',
  },
});

export const textareaError = style({
  borderColor: '#dc2626', // danger color to match Box and Text
  
  ':focus': {
    borderColor: '#dc2626',
    boxShadow: '0 0 0 3px rgb(220 38 38 / 0.1)',
  },
});