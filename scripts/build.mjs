import {mkdir,rm,writeFile,cp,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {pages} from '../src/pages.mjs';
import {header,footer,escape} from '../src/components.mjs';
import {BOOT} from '../src/boot.mjs';
const rawUrl=process.env.SITE_URL||process.env.URL||'https://smoove-operator.com';
const siteUrl=new URL(rawUrl).origin;
if(!/^https?:$/.test(new URL(siteUrl).protocol))throw new Error('SITE_URL must use HTTP or HTTPS');
const preview=process.env.CONTEXT==='deploy-preview'||process.env.CONTEXT==='branch-deploy';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});await cp('public','dist',{recursive:true});
const hash=async file=>createHash('sha256').update(await readFile(file)).digest('hex').slice(0,10);
const v=Object.fromEntries(await Promise.all(['scrollcraft.css','site.css','scrollcraft.js','site.js'].map(async f=>[f,await hash('public/assets/'+f)])));
const asset=f=>`/assets/${f}?v=${v[f]}`;
for(const page of pages){
  const canonical=siteUrl+page.path;const robots=preview||page.noindex?'noindex, nofollow':'index, follow';
  // The engine only runs on the home page; every page shares its tokens and type ramp.
  const scripts=(page.home?`<script src="${asset('scrollcraft.js')}" defer></script>`:'')+`<script src="${asset('site.js')}" defer></script>`;
  const html=`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="color-scheme" content="dark"><meta name="theme-color" content="#0B0907"><title>${escape(page.title)}</title><meta name="description" content="${escape(page.description)}"><meta name="robots" content="${robots}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:site_name" content="SmooveOperator Creations"><meta property="og:locale" content="en_US"><meta property="og:title" content="${escape(page.title)}"><meta property="og:description" content="${escape(page.description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${siteUrl}/assets/social-card.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="SmooveOperator Creations. Making a good house look great."><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(page.title)}"><meta name="twitter:description" content="${escape(page.description)}"><meta name="twitter:image" content="${siteUrl}/assets/social-card.png"><link rel="preload" href="/fonts/Fraunces-var.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Barlow-400.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Yellowtail-normal.woff2" as="font" type="font/woff2" crossorigin>${page.home?'<link rel="preload" href="/assets/media/door-poster.webp" as="image" media="(min-width: 861px)"><link rel="preload" href="/assets/media/door-poster-m.webp" as="image" media="(max-width: 860px)">':''}<link rel="icon" type="image/svg+xml" href="/favicon.svg"><script>${BOOT}</script><link rel="stylesheet" href="${asset('scrollcraft.css')}"><link rel="stylesheet" href="${asset('site.css')}">${scripts}</head><body class="${page.home?'home':'page'}" itemscope itemtype="https://schema.org/Organization"><meta itemprop="name" content="SmooveOperator Creations"><link itemprop="url" href="${siteUrl}/"><span data-sc-progress></span><div class="sc-grain" aria-hidden="true"></div>${header(page.path)}<main id="main">${page.body()}</main>${page.home?'':footer()}</body></html>`;
  if(page.path==='/404/')await writeFile('dist/404.html',html);
  const dir='dist'+(page.path==='/'?'':page.path);await mkdir(dir,{recursive:true});await writeFile(dir+'/index.html',html);
}
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.filter(p=>!p.noindex).map(p=>`<url><loc>${siteUrl+p.path}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/robots.txt',preview?'User-agent: *\nDisallow: /\n':`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages for ${siteUrl}${preview?' (noindex preview)':''}.`);
