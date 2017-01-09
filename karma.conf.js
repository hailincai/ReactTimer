var webpackConfig = require('./webpack.config.js');
//the webpack config named entry will not work for karma
//we need to put everything into one big array
webpackConfig.entry = [
  "script!jquery/dist/jquery.min.js",
  "script!foundation-sites/dist/foundation.min.js",
  "./app/app.jsx"
];

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
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
