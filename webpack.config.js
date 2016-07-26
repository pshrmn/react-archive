var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname, 'src'),
  entry: {
    'overnews': './index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'chrome': 'chrome'
  },
  output: {
    path: path.join(__dirname, 'overnews'),
    filename: '[name].js',
  },
  module: {
    loaders: [
     {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: []
};

switch(process.env.npm_lifecycle_event) {
case 'build':
config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '\'production\''
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ])
  break;
case 'dev':
  break;
}

module.exports = config;