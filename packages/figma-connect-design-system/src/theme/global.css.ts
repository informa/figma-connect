import { globalStyle } from '@vanilla-extract/css';
import { typography } from './tokens';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontFamily: typography.fontFamily.sans.join(', '),
  fontSize: typography.fontSize.base,
  lineHeight: typography.lineHeight.normal,
});

globalStyle('body', {
  margin: 0,
  padding: 0,
  backgroundColor: '#ffffff',
  color: '#111827',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  fontWeight: typography.fontWeight.semibold,
});

globalStyle('p', {
  margin: 0,
});

globalStyle('button', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
});
