import {JSDOM,VirtualConsole} from 'jsdom';
import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const html=await readFile('dist/index.html','utf8'),js=await readFile('public/assets/site.js','utf8');
let total=0;
async function scenario(kind){
 // jsdom does not implement media playback; the page already tolerates that, so keep the log quiet.
 const dom=new JSDOM(html,{url:'https://smoove-operator.com/?ref=qa-campaign',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()});
 const w=dom.window;w.matchMedia=q=>({matches:/reduce/.test(q),addEventListener(){}});let calls=0,payload;
 w.fetch=async(url,opts)=>{calls++;payload=opts;if(kind==='http')return {ok:false,status:503};if(kind==='network')throw new TypeError('offline');if(kind==='timeout'){const e=new Error('timeout');e.name='AbortError';throw e;}return {ok:true};};
 w.eval(js);const d=w.document,form=d.getElementById('booking');
 const send=()=>form.dispatchEvent(new w.Event('submit',{cancelable:true,bubbles:true}));
 send();assert.equal(calls,0);assert.equal(d.activeElement.id,'bk-name');assert.equal(d.querySelectorAll('[aria-invalid=true]').length,2);total+=3;
 d.getElementById('bk-email').value='not-an-email';send();assert.equal(calls,0);assert.match(d.getElementById('bk-email-error').textContent,/valid email/);total+=2;
 for(const [id,value] of [['bk-name','QA'],['bk-email','qa@example.com'],['bk-message','Controlled development form test.']]){d.getElementById(id).value=value;d.getElementById(id).dispatchEvent(new w.Event('input',{bubbles:true}));}
 d.querySelector('input[name=needs][value=Reel]').checked=true;
 assert.equal(d.getElementById('bk-message').getAttribute('aria-describedby'),'bk-message-help');total++;
 send();send();await new Promise(r=>setTimeout(r,20));assert.equal(calls,1);assert.equal(d.querySelector('[type=submit]').disabled,false);assert.equal(d.querySelector('[type=submit]').textContent,'Book a free call');assert.equal(d.activeElement.id,'booking-status');total+=4;
 const data=new URLSearchParams(payload.body);assert.equal(data.get('form-name'),'book-a-call');assert.equal(data.get('source'),'qa-campaign');assert.deepEqual(data.getAll('needs'),['Reel']);total+=3;
 assert.equal(d.getElementById('booking-status').dataset.state,kind==='success'?'success':'error');total++;
 assert.equal(d.getElementById('bk-name').value,kind==='success'?'':'QA');total++;
 if(kind!=='success'){assert.match(d.getElementById('booking-status').textContent,/still here/);total++;}
 // Reduced motion: the door prologue never plays and the light handle rests at the midpoint.
 assert.equal(d.querySelector('[data-door]').hidden,true);assert.equal(d.getElementById('light-range').value,'50');total+=2;
 dom.window.close();
}
for(const mode of ['success','http','network','timeout'])await scenario(mode);
console.log(`PASS: ${total} behavior assertions: required fields, email validation, focus, description restoration, duplicate prevention, payload, success, HTTP/network/timeout failures, retained inputs, reduced-motion door and light handle.`);
