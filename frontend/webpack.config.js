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
    modules: ['node_modules', APP_DIR ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/app/index.html', inject: true }),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ]
}
