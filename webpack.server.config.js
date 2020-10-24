const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");    // Require default Webpack config

const serverConfig = {
  // ...defaultConfig,
  target: 'node',
  entry: {
    CarouselHeaderMigrate: './assets/src/blocks/CarouselHeader/migrate.js',
  },
  output: {
    filename: '[name]-server.js',
    path: __dirname + '/assets/build'
  },
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
    ]
  },
  plugins: [],
  optimization: {
    minimizer: [
      // new TerserJSPlugin({}),
    ]
  }
};

module.exports = serverConfig;
