import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import https from 'https'
import http from 'http'
import { URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'iframe-bypass-proxy',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url.startsWith('/api/proxy')) {
            try {
              const urlObj = new URL(req.url, 'http://localhost');
              const targetUrl = urlObj.searchParams.get('url');
              if (!targetUrl) {
                res.statusCode = 400;
                res.end('Missing url parameter');
                return;
              }

              const client = targetUrl.startsWith('https') ? https : http;
              
              client.get(targetUrl, {
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                }
              }, (targetRes) => {
                // Follow redirects
                if ([301, 302, 307, 308].includes(targetRes.statusCode) && targetRes.headers.location) {
                  res.writeHead(302, { 'Location': `/api/proxy?url=${encodeURIComponent(targetRes.headers.location)}` });
                  res.end();
                  return;
                }

                let data = [];
                targetRes.on('data', (chunk) => {
                  data.push(chunk);
                });

                targetRes.on('end', () => {
                  let buffer = Buffer.concat(data);
                  const contentType = targetRes.headers['content-type'] || '';
                  
                  if (contentType.includes('text/html')) {
                    let html = buffer.toString('utf8');
                    
                    // Lógica para obter a URL base correta (diretório pai caso seja um arquivo/subpágina)
                    let targetBase = targetUrl;
                    try {
                      const baseObj = new URL(targetUrl);
                      if (!baseObj.pathname.endsWith('/')) {
                        const lastSlashIndex = baseObj.pathname.lastIndexOf('/');
                        if (lastSlashIndex !== -1) {
                          baseObj.pathname = baseObj.pathname.substring(0, lastSlashIndex + 1);
                          baseObj.search = '';
                          baseObj.hash = '';
                          targetBase = baseObj.toString();
                        }
                      }
                    } catch (e) {
                      // fallback
                    }

                    const baseTag = `<base href="${targetBase}">`;
                    
                    if (html.includes('<head>')) {
                      html = html.replace('<head>', `<head>${baseTag}`);
                    } else if (html.includes('<head ')) {
                      html = html.replace(/<head[^>]*>/, (match) => `${match}${baseTag}`);
                    } else {
                      html = `${baseTag}${html}`;
                    }

                    // Remove common frame busting scripts
                    html = html.replace(/top\.location\s*=\s*self\.location/gi, '');
                    html = html.replace(/window\.top\s*!==\s*window\.self/gi, 'false');
                    
                    buffer = Buffer.from(html, 'utf8');
                  }

                  res.writeHead(targetRes.statusCode, {
                    'Content-Type': contentType,
                    'Access-Control-Allow-Origin': '*',
                  });
                  res.end(buffer);
                });
              }).on('error', (err) => {
                res.statusCode = 500;
                res.end(`Proxy error: ${err.message}`);
              });
            } catch (error) {
              res.statusCode = 500;
              res.end(`Proxy error: ${error.message}`);
            }
          } else {
            next();
          }
        });
      }
    }
  ],
  base: '/',
  server: {
    port: 5173,
    strictPort: true,
  }
})
