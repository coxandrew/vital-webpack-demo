let path = require('path');

module.exports = [{
  name: 'js',
  entry: './app/index.js',
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'dist')
  }
}, {
  name: 'css',
  entry: {
    styles: [
      path.resolve(__dirname, 'app/style.scss')
    ]
  },
  output: {
    filename: 'application.css',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(sass|scss)$/,
      use: [{
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader", // compiles Sass to CSS
        options: {
          includePaths: [require('vital-css').includePaths]
        }
      }]
    }]
  }
}];

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
