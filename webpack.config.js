module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets : ['react', 'es2015']
        }
      }
    ]
  }
}
