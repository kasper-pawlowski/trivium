import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: [
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
            { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
            { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
            { find: '@contexts', replacement: path.resolve(__dirname, 'src/contexts') },
            { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
            { find: '@helpers', replacement: path.resolve(__dirname, 'src/helpers') },
        ],
    },
});
