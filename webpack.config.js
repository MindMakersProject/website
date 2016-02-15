const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

const common = {
  entry: {
    app: PATHS.src
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.dist,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
