var path = require('path');
var webpack = require('webpack');

var srcPath = path.join(__dirname, 'examples');

module.exports = {
  devtool: 'source-map',
  entry: {
    vanilla: path.join(srcPath, '0-vanilla', 'index.js'),
    angular: path.join(srcPath, '1-angular', 'index.js'),
    react: path.join(srcPath, '2-react', 'index.js')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?sourceMap&modules',
          'autoprefixer'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/ReactContext/),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  output: {
    path: __dirname + '/examples/bundles',
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    inline: true,
    noInfo: true,
    contentBase: path.join(__dirname, 'examples'),
    publicPath: '/'
  }
};
