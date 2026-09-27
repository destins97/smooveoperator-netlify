import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const html=await readFile('dist/contact/index.html','utf8'),js=await readFile('public/assets/site.js','utf8');
let total=0;
async function scenario(kind){ console.log('Testing '+kind);
 const dom=new JSDOM(html,{url:'https://smoove-operator.com/contact/?ref=qa-campaign',runScripts:'outside-only',pretendToBeVisual:true});
 const w=dom.window;w.matchMedia=()=>({matches:true,addEventListener(){}});let calls=0,payload;
 w.fetch=async(url,opts)=>{calls++;payload=opts;if(kind==='http')return {ok:false,status:503};if(kind==='network')throw new TypeError('offline');if(kind==='timeout'){const e=new Error('timeout');e.name='AbortError';throw e;}return {ok:true};};
 w.eval(js); console.log('Script loaded');const form=w.document.querySelector('form'),d=w.document;
 const send=()=>form.dispatchEvent(new w.Event('submit',{cancelable:true,bubbles:true}));
 send(); console.log('Required validation checked');assert.equal(calls,0);assert.equal(d.activeElement.id,'fc-name');assert.equal(d.querySelectorAll('[aria-invalid=true]').length,3);total+=3;
 for(const [id,value] of [['fc-name','QA'],['fc-email','qa@example.com'],['fc-message','This is a controlled development form test.']]){d.getElementById(id).value=value;d.getElementById(id).dispatchEvent(new w.Event('input',{bubbles:true}));}
 assert.equal(d.getElementById('fc-message').getAttribute('aria-describedby'),'message-help');total++;
 send();send();await new Promise(r=>setTimeout(r,20));assert.equal(calls,1);assert.equal(d.querySelector('[type=submit]').disabled,false);assert.equal(d.activeElement.id,'inquiry-status');total+=3;
 const data=new URLSearchParams(payload.body);assert.equal(data.get('form-name'),'supplier-fit-check');assert.equal(data.get('source'),'qa-campaign');assert.equal(data.get('inquiry'),'supplier');total+=3;
 assert.equal(d.getElementById('inquiry-status').dataset.state,kind==='success'?'success':'error');total++;
 assert.equal(d.getElementById('fc-name').value,kind==='success'?'':'QA');total++;
 if(kind!=='success'){assert.match(d.getElementById('inquiry-status').textContent,/still here/);total++;}
 dom.window.close();
}
for(const mode of ['success','http','network','timeout'])await scenario(mode);
console.log(`PASS: ${total} form behavior assertions: required fields, focus, description restoration, duplicate prevention, payload, success, HTTP/network/timeout failures, retained inputs.`);

