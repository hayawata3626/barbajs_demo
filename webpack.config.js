const glob = require('glob'),
      path = require('path');

//jsファイルの名前を管理する配列
const entries = {}

glob.sync("./src/js/**.js").map(function(file) {
  entries[file.replace(/.\/src\//, ".\/dist\/")] = file;
})

//fileにはsrc/jsフォルダにあるものの一つのキーをとってkている

module.exports = {
  entry: entries,
  output: {
    path: __dirname,
    filename: '[name]',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      { // ↓追加
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.tag', '.json']
  }
};
