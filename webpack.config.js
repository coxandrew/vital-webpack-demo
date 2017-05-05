let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const resolvePath = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
  entry: './src',
  output: {
    path: resolvePath('build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: resolvePath('src')
      },
      {
        test: /\.sass/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',

          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [require('vital-css').includePaths]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
