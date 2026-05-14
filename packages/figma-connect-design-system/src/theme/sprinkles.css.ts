import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { typography } from './tokens';

const scaleKeys = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24] as const;
const spacing = Object.fromEntries(scaleKeys.map((k) => [k, `var(--space-${k})`])) as Record<
  (typeof scaleKeys)[number],
  string
>;

const toneKeys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const primaryColors = Object.fromEntries(
  toneKeys.map((k) => [k, `var(--color-primary-${k})`])
) as Record<(typeof toneKeys)[number], string>;
const grayColors = Object.fromEntries(toneKeys.map((k) => [k, `var(--color-gray-${k})`])) as Record<
  (typeof toneKeys)[number],
  string
>;
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
      clear: 'var(--radius-none)',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
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
    /* Numeric keys match the previous spread order (gray overrides primary for 50–900). */
    color: {
      ...primaryColors,
      ...grayColors,
      white: 'var(--color-white)',
      black: 'var(--color-black)',
    },
    backgroundColor: {
      default: 'var(--color-bg-default)',
      neutral: 'var(--color-bg-neutral)',
      info: 'var(--color-bg-info)',
      warning: 'var(--color-bg-warning)',
      danger: 'var(--color-bg-danger)',
      red: 'var(--color-bg-danger)',
      transparent: 'transparent',
    },
    borderColor: {
      clear: 'transparent',
      default: 'var(--color-border-default)',
      info: 'var(--color-border-info)',
      warning: 'var(--color-border-warning)',
      danger: 'var(--color-border-danger)',
      red: 'var(--color-border-danger)',
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
      weak: 'var(--shadow-weak)',
      strong: 'var(--shadow-strong)',
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
    width: ['auto', '100%', 'fit-content', 'max-content', 'min-content'],
    height: ['auto', '100%', 'fit-content', 'max-content', 'min-content'],
    minWidth: spacing,
    minHeight: spacing,
    maxWidth: spacing,
    maxHeight: spacing,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, unresponsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
