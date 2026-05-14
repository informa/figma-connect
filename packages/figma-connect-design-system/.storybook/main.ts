import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    const { vanillaExtractPlugin } = await import('@vanilla-extract/vite-plugin');
    config.plugins?.push(vanillaExtractPlugin());
    const base = process.env.GITHUB_PAGES_BASE?.trim();
    if (base) {
      config.base = base.endsWith('/') ? base : `${base}/`;
    }
    return config;
  },
};

export default config;
