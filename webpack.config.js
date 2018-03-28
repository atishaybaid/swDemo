const path = require("path");

module.exports = {
  entry: "./js/ClientApp.jsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  }
};
