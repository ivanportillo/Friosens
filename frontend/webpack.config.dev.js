const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src/app');
const BUILD_DIR = path.resolve(__dirname, './dist')

module.exports = {
  entry: `${APP_DIR}/app.js`,
  resolve: {
    extensions: ['.js', '.css'],
    modules: ['node_modules', APP_DIR],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  target: 'web',
  devServer: {
    contentBase: BUILD_DIR,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: `${APP_DIR}/index.html`, inject: true }),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
