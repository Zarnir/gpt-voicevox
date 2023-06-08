import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configs } from './src/configs/index';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: configs.PORT,
  }
})
