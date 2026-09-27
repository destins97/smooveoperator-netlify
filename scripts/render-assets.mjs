// Renders the two brand assets from HTML sources in Chromium:
//   scripts/social-card.html -> public/assets/social-card.png (1200x630 link preview)
//   scripts/profile.html     -> public/assets/smooveoperator-reseller-profile.pdf (US Letter, one page)
// Both use the self-hosted variable Archivo and Yellowtail fonts, which need a real browser to render.
// Playwright is not a site dependency; install it locally when regenerating:
//   npm i --no-save playwright && npx playwright install chromium
import {writeFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
let chromium;
try{({chromium}=await import('playwright'));}catch{console.error('Playwright is required: npm i --no-save playwright && npx playwright install chromium');process.exit(1);}
const browser=await chromium.launch();
const open=async(file,viewport)=>{const page=await browser.newPage({viewport});await page.goto(pathToFileURL(resolve(file)).href);await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(300);return page;};
const card=await open('scripts/social-card.html',{width:1200,height:630});
await card.screenshot({path:'public/assets/social-card.png'});
const profile=await open('scripts/profile.html',{width:816,height:1056});
await writeFile('public/assets/smooveoperator-reseller-profile.pdf',await profile.pdf({width:'8.5in',height:'11in',printBackground:true,pageRanges:'1'}));
await browser.close();
await writeFile('public/assets/social-card.png.json',JSON.stringify({origin:'Authored HTML and canvas typography with the self-hosted Archivo and Yellowtail fonts, rendered in Chromium. No generated or stock image.',generator:'scripts/render-assets.mjs',source:'scripts/social-card.html',width:1200,height:630},null,2));
console.log('Rendered public/assets/social-card.png and public/assets/smooveoperator-reseller-profile.pdf.');
