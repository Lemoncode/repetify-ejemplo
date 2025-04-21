import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      target: 'react',
      routesDirectory: 'src/scenes',
      generatedRouteTree: 'src/core/router/route-tree.ts',
      autoCodeSplitting: true,
      routeFileIgnorePattern: '.((scene|component|styles).(ts|tsx))',
    }),
    react(),
  ],
});
