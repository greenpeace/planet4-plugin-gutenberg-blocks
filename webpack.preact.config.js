const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");    // Require default Webpack config
const TerserJSPlugin = require('terser-webpack-plugin');

const entryPoints = blockName => {
  return {
    [`${blockName}Script`]: `./assets/src/blocks/${blockName}/${blockName}Script.js`,
  }
};

module.exports = {
  ...defaultConfig,
  entry: {
    // editorIndex: './assets/src/editorIndex.js',
    frontendIndex: './assets/src/frontendIndex.js',
    // carouselHeaderFrontIndex: './assets/src/carouselHeaderFrontIndex.js',
    ...entryPoints('Accordion'),
    ...entryPoints('CarouselHeader'),
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/assets/build'
  },
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            'preact',
          ],
          plugins: [
            "@babel/plugin-proposal-nullish-coalescing-operator",
            "@babel/plugin-proposal-optional-chaining",
            [
              "@wordpress/babel-plugin-import-jsx-pragma",
              {
                "scopeVariable": "h",
                "scopeVariableFrag": "Fragment",
                "source": "preact",
                "isDefault": false
              },
            ],
            [
                "@babel/plugin-transform-react-jsx", {
                    "pragma": "h",
                    "runtime": "automatic",
                    "importSource": "preact",
                    "pragmaFrag": "Fragment"
                }
            ]
          ]
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use:
          [
            {
              loader: 'file-loader',
              options: {
                publicPath: __dirname + '/public'
              }
            }
          ]
      }
    ]
  },
  optimization: {
    ...defaultConfig.optimization,
    minimizer: [
      // enable the css minification plugin
      new TerserJSPlugin({}),
    ]
  },
  resolve: {
    alias: {
      '@hooks': 'preact/hooks',
      '@render': 'preact',
      '@compat': 'preact/compat',
    }
  }
};
