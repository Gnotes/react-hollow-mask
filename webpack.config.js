const commonConfig = require('./config/webpack.common');
const devConfig = require('./config/webpack.dev');
const prodConfig = require('./config/webpack.prod');
const merge = require('webpack-merge');
require('colors');

module.exports = mode => {
  console.log('----------configurations----------'.rainbow);
  console.log('mode:\t\t'.green, mode);
  let config = {};
  if (mode === 'production') {
    config = merge({ mode }, commonConfig, prodConfig);
  } else {
    config = merge({ mode }, commonConfig, devConfig);
  }
  console.log('path:\t\t'.green, config.output.path);
  console.log('filename:\t'.green, config.output.filename);
  console.log('----------------------------------'.rainbow);
  return config;
};
