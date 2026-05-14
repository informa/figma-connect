import { style } from '@vanilla-extract/css';
import { typography } from '../../theme/tokens';

export const textareaContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
  width: '100%',
});

export const textareaWrapper = style({
  position: 'relative',
  width: '100%',
});

export const textarea = style({
  width: '100%',
  padding: 'var(--space-3)',
  fontSize: typography.fontSize.base,
  lineHeight: typography.lineHeight.normal,
  color: 'var(--color-text-primary)',
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border-default)',
  borderRadius: 'var(--radius-lg)',
  outline: 'none',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  resize: 'vertical',
  minHeight: '80px',

  '::placeholder': {
    color: 'var(--color-text-placeholder)',
  },

  ':focus': {
    borderColor: 'var(--color-primary-500)',
    boxShadow: '0 0 0 3px var(--color-focus-ring-info)',
  },
});

export const textareaError = style({
  borderColor: 'var(--color-destructive-600)',

  ':focus': {
    borderColor: 'var(--color-destructive-600)',
    boxShadow: '0 0 0 3px var(--color-focus-ring-danger)',
  },
});
