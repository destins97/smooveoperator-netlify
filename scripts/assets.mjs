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
// A composed card, not a page crop: the logo, the headline and the route line, set with the site's own styles and fonts.
await s.goto(base+'/',{waitUntil:'networkidle'});
await s.evaluate(()=>{
  document.documentElement.classList.remove('js');
  document.body.innerHTML=`<div class="card flapfield"><span class="wordmark">Smoove Operator</span><h1>Wholesale, made <span class="script">smoove.</span></h1><ol class="card-route"><li class="is-ours"><i></i>Source</li><li><i></i>Prepare</li><li><i></i>Fulfill</li><li><i></i>Reach</li></ol></div>`;
  const st=document.createElement('style');st.textContent=`
    body{margin:0;background:var(--black)}
    .card{width:1200px;height:630px;padding:56px 72px;display:grid;grid-template-rows:auto 1fr auto;border-bottom:6px solid var(--gold)}
    .card .wordmark{font-size:44px;justify-self:start}
    .card h1{align-self:center;margin:0;font:700 128px/.86 var(--cond);text-transform:uppercase;color:var(--text)}
    .card h1 .script{display:block;font:400 138px/1.02 var(--script);text-transform:none;color:var(--gold);margin-top:-.12em}
    .card-route{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);position:relative;max-width:760px}
    .card-route::before{content:"";position:absolute;left:11px;right:calc(25% - 11px);top:9px;height:4px;background:var(--gold)}
    .card-route li{display:flex;flex-direction:column;gap:12px;font:700 26px/1 var(--cond);letter-spacing:.12em;text-transform:uppercase;color:var(--text);position:relative}
    .card-route i{width:22px;height:22px;border-radius:50%;background:var(--black);border:4px solid var(--gold);box-sizing:border-box}
    .card-route .is-ours i{background:var(--gold)}`;
  document.head.appendChild(st);
});
await s.evaluate(()=>document.fonts.ready);await s.waitForTimeout(400);
await s.screenshot({path:'public/assets/social-card.png'});
await b.close();
console.log('Wrote the reseller profile PDF, profile-preview.webp and social-card.png in public/assets');
