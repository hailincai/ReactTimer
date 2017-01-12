var webpackConfig = require('./webpack.config.js');
var webpack = require("webpack");
//the webpack config named entry will not work for karma
//we need to put everything into one big array
webpackConfig.entry = [
  "script!jquery/dist/jquery.min.js",
  "script!foundation-sites/dist/foundation.min.js",
  "./app/app.jsx"
];

webpackConfig.plugins = [
  new webpack.ProvidePlugin({
    "$": "jquery",
    "jQuery": "jquery"
  })
];

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js',
      'app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
