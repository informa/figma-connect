import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { colors, spacing, typography } from './tokens';

// Define responsive properties
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-block', 'inline-flex', 'grid', 'inline-grid'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
      'space-evenly',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    gap: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    borderRadius: {
      clear: '0',
      sm: '0.25rem', // 4px
      md: '0.5rem', // 8px
    },
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

// Define non-responsive properties
const unresponsiveProperties = defineProperties({
  properties: {
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    overflow: ['visible', 'hidden', 'scroll', 'auto'],
    overflowX: ['visible', 'hidden', 'scroll', 'auto'],
    overflowY: ['visible', 'hidden', 'scroll', 'auto'],
    textAlign: ['left', 'center', 'right', 'justify'],
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    color: {
      ...colors.primary,
      ...colors.gray,
      white: colors.white,
      black: colors.black,
    },
    backgroundColor: {
      default: colors.white,
      neutral: colors.gray[200],
      info: '#3b82f6', // Blue color matching your design
      warning: '#fbbf24', // Yellow color matching your design
      danger: '#dc2626', // Red color matching the text danger color
      transparent: 'transparent',
    },
    borderColor: {
      clear: 'transparent',
      default: colors.gray[300],
      info: '#3b82f6', // Blue border
      warning: '#fbbf24', // Yellow border
      danger: '#dc2626', // Red border matching the text danger color
    },
    borderWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    borderStyle: ['solid', 'dashed', 'dotted', 'none'],
    boxShadow: {
      clear: 'none',
      weak: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      strong: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    },
    cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'not-allowed'],
    userSelect: ['none', 'auto', 'text', 'all'],
    pointerEvents: ['auto', 'none'],
    zIndex: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      auto: 'auto',
    },
    width: ['auto', 'full', 'fit-content', 'max-content', 'min-content'],
    height: ['auto', 'full', 'fit-content', 'max-content', 'min-content'],
    minWidth: spacing,
    minHeight: spacing,
    maxWidth: spacing,
    maxHeight: spacing,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, unresponsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
