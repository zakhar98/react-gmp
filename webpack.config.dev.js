const {merge} = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  name: 'client',
  target: 'web',
  mode: "development",
  devtool: 'source-map',
	devServer: {
		contentBase: './dist',
	},
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
