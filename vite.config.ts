/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { fileURLToPath } from 'url';

export default defineConfig({
    plugins: [solid()],
    server: {
        port: 3000,
    },
    css: {
        devSourcemap: true,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
