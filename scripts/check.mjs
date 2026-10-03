import {readFile,stat} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pages} from '../src/pages.mjs';
let checks=0;
const check=(condition,message)=>{assert.ok(condition,message);checks++;};
const titles=new Set();
for(const page of pages){
  const file=page.path==='/404/'?'dist/404.html':`dist${page.path}index.html`;
  const html=await readFile(file,'utf8');
  check((html.match(/<h1[ >]/g)||[]).length===1,`${page.path}: one h1`);
  check(html.includes('<main id="main">'),`${page.path}: main landmark`);
  check(html.includes('Skip to content'),`${page.path}: skip link`);
  check(html.includes('rel="canonical"'),`${page.path}: canonical`);
  check(html.includes('property="og:image"'),`${page.path}: social image`);
  check(html.includes('name="description"'),`${page.path}: description`);
  check(!titles.has(page.title),`${page.path}: unique title`);titles.add(page.title);
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  check(new Set(ids).size===ids.length,`${page.path}: unique IDs`);
  for(const [,value] of html.matchAll(/(?:href|src|srcset|data-sc-src|data-sc-src-mobile|data-src|data-src-mobile|poster)="([^"]+)"/g)){
    if(!value.startsWith('/'))continue;
    const url=new URL(value,'https://local.test');
    const target=`dist${url.pathname}${url.pathname.endsWith('/')?'index.html':''}`;
    check((await stat(target)).isFile(),`${page.path}: ${value} exists`);
    if(url.hash){const targetHtml=await readFile(target,'utf8');check(targetHtml.includes(`id="${url.hash.slice(1)}"`),`${page.path}: anchor ${url.hash} exists`);}
  }
  // Copy guardrails: no dashes in prose, no leftover supplier-site copy, no claims we cannot back.
  check(!/[–—]/.test(html),`${page.path}: no en or em dashes in copy`);
  check(!/wholesale|supplier|marketplace|FBA|lorem ipsum/i.test(html.replace(/<meta[^>]+>/g,'')),`${page.path}: no supplier-site copy left`);
  check(!/guaranteed|trusted by|award-winning|\d+\+ (agents|listings|clients)|sold faster/i.test(html),`${page.path}: no unsupported claims`);
  // The sample listing stays anonymous until the listing agent approves its use.
  check(!/magnolia|anaheim|569|shihadeh|first team/i.test(html),`${page.path}: sample listing is not identified`);
  check(!/fonts\.googleapis/.test(html),`${page.path}: fonts are self-hosted`);
}
const home=await readFile('dist/index.html','utf8');
check(home.includes('name="book-a-call"')&&home.includes('data-netlify="true"'),'Netlify detection markup');
check(home.includes('netlify-honeypot="bot-field"')&&home.includes('name="bot-field"'),'Spam honeypot');
check(home.includes('name="form-name" value="book-a-call"'),'Form name for AJAX posts');
for(const name of ['name','email','brokerage','phone','listing','message']){
  check(home.includes(`name="${name}"`),`${name} is submitted`);
  check(home.includes(`for="bk-${name}"`),`${name} has a label`);
}
check((home.match(/name="needs"/g)||[]).length===3,'Three service checkboxes');
check((home.match(/>Book a free call</g)||[]).length>=3,'One CTA label used across bar, hero and form');
check(home.includes('data-sc-act="scrub"')&&(home.match(/data-sc-act="scrub"/g)||[]).length===1,'Exactly one scrub act');
check(!/\b(scroll to|scroll down|↓)/i.test(home),'No scroll cue');
const js=await readFile('public/assets/site.js','utf8');
check(/fetch\('\/',\{method:'POST'/.test(js),'Posts to the Netlify form endpoint');
check(js.includes("'Content-Type':'application/x-www-form-urlencoded'"),'URL-encoded body, as Netlify requires');
check(js.includes('still here'),'Error keeps the visitor\'s answers');
check(js.includes('prefers-reduced-motion'),'JS respects reduced motion');
const sitemap=await readFile('dist/sitemap.xml','utf8');check(!sitemap.includes('thank-you')&&!sitemap.includes('sample-site'),'Noindex pages excluded from sitemap');
const {createHash}=await import('node:crypto');const {BOOT}=await import('../src/boot.mjs');
const toml=await readFile('netlify.toml','utf8');
check(toml.includes(`'sha256-${createHash('sha256').update(BOOT).digest('base64')}'`),'CSP allows the inline boot script by hash');
check(/media-src 'self' blob:/.test(toml),'CSP allows blob media for the scrub engine');
for(const old of ['/contact/','/suppliers/','/capabilities/','/operations/','/about/','/profile/'])check(toml.includes(`from = "${old}"`),`${old} redirects`);
const css=await readFile('public/assets/site.css','utf8');check(css.includes('prefers-reduced-motion'),'Reduced motion support');
const social=await readFile('dist/assets/social-card.png');check(social.readUInt32BE(16)===1200&&social.readUInt32BE(20)===630,'Social card dimensions');
for(const clip of ['walk.mp4','walk-m.mp4','door.mp4','door-m.mp4','reel.mp4'])check((await stat('dist/assets/media/'+clip)).size>100000,`${clip} ships`);
console.log(`PASS: ${checks} checks across ${pages.length} pages, internal links and media, metadata, form markup, copy guardrails, CSP and redirects.`);
console.log('Scroll, visual, mobile, console and deployed Netlify checks are separate release gates.');
