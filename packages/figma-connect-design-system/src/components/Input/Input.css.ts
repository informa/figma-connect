import { style } from '@vanilla-extract/css';
import { typography } from '../../theme/tokens';

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
  width: '100%',
});

export const inputWrapper = style({
  position: 'relative',
  width: '100%',
});

export const input = style({
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

  '::placeholder': {
    color: 'var(--color-text-placeholder)',
  },

  ':focus': {
    borderColor: 'var(--color-primary-500)',
    boxShadow: '0 0 0 3px var(--color-focus-ring-info)',
  },
});

export const inputError = style({
  borderColor: 'var(--color-destructive-600)',

  ':focus': {
    borderColor: 'var(--color-destructive-600)',
    boxShadow: '0 0 0 3px var(--color-focus-ring-danger)',
  },
});

export const label = style({
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.medium,
  color: 'var(--color-text-label)',
  marginBottom: 'var(--space-1)',
});

export const errorMessage = style({
  fontSize: typography.fontSize.sm,
  color: 'var(--color-text-danger)',
  marginTop: 'var(--space-1)',
});
