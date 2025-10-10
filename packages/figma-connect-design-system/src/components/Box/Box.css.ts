import { style } from '@vanilla-extract/css';
import { typography } from '../../theme/tokens';

export const box = style({
  fontFamily: typography.fontFamily.sans.join(', '),
});