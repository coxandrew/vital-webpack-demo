## Installation

Install webpack (we'll do this globally for easy access to the `webpack` script on the commandline):

```
$ npm install webpack -g
```

Install Babel modules (these aren't necessary for including Vital; they're just included for demonstration purposes):

```
$ npm install --save-dev babel-loader babel-core babel-preset-es2015
```

Install CSS

```
$ npm install --save-dev css-loader sass-loader node-sass extract-text-webpack-plugin
```

## Run

You can build and continuously watch any changes to your files by running:

```
$ webpack --progress --watch
```

Then in a separate terminal, run the server with:

```
$ npm start
```
