import {readFile,stat} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {runInNewContext} from 'node:vm';
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
  check(!/lorem ipsum|50\+|millions in sales|zero downtime|ATM & Vending/i.test(html),`${page.path}: no obsolete or fabricated copy`);
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  check(new Set(ids).size===ids.length,`${page.path}: unique IDs`);
  for(const [,value] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    if(!value.startsWith('/'))continue;
    const url=new URL(value,'https://local.test');
    const target=`dist${url.pathname}${url.pathname.endsWith('/')?'index.html':''}`;
    check((await stat(target)).isFile(),`${page.path}: ${value} exists`);
    if(url.hash){const targetHtml=await readFile(target,'utf8');check(targetHtml.includes(`id="${url.hash.slice(1)}"`),`${page.path}: anchor ${url.hash} exists`);}
  }
}
const contact=await readFile('dist/contact/index.html','utf8');
check(contact.includes('name="supplier-fit-check"')&&contact.includes('data-netlify="true"'),'Netlify detection markup');
check(contact.includes('netlify-honeypot="bot-field"')&&contact.includes('name="bot-field"'),'Spam honeypot');
check(contact.includes('name="form-name" value="supplier-fit-check"'),'Form name for AJAX posts');
for(const name of ['name','company','email','phone','brands','message']){
  check(contact.includes(`name="${name}"`),`${name} is submitted`);
  check(contact.includes(`for="fc-${name}"`),`${name} has a label`);
}
for(const name of ['role','channels','map_policy','opening_minimum','source','subject'])check(contact.includes(`name="${name}"`),`${name} is submitted`);
const js=await readFile('public/assets/site.js','utf8');
check(/fetch\('\/',\{method:'POST'/.test(js),'Posts to the Netlify form endpoint');
check(js.includes("'Content-Type':'application/x-www-form-urlencoded'"),'URL-encoded body, as Netlify requires');
check(js.includes('still here'),'Error keeps the visitor\'s answers');
check(js.includes('prefers-reduced-motion'),'JS respects reduced motion');
for(const page of pages){
  const file=page.path==='/404/'?'dist/404.html':`dist${page.path}index.html`;
  const html=await readFile(file,'utf8');
  check(!/[\u2013\u2014]/.test(html),`${page.path}: no en or em dashes in copy`);
  check(!/amazon|\bFBA\b/i.test(html),`${page.path}: no marketplace trademarks`);
  check(!/fonts\.googleapis/.test(html),`${page.path}: fonts are self-hosted`);
}
check((await stat('dist/assets/smooveoperator-reseller-profile.pdf')).size>10000,'Reseller profile PDF ships');
const sitemap=await readFile('dist/sitemap.xml','utf8');check(!sitemap.includes('thank-you'),'Success page excluded from sitemap');
const {createHash}=await import('node:crypto');const {BOOT}=await import('../src/boot.mjs');
const toml=await readFile('netlify.toml','utf8');check(toml.includes(`'sha256-${createHash('sha256').update(BOOT).digest('base64')}'`),'CSP allows the inline boot script by hash');
const css=await readFile('public/assets/site.css','utf8');check(css.includes('prefers-reduced-motion'),'Reduced motion support');
const social=await readFile('dist/assets/social-card.png');check(social.readUInt32BE(16)===1200&&social.readUInt32BE(20)===630,'Social card dimensions');
console.log(`PASS: ${checks} checks across ${pages.length} pages, internal links, metadata, Fit Check markup and payload rules, copy guardrails, and shipped assets.`);
console.log('Browser visual, mobile interaction, console, and deployed Netlify delivery checks are separate release gates.');
