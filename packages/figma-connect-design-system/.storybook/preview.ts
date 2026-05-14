import type { Preview } from '@storybook/react';
import '../src/theme/tokens.css';
import '../src/theme/global.css';

export const globalTypes = {
  colorMode: {
    name: 'Color mode',
    description: 'Sets data-color-mode on the document root (default: light)',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
  spacingMode: {
    name: 'Spacing',
    description: 'Sets data-spacing-mode on the document root (default: compact)',
    defaultValue: 'compact',
    toolbar: {
      icon: 'collapse',
      items: [
        { value: 'compact', title: 'Compact' },
        { value: 'spacious', title: 'Spacious' },
      ],
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const root = document.documentElement;
      const colorMode = context.globals.colorMode as string | undefined;
      const spacingMode = context.globals.spacingMode as string | undefined;

      if (colorMode === 'dark') {
        root.setAttribute('data-color-mode', 'dark');
      } else {
        root.removeAttribute('data-color-mode');
      }

      if (spacingMode === 'spacious') {
        root.setAttribute('data-spacing-mode', 'spacious');
      } else {
        root.removeAttribute('data-spacing-mode');
      }

      return Story();
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1f2937',
        },
      ],
    },
  },
};

export default preview;
