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
check(contact.includes('data-netlify="true"'),'Netlify detection markup');
check(contact.includes('netlify-honeypot="bot-field"'),'Spam honeypot');
for(const name of ['name','company','email','phone','inquiry','message']){
  check(contact.includes(`name="${name}"`),`${name} has submitted name`);
  check(contact.includes(`for="${name}"`),`${name} has label`);
}
const js=await readFile('public/assets/site.js','utf8');
async function testForm(outcome){
  let handler,reset=false,focused=false,posted,cleared=false;
  const button={disabled:false,textContent:'',innerHTML:''};const status={dataset:{},textContent:'',focus(){focused=true;}};
  const form={elements:{inquiry:{value:''}},querySelector:()=>button,addEventListener:(event,fn)=>{handler=fn;},reportValidity:()=>true,reset(){reset=true;}};
  runInNewContext(js,{
    document:{querySelector:s=>s==='#contact-form'?form:s==='#form-status'?status:null},window:{},
    location:{search:'?type=supplier'},URLSearchParams,FormData:class{*[Symbol.iterator](){yield ['form-name','business-inquiry'];yield ['message','QA fixture'];}},AbortController,
    setTimeout:()=>1,clearTimeout:()=>{cleared=true;},
    fetch:async(url,options)=>{posted={url,options};if(outcome==='network')throw new Error('offline');if(outcome==='timeout'){const e=new Error();e.name='AbortError';throw e;}return{ok:outcome==='success'};}
  });
  check(form.elements.inquiry.value==='supplier','Supplier CTA prefills inquiry');
  await handler({preventDefault(){}});
  check(posted.url==='/'&&posted.options.method==='POST','Posts to Netlify endpoint');
  check(posted.options.body.includes('form-name=business-inquiry'),'Sends Netlify form name');
  check(!button.disabled&&cleared&&focused,'Restores controls and announces status');
  check(reset===(outcome==='success'),'Only clears form after confirmed success');
  check(status.dataset.state===(outcome==='success'?'success':'error'),`Correct state: ${outcome}`);
  if(outcome!=='success')check(status.textContent.includes('still here'),'Error retains message');
}
for(const outcome of ['success','http-error','network','timeout'])await testForm(outcome);
const sitemap=await readFile('dist/sitemap.xml','utf8');check(!sitemap.includes('thank-you'),'Success page excluded from sitemap');
const css=await readFile('public/assets/site.css','utf8');check(css.includes('prefers-reduced-motion'),'Reduced motion support');
const social=await readFile('dist/assets/social-card.png');check(social.readUInt32BE(16)===1200&&social.readUInt32BE(20)===630,'Social card dimensions');
console.log(`PASS: ${checks} checks across ${pages.length} pages, internal links, metadata, form payloads, success/error/timeout states, and social artwork.`);
console.log('Browser visual, mobile interaction, console, and deployed Netlify delivery checks are separate release gates.');
