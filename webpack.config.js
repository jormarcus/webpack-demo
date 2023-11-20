const path = require('path');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // for code splitting you can use an object
  // entry: {
  //   main: './src/index.js',
  //   vendor: './src/vendor.js'
  // },
  entry: './src/index.js',

  output: {
    // for code splitting you can use [name] to dynamically name the output files
    // filename: '[name].bundle.js',
    filename: 'bundle.js',

    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // this will look for any file that ends with .css
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],

  devServer: {
    port: 9000,
  },
  mode: 'development',
};
