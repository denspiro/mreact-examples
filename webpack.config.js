const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'static', 'index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    port: 3000,
  },
};
