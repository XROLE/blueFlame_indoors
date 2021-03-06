const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundlefile.js'
  },
  module: {
    rules: [
      {
       test: /\.js$/,
       exclude: /node_modules/,
       use: { loader: 'babel-loader' }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ],
  },
  devServer: {

    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
