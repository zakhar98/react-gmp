const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');
const serverConfig = require('./webpack.config.server');

module.exports = process.env.NODE_ENV === 'development'
    ? [devConfig, serverConfig]
    : [prodConfig, serverConfig];
