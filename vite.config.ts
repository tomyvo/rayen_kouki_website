import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { site } from './src/data/site.ts';

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);

export default defineConfig({
  plugins: [react(), {
    name: 'central-site-metadata',
    transformIndexHtml(html) {
      let result = html.replace(/<title>.*?<\/title>/, () => `<title>${escapeHtml(site.seo.title)}</title>`);
      const metadata = [
        ['name', 'description', site.seo.description],
        ['property', 'og:title', site.seo.title],
        ['property', 'og:description', site.seo.description],
        ['property', 'og:locale', site.seo.locale],
        ['property', 'og:image', site.seo.image],
        ['property', 'og:image:alt', site.seo.imageAlt],
        ['name', 'twitter:title', site.seo.title],
        ['name', 'twitter:description', site.seo.description],
      ];
      for (const [attribute, name, content] of metadata) {
        const tag = `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`;
        const pattern = new RegExp(`<meta ${attribute}="${name}" content="[^"]*"\\s*/>`);
        result = pattern.test(result) ? result.replace(pattern, () => tag) : result.replace('</head>', `${tag}\n  </head>`);
      }
      return result.replace(/<html lang="[^"]*">/, `<html lang="${site.seo.language}">`);
    },
  }],
});
