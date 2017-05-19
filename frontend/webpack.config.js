var path = require('path');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
    // loaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'babel-loader',
    //     query: {stage: 0}
    //   }
    // ]
  },
  output: {
    filename: 'index.bundle.js', 
    path: path.resolve(__dirname, 'dist')
  }
};