(()=>{
const root=document.documentElement;root.classList.add('js');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('site-nav');
if(menu&&nav){
 const close=()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');};
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){close();menu.focus();}});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))close();});
 matchMedia('(max-width:1000px)').addEventListener('change',close);
}
// Native details keep every stage accessible without JavaScript.
if(!reduced.matches&&'IntersectionObserver' in window){
 const io=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('map-arrive');io.unobserve(e.target);}},{threshold:.2});
 document.querySelectorAll('[data-commerce]').forEach(el=>io.observe(el));
}
// Night Route hero: long-exposure gold light trails. Static frame under reduced motion; pauses offscreen, on tab hide and after 30s.
const trailsCv=document.querySelector('.nr-trails');
if(trailsCv&&trailsCv.getContext){
 const ctx=trailsCv.getContext('2d'),pauseBtn=document.querySelector('.nr-pause');let W=0,H=0,trails=[],running=false,visible=true,userPaused=false,raf=0;const stopAt=performance.now()+30000;
 const mk=()=>{const gold=Math.random()<.78;return{lane:Math.floor(Math.random()*7)-3+(Math.random()-.5)*.6,z:Math.random(),speed:.0016+Math.random()*.0032,len:.08+Math.random()*.22,w:.6+Math.random()*2.2,col:gold?(Math.random()<.3?'255,241,194':'255,192,0'):'255,255,255',a:.25+Math.random()*.6};};
 const pt=(lane,z)=>{const e=z*z,curve=Math.sin(z*Math.PI*.9)*W*.18*(1-z);return[W*.62+curve+lane*e*W*.16,H*.46+e*H*.62];};
 const size=()=>{W=trailsCv.clientWidth;H=trailsCv.clientHeight;const small=W<700,d=Math.min(small?1.5:2,devicePixelRatio||1);trailsCv.width=W*d;trailsCv.height=H*d;ctx.setTransform(d,0,0,d,0,0);trails=Array.from({length:small?48:120},mk);};
 const frame=(move)=>{ctx.globalCompositeOperation='source-over';ctx.fillStyle='rgba(0,0,0,.28)';ctx.fillRect(0,0,W,H);ctx.globalCompositeOperation='lighter';ctx.lineCap='round';
  for(const t of trails){if(move){t.z+=t.speed*(.4+t.z*1.6);if(t.z-t.len>1)Object.assign(t,mk(),{z:0});}
   const z0=Math.max(0,t.z-t.len),z1=Math.min(1.05,t.z);ctx.beginPath();for(let k=0;k<=14;k++){const[x,y]=pt(t.lane,z0+(z1-z0)*k/14);k?ctx.lineTo(x,y):ctx.moveTo(x,y);}
   const[xa,ya]=pt(t.lane,z0),[xb,yb]=pt(t.lane,z1),g=ctx.createLinearGradient(xa,ya,xb,yb);g.addColorStop(0,`rgba(${t.col},0)`);g.addColorStop(1,`rgba(${t.col},${t.a})`);ctx.strokeStyle=g;ctx.lineWidth=t.w*(.3+z1*2.2);ctx.stroke();}};
 const settle=()=>{for(let i=0;i<28;i++)frame(true);};
 const idle=fn=>('requestIdleCallback' in window)?requestIdleCallback(fn,{timeout:1200}):setTimeout(fn,200);
 const loop=()=>{if(!running)return;frame(true);if(performance.now()>stopAt)return stop();raf=requestAnimationFrame(loop);};
 const sync=()=>{if(pauseBtn){pauseBtn.setAttribute('aria-pressed',String(!running));pauseBtn.setAttribute('aria-label',running?'Pause background motion':'Play background motion');}};
 const start=()=>{if(running||reduced.matches||userPaused||!visible||document.hidden)return;running=true;sync();raf=requestAnimationFrame(loop);};
 const stop=()=>{running=false;cancelAnimationFrame(raf);sync();};
 // Draw after first paint and during idle time so the light trails never delay the page becoming usable.
 idle(()=>{size();settle();
 if(!reduced.matches){if(pauseBtn){pauseBtn.hidden=false;pauseBtn.addEventListener('click',()=>{if(running){userPaused=true;stop();}else{userPaused=false;running=true;sync();raf=requestAnimationFrame(loop);}});}start();}
 let rw=W;new ResizeObserver(()=>{if(Math.abs(trailsCv.clientWidth-rw)<2)return;rw=trailsCv.clientWidth;size();settle();}).observe(trailsCv);
 if('IntersectionObserver' in window)new IntersectionObserver(([e])=>{visible=e.isIntersecting;visible?start():stop();}).observe(trailsCv);
 document.addEventListener('visibilitychange',()=>{document.hidden?stop():start();});});
}
// Route line: a stage lights once it crosses 55% of the viewport.
const rail=document.querySelector('[data-route]');
if(rail&&'IntersectionObserver' in window){
 const stagesEls=[...rail.querySelectorAll('.nr-stage')],fillEl=rail.querySelector('.nr-fill'),num=document.querySelector('[data-route-number]'),lab=document.querySelector('[data-route-label]'),on=new Set();
 const paint=()=>{let cur=-1;stagesEls.forEach((el,i)=>{el.classList.toggle('on',on.has(i));if(on.has(i))cur=i;});const c=Math.max(0,cur);
  fillEl.style.transform=`scaleY(${cur<0?0:Math.min(1,(stagesEls[c].offsetTop+18)/Math.max(1,rail.offsetHeight-20))})`;if(num)num.textContent=stagesEls[c].dataset.n;if(lab)lab.textContent=stagesEls[c].dataset.l;};
 const sio=new IntersectionObserver(es=>{for(const e of es){const i=stagesEls.indexOf(e.target);(e.isIntersecting||e.boundingClientRect.bottom<(e.rootBounds?e.rootBounds.top:0))?on.add(i):on.delete(i);}paint();},{rootMargin:'0px 0px -45% 0px'});
 stagesEls.forEach(el=>sio.observe(el));
}
// Partnership outline: shared labels for the homepage preview and the suppliers form.
const OUTLINE={who:{brand:'Brand owner',manufacturer:'Manufacturer',wholesaler:'Wholesaler',distributor:'Authorized distributor'},channel:{amazon:'Amazon US',approved:'Channels you approve'},cadence:{opening:'Opening order',replenishment:'Replenishment'}};
const outlineText=(w,c,k)=>{const who=OUTLINE.who[w],art=/^[AEIOU]/.test(who)?'an':'a';return `I represent ${art} ${who.toLowerCase()} and would like to discuss an account. Channel: ${OUTLINE.channel[c]}. Cadence: ${k==='opening'?'opening order, then review sell-through':'scheduled replenishment once demand is proven'}.`;};
const outline=document.getElementById('partner-outline');
if(outline){const upd=()=>{const d=new FormData(outline),w=d.get('who'),c=d.get('channel'),k=d.get('cadence');outline.querySelector('[data-out=who]').textContent=OUTLINE.who[w];outline.querySelector('[data-out=channel]').textContent=OUTLINE.channel[c];outline.querySelector('[data-out=cadence]').textContent=OUTLINE.cadence[k];outline.querySelector('[data-out=message]').textContent=outlineText(w,c,k);};outline.addEventListener('change',upd);upd();}
// Business profile: view the PDF in an on-page viewer on larger screens whose browser renders PDFs inline; everything else opens a new tab, never a forced download.
const pdfLink=document.querySelector('[data-pdf-dialog]'),pdfDialog=document.getElementById('pdf-dialog');
if(pdfLink&&pdfDialog&&typeof pdfDialog.showModal==='function'){pdfLink.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||navigator.pdfViewerEnabled!==true||!matchMedia('(min-width:900px) and (pointer:fine)').matches)return;e.preventDefault();const f=pdfDialog.querySelector('iframe');if(!f.src)f.src=f.dataset.src;pdfDialog.showModal();});pdfDialog.addEventListener('click',e=>{if(e.target===pdfDialog)pdfDialog.close();});}
let source='direct';
try{const q=new URLSearchParams(location.search);const code=q.get('ref')||q.get('src')||q.get('utm_campaign');if(code){source=code.replace(/[^\w.-]/g,'').slice(0,64)||'direct';sessionStorage.setItem('so-source',source);}else source=sessionStorage.getItem('so-source')||'direct';}catch{}
const form=document.getElementById('supplier-inquiry');
if(!form)return;
form.noValidate=true;
const sourceField=document.getElementById('inquiry-source');if(sourceField)sourceField.value=source;
// Arriving from the homepage outline: prefill only known values, never free text from the URL.
try{const q=new URLSearchParams(location.search),w=q.get('who'),c=q.get('channel'),k=q.get('cadence');if(OUTLINE.who[w]&&OUTLINE.channel[c]&&OUTLINE.cadence[k]){const msg=document.getElementById('fc-message'),ch=document.getElementById('fc-channels'),inq=document.getElementById('fc-inquiry');if(msg&&!msg.value)msg.value=outlineText(w,c,k);if(ch&&!ch.value)ch.value=OUTLINE.channel[c];if(inq)inq.value='supplier';}}catch{}
const status=document.getElementById('inquiry-status'),submit=form.querySelector('[type=submit]');
const controls=[...form.querySelectorAll('input:not([type=hidden]),select,textarea')].filter(el=>el.name!=='bot-field');
const descriptions=new Map(controls.map(el=>[el,el.getAttribute('aria-describedby')]));
let sending=false;
const clear=el=>{el.removeAttribute('aria-invalid');document.getElementById(el.id+'-error')?.remove();const original=descriptions.get(el);if(original)el.setAttribute('aria-describedby',original);else el.removeAttribute('aria-describedby');};
for(const el of controls)el.addEventListener('input',()=>clear(el));
const validate=()=>{let first=null;for(const el of controls){clear(el);if(!el.checkValidity()||(el.required&&!el.value.trim())){const msg=document.createElement('p');msg.id=el.id+'-error';msg.className='err-msg';msg.textContent=el.validity.typeMismatch?'Enter a valid email address, such as name@company.com.':el.validity.tooShort?'Please add a little more detail, at least 15 characters.':'Please complete this field.';el.closest('.field').append(msg);el.setAttribute('aria-invalid','true');el.setAttribute('aria-describedby',[descriptions.get(el),msg.id].filter(Boolean).join(' '));first??=el;}}
 if(first){first.closest('details')?.setAttribute('open','');first.focus();return false;}return true;};
form.addEventListener('submit',async e=>{e.preventDefault();if(sending||!validate())return;sending=true;submit.disabled=true;submit.firstChild.textContent='Sending inquiry ';status.textContent='';status.dataset.state='';
const ctl=new AbortController(),timer=setTimeout(()=>ctl.abort(),15000);
try{const res=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString(),signal:ctl.signal});if(!res.ok)throw new Error('HTTP '+res.status);status.dataset.state='success';status.textContent='Received. Thank you for reaching out. Your inquiry has been submitted. We review messages and reply by email when there is a potential fit or we need more information.';form.reset();sourceField.value=source;}
catch(err){status.dataset.state='error';status.textContent=err.name==='AbortError'?'We could not confirm delivery in time. Your answers are still here. Please try again in a moment.':'Your inquiry could not be sent. Your answers are still here. Please try again in a moment.';}
finally{clearTimeout(timer);sending=false;submit.disabled=false;submit.firstChild.textContent='Send inquiry ';status.focus();}
});
})();
