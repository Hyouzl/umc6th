import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: 'development',
    context: resolve(__dirname, 'src'),
    entry: {
      app: '../index.js',
    },
    output: {
      path: resolve(__dirname, 'dist'),
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