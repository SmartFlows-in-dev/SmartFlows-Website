import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/macros/s/AKfycbxueuU1pKxcNwCh4hHA6YeYsw5QJf1az-P2lb2yaSPI3BxHTNTnv-crAwG2mI1nJDM/exec')
      }
    }
  }
});