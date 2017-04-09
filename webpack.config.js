const path = require('path');

module.exports = {
  entry: {
    main: './app/index.js',
    admin: './app/admin.js'
  }, 
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["env", {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7"]
                }
              }]
            ]
          }
        }
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
