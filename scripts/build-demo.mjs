import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildRoot = path.join(projectRoot, 'dist');
const mimeTypes = { '.png': 'image/png', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.woff': 'font/woff', '.woff2': 'font/woff2' };
const embeddedAssets = new Map();
const javascriptAssets = {};

async function embedAsset(publicPath) {
  if (embeddedAssets.has(publicPath)) return embeddedAssets.get(publicPath);
  const absolutePath = path.resolve(buildRoot, `.${publicPath}`);
  if (!absolutePath.startsWith(`${buildRoot}${path.sep}`)) throw new Error(`Invalid demo asset path: ${publicPath}`);
  const mime = mimeTypes[path.extname(absolutePath)];
  if (!mime) throw new Error(`Unsupported demo asset: ${publicPath}`);
  const encoded = `data:${mime};base64,${(await readFile(absolutePath)).toString('base64')}`;
  embeddedAssets.set(publicPath, encoded);
  return encoded;
}

let html = await readFile(path.join(buildRoot, 'index.html'), 'utf8');
const script = html.match(/<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/);
const stylesheet = html.match(/<link\b[^>]*\brel="stylesheet"[^>]*\bhref="([^"]+)"[^>]*>/);
if (!script || !stylesheet) throw new Error('Build the website before exporting the standalone demo.');

let javascript = await readFile(path.join(buildRoot, script[1]), 'utf8');
let css = await readFile(path.join(buildRoot, stylesheet[1]), 'utf8');

for (const match of [...css.matchAll(/url\((['"]?)(\/[^)'"\s]+)\1\)/g)]) {
  css = css.replaceAll(match[0], `url("${await embedAsset(match[2])}")`);
}

for (const entry of await readdir(path.join(projectRoot, 'public'), { recursive: true, withFileTypes: true })) {
  if (!entry.isFile()) continue;
  const publicPath = `/${path.relative(path.join(projectRoot, 'public'), path.join(entry.parentPath, entry.name)).split(path.sep).join('/')}`;
  if (!javascript.includes(publicPath) && !html.includes(publicPath)) continue;
  const encoded = await embedAsset(publicPath);
  if (javascript.includes(publicPath)) {
    javascriptAssets[publicPath] = encoded;
    const escapedPath = publicPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    javascript = javascript.replace(new RegExp('(["\'`])' + escapedPath + '\\1', 'g'), () => `__rayenDemoAssets[${JSON.stringify(publicPath)}]`);
  }
  html = html.replaceAll(publicPath, encoded);
}

const imageVariables = new Map(Object.keys(javascriptAssets).map((asset, index) => [asset, `--demo-image-${index}`]));
const imageCss = [...imageVariables].map(([asset, variable]) => `${variable}:url("${javascriptAssets[asset]}");`).join('');
css += `\n:root{${imageCss}}`;

// Static markup lets constrained file previews show the site before scripts run.
// The normal React entry replaces this initial markup and owns all interactions.
const rendererDirectory = path.join(projectRoot, 'node_modules', '.cache', 'rayen-demo-render');
process.env.NODE_ENV = 'production';
await build({ root: projectRoot, logLevel: 'error', build: {
  ssr: path.join(projectRoot, 'src', 'App.tsx'),
  outDir: rendererDirectory,
  emptyOutDir: true,
  rolldownOptions: { output: { entryFileNames: 'render.mjs' } },
} });
const { default: App } = await import(pathToFileURL(path.join(rendererDirectory, 'render.mjs')).href);
const { createElement } = await import('react');
const { renderToStaticMarkup } = await import('react-dom/server');
let markup = renderToStaticMarkup(createElement(App));
markup = markup.replace(/<link\b[^>]*\brel="preload"[^>]*>/g, '')
  .replace(/opacity:0(?=;|")/g, 'opacity:1')
  .replace(/transform:translateY\([^)]+\)/g, 'transform:none');
markup = markup.replace(/<img\b[^>]*>/g, tag => {
  const source = tag.match(/\bsrc="([^"]+)"/);
  const variable = source && imageVariables.get(source[1]);
  if (!variable) throw new Error('A preview image is missing from the embedded assets.');
  const position = tag.match(/object-position:([^;"]+)/)?.[1] || '50% 50%';
  const background = `background-image:var(${variable});background-size:cover;background-position:${position};`;
  const style = tag.match(/\bstyle="([^"]*)"/);
  tag = tag.replace(source[0], 'src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221%22 height=%221%22/%3E"');
  return style ? tag.replace(style[0], () => `style="${style[1]};${background}"`) : tag.replace('<img ', `<img style="${background}" `);
});
html = html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);

// The Vite application entry is one complete bundle with no runtime imports.
// A classic inline script also works when this HTML is opened directly as a file.
if (/\bimport\s*\(/.test(javascript) || javascript.includes('import.meta')) {
  throw new Error('The demo exporter needs a build without additional runtime chunks.');
}
html = html.replace(stylesheet[0], () => `<style>${css.replace(/<\/style/gi, '<\\/style')}</style>`);
html = html.replace(script[0], '');
const imageReferences = JSON.stringify([...imageVariables]);
const inlineScript = `const __rayenDemoAssets = Object.fromEntries(${imageReferences}.map(([asset, variable]) => [asset, getComputedStyle(document.documentElement).getPropertyValue(variable).trim().slice(5, -2)]));\n${javascript}`;
html = html.replace('</body>', () => `<script>${inlineScript.replace(/<\/script/gi, '<\\/script')}</script>\n</body>`);
html = html.replace(/<link\b[^>]*\brel="modulepreload"[^>]*>/g, '');

const destination = path.join(projectRoot, 'demo.html');
html = html.replace(/^[ \t]+$/gm, '');
await writeFile(destination, html);
console.log(`Standalone demo: ${destination} (${Math.round(Buffer.byteLength(html) / 1024)} KiB)`);
