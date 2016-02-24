var webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  entry: {
    "overnews": "./index.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  externals: {
    "chrome": "chrome"
  },
  output: {
    path: __dirname + "/overnews/",
    filename: "[name].js",
  },
  module: {
    loaders: [
     {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "\"production\""
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ]
};
