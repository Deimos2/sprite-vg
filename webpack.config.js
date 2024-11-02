const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/spritevg/main.ts', // Entry point to your TypeScript file
  output: {
    filename: 'bundle.js', // The output file
    path: path.resolve(__dirname, 'dist/spritevg'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve both .ts and .js files
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
      template: './public/index.html', // Template HTML file
    }),
  ],
  mode: 'development',
  devServer: {
    static: './dist/spritevg',
  },
};