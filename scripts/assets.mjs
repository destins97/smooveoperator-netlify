import {readFile,writeFile} from 'node:fs/promises';
import fontkit from '@pdf-lib/fontkit';
import {PDFDocument,rgb,StandardFonts} from 'pdf-lib';
import {Resvg} from '@resvg/resvg-js';
const files={script:'public/fonts/Yellowtail-normal.woff2',body:'public/fonts/Barlow-400.woff2',display:'public/fonts/BodoniModa-400.woff2'};
const bytes=Object.fromEntries(await Promise.all(Object.entries(files).map(async([k,p])=>[k,await readFile(p)])));
const fonts=Object.fromEntries(Object.entries(bytes).map(([k,b])=>[k,fontkit.create(b)]));
function outline(text,font,size,x,y,color){const run=fonts[font].layout(text),scale=size/fonts[font].unitsPerEm;let cursor=0;return `<g fill="${color}" transform="translate(${x} ${y}) scale(${scale} ${-scale})">${run.glyphs.map((g,i)=>{const p=run.positions[i],s=`<path transform="translate(${cursor+p.xOffset} ${p.yOffset})" d="${g.path.toSVG()}"/>`;cursor+=p.xAdvance;return s;}).join('')}</g>`;}
let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0a0a0a"/><path d="M68 115H1132M68 533H1132" stroke="#34352b"/>${outline('Smoove Operator','script',45,68,82,'#D4AF37')}${outline('Wholesale, made','body',76,68,239,'#f0eee7')}${outline('Smoove.','script',110,68,359,'#D4AF37')}${outline('Independent marketplace commerce.','body',28,71,411,'#b0afa4')}${outline('For brands, wholesalers and suppliers.','body',28,71,455,'#b0afa4')}${outline('smoove-operator.com','body',24,71,580,'#e5c974')}<path d="M1060 580h65m-17-17 17 17-17 17" stroke="#C5A028" stroke-width="2" fill="none"/></svg>`;
await writeFile('public/assets/social-card.png',new Resvg(svg).render().asPng());
const pdf=await PDFDocument.create();
const pf={body:await pdf.embedFont(StandardFonts.Helvetica),display:await pdf.embedFont(StandardFonts.TimesRoman)};
const page=pdf.addPage([612,792]);page.drawRectangle({x:0,y:0,width:612,height:792,color:rgb(.04,.04,.04)});
const gold=rgb(.83,.69,.22),text=rgb(.94,.93,.9),muted=rgb(.69,.69,.65);
const wordmarkSvg=`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="150" viewBox="0 0 300 50">${outline('Smoove Operator','script',36,0,38,'#D4AF37')}</svg>`;
const wordmark=await pdf.embedPng(new Resvg(wordmarkSvg).render().asPng());
page.drawImage(wordmark,{x:48,y:708,width:300,height:50});
page.drawText('Business profile',{x:48,y:680,size:26,font:pf.display,color:text});
let y=643;
const rows=[['BUSINESS','Independent marketplace commerce and distribution.'],['COMMERCIAL ROLE','Product sourcing, purchasing, marketplace evaluation and inventory decisions.'],['SUPPLIER RELATIONSHIPS','Seeking brands, manufacturers, wholesalers and authorized distributors.'],['PHYSICAL OPERATIONS','Independent preparation providers and marketplace fulfillment networks. No company-operated warehouse.'],['PURCHASING APPROACH','Evaluate product eligibility, documented sources, channel requirements, demand and total costs. Repeat purchasing depends on observed performance, availability and economics.'],['DOCUMENTATION','California seller’s permit on file. Appropriate resale documentation is shared directly during account applications.'],['CONTACT','smoove-operator.com/contact/']];
for(const [title,body]of rows){page.drawLine({start:{x:48,y:y+5},end:{x:564,y:y+5},color:rgb(.21,.21,.17),thickness:.5});y-=18;page.drawText(title,{x:48,y,size:10,font:pf.body,color:gold});y-=21;let line='';for(const word of body.split(' ')){const t=line?line+' '+word:word;if(pf.body.widthOfTextAtSize(t,12)>505){page.drawText(line,{x:48,y,size:12,font:pf.body,color:text});y-=17;line=word;}else line=t;}page.drawText(line,{x:48,y,size:12,font:pf.body,color:text});y-=32;}
page.drawText('September 2026. No marketplace endorsement or purchasing commitment is implied.',{x:48,y:42,size:9,font:pf.body,color:muted});
await writeFile('public/assets/smooveoperator-reseller-profile.pdf',await pdf.save());
await writeFile('public/assets/social-card.png.json',JSON.stringify({origin:'Authored vector typography, rendered with Resvg. Existing Yellowtail and Barlow plus Google Fonts Bodoni Moda. No generated or stock image.',generator:'scripts/assets.mjs',width:1200,height:630},null,2));
console.log('Generated 1200x630 social card and one-page current business profile.');
