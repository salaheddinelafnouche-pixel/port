import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin, type Connect } from 'vite';
import react from '@vitejs/plugin-react';

const HOME_LINK =
  '</llms.txt>; rel="describedby", </index.md>; rel="alternate"; type="text/markdown", </.well-known/mcp/server-card.json>; rel="describedby"; type="application/json"';

const SPA_ROUTES = new Set([
  '/',
  '/projects',
  '/about',
  '/contact',
  '/terms',
  '/resume',
  '/youscent',
  '/youscent-saas',
  '/tech4u',
  '/hiking-mode',
]);

function sendNotFound(res: Connect.ServerResponse, root: string, dist = false) {
  const notFound = path.resolve(root, dist ? 'dist/404.html' : 'public/404.html');
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : 'Not Found');
}

function agentReadyPlugin(): Plugin {
  return {
    name: 'agent-ready',
    configureServer(server) {
      // Post-hook: after Vite internals, enforce allowlisted SPA + true 404
      return () => {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0] || '/';
          const accept = String(req.headers.accept || '');
          const root = server.config.root;

          if ((url === '/' || url === '/index.html') && accept.includes('text/markdown')) {
            const mdPath = path.resolve(root, 'public/index.md');
            if (fs.existsSync(mdPath)) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
              res.setHeader('Link', HOME_LINK);
              res.end(fs.readFileSync(mdPath, 'utf8'));
              return;
            }
          }

          if (url === '/' || url === '/index.html') {
            res.setHeader('Link', HOME_LINK);
          }

          // Let Vite/proxy handle modules, assets, API, and real files
          if (
            url.startsWith('/src') ||
            url.startsWith('/@') ||
            url.startsWith('/node_modules') ||
            url.startsWith('/assets') ||
            url.startsWith('/api') ||
            url.startsWith('/youscent/') ||
            url.startsWith('/youscent-saas/') ||
            url.startsWith('/tech4u/') ||
            url.startsWith('/hiking-mode/') ||
            (url.includes('.') && url !== '/index.html')
          ) {
            next();
            return;
          }

          if (SPA_ROUTES.has(url) || url === '/index.html') {
            // MPA mode: rewrite allowlisted client routes to the React shell
            if (url !== '/' && url !== '/index.html') {
              req.url = '/index.html';
            }
            next();
            return;
          }

          sendNotFound(res, root);
        });
      };
    },
    configurePreviewServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0] || '/';
          const accept = String(req.headers.accept || '');
          const root = server.config.root;

          if ((url === '/' || url === '/index.html') && accept.includes('text/markdown')) {
            const mdPath = path.resolve(root, 'dist/index.md');
            if (fs.existsSync(mdPath)) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
              res.setHeader('Link', HOME_LINK);
              res.end(fs.readFileSync(mdPath, 'utf8'));
              return;
            }
          }

          if (url === '/' || url === '/index.html') {
            res.setHeader('Link', HOME_LINK);
          }

          if (
            url.startsWith('/assets') ||
            url.startsWith('/api') ||
            url.startsWith('/youscent/') ||
            url.startsWith('/youscent-saas/') ||
            url.startsWith('/tech4u/') ||
            url.startsWith('/hiking-mode/') ||
            (url.includes('.') && url !== '/index.html')
          ) {
            next();
            return;
          }

          if (SPA_ROUTES.has(url) || url === '/index.html') {
            if (url !== '/' && url !== '/index.html') {
              req.url = '/index.html';
            }
            next();
            return;
          }

          sendNotFound(res, root, true);
        });
      };
    },
  };
}

export default defineConfig({
  plugins: [react(), agentReadyPlugin()],
  appType: 'mpa',
  build: {
    // Required for esbuild 0.28+ with Vite 6 (no destructuring downlevel).
    target: 'es2022',
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5050',
        changeOrigin: true,
      },
    },
  },
});
