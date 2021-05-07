const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: 'bundle.js',
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
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      },
    ],
  },
};
