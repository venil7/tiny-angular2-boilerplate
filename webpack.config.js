module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
    ]
  }
};