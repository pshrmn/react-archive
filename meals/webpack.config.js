const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: './index.js',
    vendor: ['react', 'react-dom', 'mobx', 'mobx-react']
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '/static/js/bundle.js',
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/static/js/vendor.js',
      minChunks: Infinity
    })
  ]
};

switch(process.env.npm_lifecycle_event) {
  case 'webpack:dev':
    break;
  case 'webpack:build':
    config.plugins = config.plugins.concat([
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        compress: {
          warnings: false
        }
      })
    ]);
    break;
}

module.exports = config;
