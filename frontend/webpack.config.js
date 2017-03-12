const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = '/home/ivanportilloleal/Documents/Universidad/TFG/project/build';
const APP_DIR = path.resolve(__dirname, 'src/app');

// webpack.config.js
module.exports = {
  target: 'web',
  entry: APP_DIR + '/app.js',
  resolve: {
    extensions: ['.js', '.css'],
    modules: ['src', 'node_modules']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      include: APP_DIR,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.css$/,
      include: APP_DIR,
      loaders: ['style-loader', {
        loader: 'css-loader',
        query: { modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' }
      }]
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/app/index.html', inject: true })
  ]
}
