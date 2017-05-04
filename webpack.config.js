let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const resolvePath = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
  name: 'js',
  entry: './src',
  output: {
    path: resolvePath('build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: __dirname + '/src'
      }
    ]
  }
};

  // module: {
  //   rules: [{
  //     test: /\.scss$/,
  //     use: ExtractTextPlugin.extract({
  //       fallback: 'style-loader',
  //       use: ['css-loader', 'sass-loader']
  //     })
  //   }]
  // },

  //     use: [{
  //       loader: "style-loader" // creates style nodes from JS strings
  //     }, {
  //       loader: "css-loader" // translates CSS into CommonJS
  //     }, {
  //       loader: "sass-loader", // compiles Sass to CSS
  //       options: {
  //         includePaths: [require('vital-css').includePaths]
  //       }
  //     }, {
  //       loader: ExtractTextPlugin.extract('css!sass')
  //     }]
  //   }]
  // },
  //


//     rules: [{
//       test: /\.(sass|scss)$/,
//       use: [{
//         loader: "css-loader" // translates CSS into CommonJS
//       }, {
//         loader: "sass-loader", // compiles Sass to CSS
//         options: {
//           includePaths: [require('vital-css').includePaths]
//         }
//       }]
//     }]
