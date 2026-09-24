// Regenerates the reseller profile PDF, its on-page preview and the social card from the built site.
// Dev-only: needs Playwright + Chromium (not used by the Netlify build).
// Usage: npm run build && npm run dev (in another shell) && node scripts/assets.mjs
import {createRequire} from 'node:module';
import {execSync} from 'node:child_process';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH||execSync('npm root -g').toString().trim()+'/playwright');
const base=process.env.PREVIEW_URL||'http://localhost:4173';
const b=await chromium.launch();
const p=await b.newPage();
await p.goto(base+'/profile/',{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
await p.emulateMedia({media:'print'});
await p.pdf({path:'public/assets/smooveoperator-reseller-profile.pdf',format:'Letter',printBackground:true,margin:{top:'0.5in',bottom:'0.5in',left:'0.5in',right:'0.5in'},pageRanges:'1'});
// Preview of the real profile sheet for the home page's Paperwork section, encoded as WebP by the browser itself.
const v=await b.newPage({viewport:{width:1000,height:1400},deviceScaleFactor:1,reducedMotion:'reduce'});
await v.goto(base+'/profile/',{waitUntil:'networkidle'});await v.evaluate(()=>document.fonts.ready);
const png=(await v.locator('#profile-sheet').screenshot()).toString('base64');
const webp=await v.evaluate(async src=>{const i=new Image();i.src=src;await i.decode();const w=880,h=Math.round(i.height*w/i.width),c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(i,0,0,w,h);return {data:c.toDataURL('image/webp',.84).split(',')[1],w,h};},'data:image/png;base64,'+png);
const {writeFile}=await import('node:fs/promises');await writeFile('public/assets/profile-preview.webp',Buffer.from(webp.data,'base64'));
console.log(`profile-preview.webp ${webp.w}x${webp.h}`);
const s=await b.newPage({viewport:{width:1200,height:630}});
await s.goto(base+'/',{waitUntil:'networkidle'});
await s.addStyleTag({content:'.site-header,.seal,.btn-row{display:none!important}.hero-inner{padding-block:92px 0!important}.lede{max-width:44ch}'});
await s.waitForTimeout(600);
await s.screenshot({path:'public/assets/social-card.png'});
await b.close();
console.log('Wrote the reseller profile PDF, profile-preview.webp and social-card.png in public/assets');
