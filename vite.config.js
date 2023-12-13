import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
    // Set the output directory for the build artifacts
        outDir: 'dist',
    },
});