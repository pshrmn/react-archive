module.exports = {
  context: __dirname + "/src",
  entry: "./app.jsx",
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  externals: {
    "react": "React"
  },
  output: {
    path: __dirname + "/public/static/js/",
    filename: "bundle.js",
  },
  module: {
    loaders: [
     {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader?stage=0"
      }
    ]
  }
};
