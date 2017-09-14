/*
 ./webpack.config.js
 */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html.template',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    publicPath: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js|\.jsx$/,
        exclude: /node_modules|public|static/
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            //name: '[path][name].[ext]'
          }
        },
        include: '/static/assets/svg',
      }
    ],
  },
  // add this line
  plugins: [HtmlWebpackPluginConfig],
};
