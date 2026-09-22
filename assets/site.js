(()=>{
const d=document,root=d.documentElement;root.classList.remove('no-js');root.classList.add('js');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const header=d.querySelector('.header');
const onScroll=()=>header&&header.classList.toggle('is-scrolled',scrollY>12);addEventListener('scroll',onScroll,{passive:true});onScroll();
// Menu
const menu=d.querySelector('.menu-toggle'),nav=d.querySelector('#main-navigation');
if(menu&&nav){
 const close=()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');};
 menu.addEventListener('click',()=>{const o=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(o));nav.classList.toggle('is-open',o);});
 d.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){close();menu.focus();}});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))close();});
 matchMedia('(min-width: 901px)').addEventListener('change',close);
}
// Reveal
const els=d.querySelectorAll('.reveal,.flow');
if(!reduce&&'IntersectionObserver' in window){
 d.querySelectorAll('[data-stagger]').forEach(g=>[...g.children].forEach((c,i)=>c.style.setProperty('--i',i)));
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
 els.forEach(el=>io.observe(el));
}else els.forEach(el=>el.classList.add('is-in'));
// Card spotlight
if(!reduce&&matchMedia('(hover: hover)').matches){
 d.querySelectorAll('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px');}));
}
// Generative hero field: gold particles drifting along a flow field toward the horizon
const cv=d.querySelector('#field');
if(cv&&!reduce){
 const ctx=cv.getContext('2d');let w,h,dpr,pts=[],raf,visible=true,t=0;
 const size=()=>{dpr=Math.min(devicePixelRatio||1,2);w=cv.clientWidth;h=cv.clientHeight;cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);const n=Math.round(Math.min(90,w*h/14000));pts=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h*.62,l:Math.random()}));};
 const step=()=>{t+=.0025;ctx.fillStyle='rgba(7,7,7,.16)';ctx.fillRect(0,0,w,h);
  for(const p of pts){const a=Math.sin(p.x*.004+t)*1.4+Math.cos(p.y*.006-t*1.3)*1.1;p.x+=Math.cos(a)*.7+.35;p.y+=Math.sin(a)*.45;p.l+=.004;
   if(p.x>w+10||p.y<-10||p.y>h*.6||p.l>1){p.x=Math.random()*w*.3-10;p.y=Math.random()*h*.62;p.l=0;}
   const o=Math.sin(p.l*Math.PI)*.75;ctx.fillStyle=`rgba(${p.l>.7?'0,170,255':'227,196,90'},${o*(p.l>.7?.5:1)})`;ctx.fillRect(p.x,p.y,1.4,1.4);}
  raf=visible?requestAnimationFrame(step):0;};
 size();addEventListener('resize',()=>{cancelAnimationFrame(raf);size();if(visible)raf=requestAnimationFrame(step);},{passive:true});
 new IntersectionObserver(([e])=>{visible=e.isIntersecting&&!d.hidden;if(visible&&!raf)raf=requestAnimationFrame(step);}).observe(cv);
 d.addEventListener('visibilitychange',()=>{visible=!d.hidden;if(visible&&!raf)raf=requestAnimationFrame(step);});
 raf=requestAnimationFrame(step);
}
// Contact form
const form=d.querySelector('#contact-form');
if(form){
 const type=new URLSearchParams(location.search).get('type');
 if(['supplier','brand','business','general'].includes(type))form.elements.inquiry.value=type;
 let sending=false;
 form.addEventListener('submit',async ev=>{
  ev.preventDefault();if(sending||!form.reportValidity())return;
  const status=d.querySelector('#form-status'),submit=form.querySelector('[type="submit"]');
  sending=true;submit.disabled=true;submit.textContent='Sending…';status.textContent='';
  const ac=new AbortController(),to=setTimeout(()=>ac.abort(),15000);
  try{const r=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString(),signal:ac.signal});
   if(!r.ok)throw new Error('fail');status.dataset.state='success';status.textContent='Inquiry received. Thank you for reaching out.';form.reset();status.focus();
  }catch(err){status.dataset.state='error';status.textContent=err.name==='AbortError'?'We could not confirm delivery in time. Your message is still here, so please try again shortly.':'Your inquiry did not send. Your message is still here, so please try again shortly.';status.focus();}
  finally{clearTimeout(to);sending=false;submit.disabled=false;submit.innerHTML='Send inquiry <span class="arr" aria-hidden="true">↗</span>';}
 });
}
})();
