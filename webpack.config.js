import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: '../index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: {
        type: 'module', // ES 모듈로 출력
      },
     chunkFormat: 'module'
  },
  experiments: {
    outputModule: true, // ES 모듈 출력을 활성화
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-modules-commonjs']
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