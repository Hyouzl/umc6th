import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: '../index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  target: 'node',
  externalsPresets: {
    node: true,
  },
  externals: [nodeExternals()],
};