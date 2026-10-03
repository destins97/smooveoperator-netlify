(()=>{
const root=document.documentElement;root.classList.add('js');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
// Same test the engine uses to pick the portrait clips.
const small=matchMedia('(max-width: 860px)').matches||matchMedia('(hover: none) and (pointer: coarse)').matches;
const clamp01=x=>x<0?0:x>1?1:x;

// Room 1 is the peak. Under reduced motion the film never loads, so the act
// shrinks to a static composition instead of holding a still for five screens.
const arrival=document.getElementById('arrival');
if(reduce)for(const [id,span] of [['arrival','2'],['light','1.4'],['formats','1.3']]){const el=document.getElementById(id);if(el)el.dataset.scSpan=span;}
if(window.ScrollCraft)ScrollCraft.mount(document.body);

// Signature move: the front door opens by itself on arrival, then hands the
// visitor the wheel. The prologue's last frame is the scrub clip's first frame,
// so the first scroll continues the same film from the doorway.
const door=document.querySelector('[data-door]');
if(door){
 const film=door.querySelector('video');
 const open=()=>{door.classList.add('is-open');removeEventListener('scroll',onScroll);};
 const onScroll=()=>{if(scrollY>8)open();};
 if(reduce||!film||scrollY>8)door.hidden=true;
 else{
  film.src=small?film.dataset.srcMobile:film.dataset.src;
  film.addEventListener('playing',()=>door.classList.add('is-playing'),{once:true});
  film.addEventListener('ended',open);
  film.addEventListener('error',open);
  addEventListener('scroll',onScroll,{passive:true});
  // A refused autoplay (Low Power Mode) lands straight on the open doorway.
  const start=()=>{const p=film.play();if(p&&p.catch)p.catch(open);setTimeout(()=>{if(!door.classList.contains('is-playing'))open();},5000);};
  // A tab opened in the background waits for the visitor before the door moves.
  if(document.visibilityState==='visible')start();
  else{const wake=()=>{if(document.visibilityState!=='visible')return;document.removeEventListener('visibilitychange',wake);start();};document.addEventListener('visibilitychange',wake);}
 }
}

// The room you are standing in, read from the walk-through's own clock.
// Cut times are from the encoded clip (source cuts, halved by the 2x retime).
const tag=document.querySelector('[data-room-tag]');
const walk=arrival&&arrival.querySelector('video[data-sc-scrub]');
if(tag&&walk){
 if(reduce)tag.parentElement.hidden=true;
 else{
  const cuts=[[0,'Entry and living'],[2.5,'Kitchen'],[5,'Dining'],[7.5,'Bedroom'],[10,'Bathroom'],[12.5,'Backyard']];
  const show=()=>{let name=cuts[0][1];for(const [t,n] of cuts)if(walk.currentTime>=t)name=n;if(tag.textContent!==name)tag.textContent=name;};
  walk.addEventListener('timeupdate',show);walk.addEventListener('seeked',show);
 }
}

// Shared scroll read, one rAF per frame at most.
const jobs=[];let queued=false;
const frame=()=>{queued=false;for(const job of jobs)job();};
const schedule=()=>{if(!queued){queued=true;requestAnimationFrame(frame);}};
addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);

// Room 2: the light. Scroll carries the golden hour across until the visitor
// takes the handle; from then on it stays where they put it.
const compare=document.querySelector('[data-compare]');
if(compare){
 const range=compare.querySelector('input[type=range]'),act=compare.closest('[data-sc-act]');
 let manual=false,last=-1;
 const set=r=>{if(Math.abs(r-last)<.001)return;last=r;compare.style.setProperty('--r',r.toFixed(4));const pct=Math.round(r*100);range.value=pct;range.setAttribute('aria-valuetext',pct+'% golden hour');};
 range.addEventListener('input',()=>{manual=true;set(range.value/100);});
 if(reduce)set(.5);
 else{
  const auto=()=>{if(manual)return;const box=act.getBoundingClientRect(),travel=Math.max(box.height-innerHeight,1);set(clamp01((-box.top/travel-.1)/.6));};
  jobs.push(auto);auto();
 }
}

// The rail moves sideways by transform, which the browser cannot scroll a focused
// link into. Park the act at the progress where that piece is centred instead.
const rail=document.querySelector('[data-sc-pan]');
if(rail){
 const act=rail.closest('[data-sc-act]');
 rail.addEventListener('focusin',e=>{
  const item=e.target.closest('.piece')||e.target,travel=rail.scrollWidth-innerWidth;
  if(travel<=0||reduce)return;
  const p=clamp01((item.offsetLeft+item.offsetWidth/2-innerWidth/2)/travel);
  scrollTo({top:act.offsetTop+p*(act.offsetHeight-innerHeight),behavior:'instant'});
 });
}

// The room list marks where the visitor is standing.
const links=[...document.querySelectorAll('[data-room-link]')];
if(links.length){
 const rooms=links.map(a=>document.getElementById(a.dataset.roomLink));
 const mark=()=>{let current=0;rooms.forEach((r,i)=>{if(r&&r.getBoundingClientRect().top<=innerHeight*.45)current=i;});links.forEach((a,i)=>{if(i===current)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});};
 jobs.push(mark);mark();
}

// The reel only plays while it is on screen, and never under reduced motion.
const loops=document.querySelectorAll('video[data-loop]');
if(loops.length&&!reduce&&'IntersectionObserver' in window){
 const io=new IntersectionObserver(entries=>{for(const e of entries){const v=e.target;if(e.isIntersecting){if(!v.src)v.src=v.dataset.src;const p=v.play();if(p&&p.catch)p.catch(()=>{});}else v.pause();}},{threshold:.4});
 loops.forEach(v=>io.observe(v));
}

// Campaign code from an outreach link travels with the request.
let source='direct';
try{const q=new URLSearchParams(location.search);const code=q.get('ref')||q.get('src')||q.get('utm_campaign');if(code){source=code.replace(/[^\w.-]/g,'').slice(0,64)||'direct';sessionStorage.setItem('so-source',source);}else source=sessionStorage.getItem('so-source')||'direct';}catch{}

const form=document.getElementById('booking');
if(!form)return;
form.noValidate=true;
const sourceField=document.getElementById('booking-source');if(sourceField)sourceField.value=source;
const status=document.getElementById('booking-status'),submit=form.querySelector('[type=submit]'),label=submit.textContent;
const controls=[...form.querySelectorAll('input:not([type=hidden]):not([type=checkbox]),textarea')].filter(el=>el.name!=='bot-field');
const descriptions=new Map(controls.map(el=>[el,el.getAttribute('aria-describedby')]));
let sending=false;
const clear=el=>{el.removeAttribute('aria-invalid');document.getElementById(el.id+'-error')?.remove();const original=descriptions.get(el);if(original)el.setAttribute('aria-describedby',original);else el.removeAttribute('aria-describedby');};
for(const el of controls)el.addEventListener('input',()=>clear(el));
const validate=()=>{let first=null;for(const el of controls){clear(el);if(!el.checkValidity()||(el.required&&!el.value.trim())){const msg=document.createElement('p');msg.id=el.id+'-error';msg.className='err-msg';msg.textContent=el.validity.typeMismatch?'Enter a valid email address, such as name@brokerage.com.':'Please fill this in.';el.closest('.field').append(msg);el.setAttribute('aria-invalid','true');el.setAttribute('aria-describedby',[descriptions.get(el),msg.id].filter(Boolean).join(' '));first??=el;}}
 if(first){first.focus();return false;}return true;};
form.addEventListener('submit',async e=>{e.preventDefault();if(sending||!validate())return;sending=true;submit.disabled=true;submit.textContent='Sending…';status.textContent='';status.dataset.state='';
const ctl=new AbortController(),timer=setTimeout(()=>ctl.abort(),15000);
try{const res=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString(),signal:ctl.signal});if(!res.ok)throw new Error('HTTP '+res.status);status.dataset.state='success';status.textContent='You’re signed in. I’ll email you to set a time for the call.';form.reset();if(sourceField)sourceField.value=source;}
catch(err){status.dataset.state='error';status.textContent=err.name==='AbortError'?'That took too long to confirm. Your answers are still here. Please try again in a moment.':'That did not go through. Your answers are still here. Please try again in a moment.';}
finally{clearTimeout(timer);sending=false;submit.disabled=false;submit.textContent=label;status.focus();}
});
})();
