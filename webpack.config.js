const path = require('path')

module.exports = {
  entry: './source/index.ts',
  stats: {
    children: true,
  },
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: {
      type: 'commonjs-module',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [],
  externals: ['three'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(vs|fs)$/,
        loader: 'raw-loader',
      },
    ],
  },
}
