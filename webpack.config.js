const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

const common = {
  entry: {
    app: PATHS.src
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: PATHS.src
      },
      {
        test: /\.js?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.src
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=80000',
        include: PATHS.src
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&prefix=fonts'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Mind Makers Project',
      template: 'src/index.html',
      inject: false
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
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
