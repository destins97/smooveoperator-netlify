// Renders scripts/social-card.html to public/assets/social-card.png at 1200x630.
// The card uses the self-hosted variable Archivo font, which needs a real browser to render,
// so this script uses Playwright's Chromium. Playwright is not a site dependency; install it
// locally when regenerating the card: npm i --no-save playwright && npx playwright install chromium
import {writeFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
let chromium;
try{({chromium}=await import('playwright'));}catch{console.error('Playwright is required: npm i --no-save playwright && npx playwright install chromium');process.exit(1);}
const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1200,height:630}});
await page.goto(pathToFileURL(resolve('scripts/social-card.html')).href);
await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(300);
await page.screenshot({path:'public/assets/social-card.png'});
await browser.close();
await writeFile('public/assets/social-card.png.json',JSON.stringify({origin:'Authored HTML and canvas typography with the self-hosted Archivo and Yellowtail fonts, rendered in Chromium. No generated or stock image.',generator:'scripts/render-social-card.mjs',source:'scripts/social-card.html',width:1200,height:630},null,2));
console.log('Rendered public/assets/social-card.png (1200x630).');
