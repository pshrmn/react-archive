module.exports = {
  context: __dirname + "/src",
  entry: "./index.js",
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  externals: {
    "chrome": "chrome",
    "react": "React",
    "react-dom": "ReactDOM"
  },
  output: {
    path: __dirname + "/overnews/",
    filename: "bundle.js",
  },
  module: {
    loaders: [
     {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
