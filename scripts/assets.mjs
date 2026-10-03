import {readFile,writeFile} from 'node:fs/promises';
import fontkit from '@pdf-lib/fontkit';
import {Resvg} from '@resvg/resvg-js';
const files={script:'public/fonts/Yellowtail-normal.woff2',body:'public/fonts/Barlow-400.woff2',display:'public/fonts/Fraunces-var.woff2',italic:'public/fonts/Fraunces-var-italic.woff2'};
const fonts=Object.fromEntries(await Promise.all(Object.entries(files).map(async([k,p])=>[k,fontkit.create(await readFile(p))])));
// Text is set as outlines so the card renders identically everywhere it is unfurled.
function outline(text,font,size,x,y,color){const run=fonts[font].layout(text),scale=size/fonts[font].unitsPerEm;let cursor=0;return `<g fill="${color}" transform="translate(${x} ${y}) scale(${scale} ${-scale})">${run.glyphs.map((g,i)=>{const p=run.positions[i],s=`<path transform="translate(${cursor+p.xOffset} ${p.yOffset})" d="${g.path.toSVG()}"/>`;cursor+=p.xAdvance;return s;}).join('')}</g>`;}
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0B0907"/><path d="M72 120H1128M72 520H1128" stroke="#3a3122"/>${outline('Smoove Operator','script',46,72,92,'#D4AF37')}${outline('CREATIONS','body',15,262,112,'#BDB096')}${outline('Making a good house','display',92,72,272,'#F3ECDF')}${outline('look great.','italic',92,72,378,'#D9B24C')}${outline('Listing videos, reels and websites for real estate professionals.','body',27,74,450,'#BDB096')}${outline('smoove-operator.com','body',24,74,575,'#F1D88E')}</svg>`;
await writeFile('public/assets/social-card.png',new Resvg(svg).render().asPng());
await writeFile('public/assets/social-card.png.json',JSON.stringify({origin:'Authored vector typography, rendered with Resvg. Yellowtail wordmark, Fraunces display and Barlow text. No generated or stock image.',generator:'scripts/assets.mjs',width:1200,height:630},null,2));
console.log('Generated 1200x630 social card.');
