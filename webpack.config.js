const path = require('path');

module.exports = {
  entry: {
    main: './app/index.js',
    admin: './app/admin.js'
  }, 
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-native-modules']
        }
      }
    ],
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: './index.html' },
        { from: /\/admin/, to: './admin.html' },
        { from: /./, to: './404.html' }
      ]
    }
  }
};
