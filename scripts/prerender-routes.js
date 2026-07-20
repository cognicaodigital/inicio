import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const BASE = process.cwd();
const distDir = join(BASE, 'dist');
const indexHtmlPath = join(distDir, 'index.html');

if (!existsSync(indexHtmlPath)) {
  console.error('index.html não encontrado em dist/. Execute npm run build primeiro!');
  process.exit(1);
}

const indexContent = readFileSync(indexHtmlPath, 'utf8');

// 1. Copiar index.html para 404.html (Geração de arquivos físicos de fallback para rotas do GitHub Pages)
const path404 = join(distDir, '404.html');
writeFileSync(path404, indexContent, 'utf8');
console.log('404.html criado em dist/ para fallback de rotas! 🚀');

// 2. Lista de rotas do projeto para gerar pastas físicas de fallback
const routes = [
  'sobre',
  'servicos',
  'cases',
  'cases/templates',
  'diagnostico',
  'orcamento',
  'briefing',
  'academia',
  'area-do-aluno',
  'privacidade',
  'termos'
];

routes.forEach((route) => {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'index.html'), indexContent, 'utf8');
  console.log(`Fallback físico gerado: /${route}/index.html`);
});

console.log('Geração de arquivos físicos de fallback para rotas do GitHub Pages, com renderização das páginas e metadados pelo React no navegador finalizada! 🚀');
