const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
