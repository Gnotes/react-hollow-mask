const path = require('path');
const WebpackProgressBar = require('webpack-progress-bar');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../lib')
  },
  externals: {
    classnames: 'classnames',
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  plugins: [new WebpackProgressBar()]
};
