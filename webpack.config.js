const path = require('path');

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

  mode: 'production',
};
