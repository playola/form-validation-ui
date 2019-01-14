const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: ['url-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Styles': path.resolve(__dirname, './src/styles'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
};
