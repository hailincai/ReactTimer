var webpack = require("webpack");

module.exports = {
  entry: {
    "app": "./app/app.jsx",
    "vendor": ["react", "react-dom", "react-router", "script!jquery/dist/jquery.min.js", "script!foundation-sites/dist/foundation.min.js"]
  },

  externals: {
    "jquery": "jQuery" //jquery will be availabel as var jQuery, because foundation require this name
  },

  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./public/vendor.js")
  ],

  output: {
    path: __dirname,
    filename: "./public/[name].js"
  },

  resolve: {
    root: __dirname,
    alias: {
      Main: "app/components/Main.jsx",
      Navigation: "app/components/Navigation.jsx",
      Timer: "app/components/Timer.jsx",
      CountDown: "app/components/CountDown.jsx",
      Clock: "app/components/Clock.jsx",
      CountdownForm: "app/components/CountdownForm.jsx",
      Controls: "app/components/Controls.jsx",
      applicationStyles: "app/styles/app.scss"
    },
    extensions: ["", ".js", ".jsx"]
  },

  module: {
    loaders:[
      {
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-0"]
        },
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },

  devtool: "inline-source-map" //only for develope purpose because it makes the bundle.js is very bigger
};
