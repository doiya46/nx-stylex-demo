const StylexPlugin = require('@stylexjs/webpack-plugin');
const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact({
    // Uncomment this line if you don't want to use SVGR
    // See: https://react-svgr.com/
    // svgr: false
  }),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    config.plugins.push(
      new StylexPlugin({
        filename: 'styles.[contenthash].css',
        // get webpack mode and set value for dev
        dev: process.env.NODE_ENV === 'development',
        // Use statically generated CSS files and not runtime injected CSS.
        // Even in development.
        runtimeInjection: true,
        // runtimeInjection: process.env.NODE_ENV !== 'development',
        // optional. default: 'x'
        classNamePrefix: 'x',
        useCSSLayers: true,
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: 'commonJS',
          // The absolute path to the root directory of your project
          rootDir: __dirname,
        },
      })
    );

    return config;
  }
);
