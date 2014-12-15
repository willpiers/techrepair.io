module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.react.js$/,
        loader: 'jsx-loader',
      },
      {
        test: /\.js$/,
        loader: 'jsx-loader',
      },
      {
      	test: /\.less$/,
      	loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(gif|png|ttf|jpg)$/,
        loader: 'url-loader?limit=100000&mimetype=image/gif'
      }
    ]
  }
}
