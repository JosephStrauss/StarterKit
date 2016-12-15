import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  // setting to false will show commands lines in console
  noInfo: false,
  // entry point of application
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  // where to create the bundle
  // webpack won't actually create any files --
  // it will create a build in memory and serve it to the
  // web server
  output: {
    path: path.resolve(__dirname, 'src'),
    publickPath: '/',
    filename: bundle.js
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  // examples of plugins are: hot-loading, linting, budling styles, etc...
  plugins: [],
  // we need to tell webpack the file types that we want it to handle.
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
};
