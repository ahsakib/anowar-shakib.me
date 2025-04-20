import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/', // <-- This ensures correct asset URLs
    plugins: [
        react(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/globals.css',
                'resources/js/app.jsx'
            ],
            refresh: true,
        }),
    ],
});

