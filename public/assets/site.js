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
 const journeyObserver=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('is-arrived');journeyObserver.unobserve(e.target);}},{threshold:.15});
 document.querySelectorAll('[data-journey]').forEach(el=>journeyObserver.observe(el));
}
let source='direct';
try{const q=new URLSearchParams(location.search);const code=q.get('ref')||q.get('src')||q.get('utm_campaign');if(code){source=code.replace(/[^\w.-]/g,'').slice(0,64)||'direct';sessionStorage.setItem('so-source',source);}else source=sessionStorage.getItem('so-source')||'direct';}catch{}
const form=document.getElementById('supplier-inquiry');
if(!form)return;
form.noValidate=true;
const sourceField=document.getElementById('inquiry-source');if(sourceField)sourceField.value=source;
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
