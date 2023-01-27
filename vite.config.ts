import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [reactRefresh()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },

    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },

    server: {
      port: 3000,
    },

    preview: {
      port: 3000,
    },
  });
};
