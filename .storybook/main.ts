import type { StorybookConfig } from '@storybook/react-webpack5';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const StylexPlugin = require('@stylexjs/webpack-plugin');

const config: StorybookConfig = {
  stories: ['../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  webpackFinal: async (config) => {
    if (config.plugins) {
      config.plugins.push(
        new StylexPlugin({
          dev: config.mode === 'development',
          appendTo: 'head',
          unstable_moduleResolution: {
            type: 'commonJS',
            rootDir: __dirname,
          },
        })
      );
    }
    return config;
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@nx/react/plugins/storybook',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    'storybook-addon-react-docgen',
    // '@storybook/addon-designs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
