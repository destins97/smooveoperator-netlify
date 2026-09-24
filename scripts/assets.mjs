// Regenerates the reseller profile PDF and the social card from the built site.
// Dev-only: needs Playwright + Chromium (not used by the Netlify build).
// Usage: npm run build && npm run dev (in another shell) && node scripts/assets.mjs
import {createRequire} from 'node:module';
import {execSync} from 'node:child_process';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH||execSync('npm root -g').toString().trim()+'/playwright');
const base=process.env.PREVIEW_URL||'http://localhost:4173';
const b=await chromium.launch();
const p=await b.newPage();
await p.goto(base+'/profile/',{waitUntil:'networkidle'});
await p.emulateMedia({media:'print'});
await p.pdf({path:'public/assets/smooveoperator-reseller-profile.pdf',format:'Letter',printBackground:true,margin:{top:'0.5in',bottom:'0.5in',left:'0.5in',right:'0.5in'},pageRanges:'1'});
const s=await b.newPage({viewport:{width:1200,height:630}});
await s.goto(base+'/',{waitUntil:'networkidle'});
await s.addStyleTag({content:'.site-header,.seal,.btn-row{display:none!important}.hero-inner{padding-block:92px 0!important}.lede{max-width:44ch}'});
await s.waitForTimeout(600);
await s.screenshot({path:'public/assets/social-card.png'});
await b.close();
console.log('Wrote public/assets/smooveoperator-reseller-profile.pdf and public/assets/social-card.png');
