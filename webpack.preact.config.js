const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");    // Require default Webpack config
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const dashDash = require('@greenpeace/dashdash');
const fs = require('fs');

const entryPoints = blockName => {
  const tpl = {
    [`${blockName}EditorScript`]: `./assets/src/blocks/${blockName}/${blockName}EditorScript.js`,
    [`${blockName}EditorStyle`]: `./assets/src/styles/blocks/${blockName}/${blockName}EditorStyle.scss`,
    [`${blockName}Script`]: `./assets/src/blocks/${blockName}/${blockName}Script.js`,
    [`${blockName}Style`]: `./assets/src/styles/blocks/${blockName}/${blockName}Style.scss`,
  };
  const pathExists = ([,path]) => fs.existsSync(path);
  return Object.fromEntries(Object.entries(tpl).filter(pathExists));
};

const mediaQueryAliases = {
  '(max-width: 576px)': 'mobile-only',
  '(min-width: 576px)': 'small-and-up',
  '(min-width: 768px)': 'medium-and-up',
  '(min-width: 992px)': 'large-and-up',
  '(min-width: 1200px)': 'x-large-and-up',
};

module.exports = {
  ...defaultConfig,
  entry: {
    editorIndex: './assets/src/editorIndex.js',
    frontendIndex: './assets/src/frontendIndex.js',
    carouselHeaderFrontIndex: './assets/src/carouselHeaderFrontIndex.js',
    ...entryPoints('Accordion'),
    ...entryPoints('Covers'),
    ...entryPoints('CarouselHeader'),
    ...entryPoints('Timeline'),
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
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                dashDash({mediaQueryAliases, mediaQueryAtStart: false}),
                require('autoprefixer'),
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
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
  plugins: [
    ...defaultConfig.plugins,
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
      filename: './[name].min.css'
    })
  ],
  optimization: {
    ...defaultConfig.optimization,
    minimizer: [
      // enable the css minification plugin
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          sourceMap: true,
          map: {
            inline: false,
            annotation: true,
          }
        }
      })
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
