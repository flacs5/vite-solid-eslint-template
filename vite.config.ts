import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { fileURLToPath } from 'url';

export default defineConfig({
    plugins: [solid()],
    server: {
        port: 3002,
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
