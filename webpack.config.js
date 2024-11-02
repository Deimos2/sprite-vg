const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Import the plugin

console.log('Resolving copy-webpack-plugin...');
console.log(require.resolve('copy-webpack-plugin'));

module.exports = {
  entry: './src/spritevg/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/spritevg'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/style.css', to: 'style.css' }, // Copy `style.css` to `dist/spritevg`
      ],
    }),
  ],
  mode: 'development',
  devServer: {
    static: './dist/spritevg',
  },
};