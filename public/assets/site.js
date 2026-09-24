(()=>{
const root=document.documentElement;root.classList.add('js');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=id=>document.getElementById(id);
const fmt=n=>Math.round(n).toLocaleString('en-US');

/* outreach source: ?ref= / ?src= / ?utm_campaign= kept for this tab */
let source='direct';
try{
  const q=new URLSearchParams(location.search);
  const hit=q.get('ref')||q.get('src')||q.get('utm_campaign');
  if(hit){source=hit.replace(/[^\w.-]/g,'').slice(0,64)||'direct';sessionStorage.setItem('so-source',source);}
  else source=sessionStorage.getItem('so-source')||'direct';
}catch{}

/* mobile menu: the inline boot script already collapsed it before first paint */
const menu=document.querySelector('.menu-toggle'),nav=$('site-nav');
if(menu&&nav){
  const mq=matchMedia('(max-width: 1000px)');
  const close=()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');};
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){close();menu.focus();}});
  nav.addEventListener('click',e=>{if(e.target.closest('a'))close();});
  mq.addEventListener('change',close);
}

const wait=ms=>new Promise(r=>setTimeout(r,ms));

/* route line: the page's one authored moment. A gold car travels the line station by station.
   Every station stays readable (dimmed, never hidden) until the car arrives; reduced motion shows the finished line. */
function routeLine(r){
  const stops=[...r.querySelectorAll('.stop')],dots=stops.map(s=>s.querySelector('.stop-dot')),track=r.querySelector('.route-track'),car=r.querySelector('.route-car');
  let at=stops.length-1;
  const centre=d=>{const a=d.getBoundingClientRect(),b=r.getBoundingClientRect();return [a.left+a.width/2-b.left,a.top+a.height/2-b.top];};
  const place=i=>{at=i;const [x,y]=centre(dots[i]);car.style.setProperty('--cx',x+'px');car.style.setProperty('--cy',y+'px');track.style.setProperty('--p',stops.length>1?i/(stops.length-1):1);};
  const layout=()=>{
    const [x0,y0]=centre(dots[0]),[x1,y1]=centre(dots[dots.length-1]),vertical=Math.abs(x1-x0)<2;
    r.classList.toggle('is-vertical',vertical);
    Object.assign(track.style,vertical?{left:x0-2+'px',top:y0+'px',width:'4px',height:y1-y0+'px',right:'auto',bottom:'auto'}:{left:x0+'px',top:y0-2+'px',width:x1-x0+'px',height:'4px',right:'auto',bottom:'auto'});
    place(at);
  };
  layout();addEventListener('resize',layout);document.fonts&&document.fonts.ready.then(layout);
  if(reduce||!('IntersectionObserver' in window))return;
  r.classList.add('is-armed');stops.forEach((s,i)=>s.classList.toggle('is-lit',i===0));place(0);
  const io=new IntersectionObserver(async es=>{
    if(!es.some(e=>e.isIntersecting))return;
    io.disconnect();await wait(250);r.classList.add('is-moving');
    for(let i=1;i<stops.length;i++){place(i);await wait(1000);stops[i].classList.add('is-lit');await wait(220);}
    r.classList.remove('is-moving');r.classList.remove('is-armed');
  },{rootMargin:'0px 0px -20% 0px',threshold:.25});
  io.observe(r);
}
document.querySelectorAll('[data-route]').forEach(routeLine);

/* rules board: a sample listing run through the four rules */
const board=$('rules-board');
if(board){
  const sales=$('slice-sales'),sellers=$('slice-sellers'),skip=$('rules-skip'),live=$('rules-live'),rule1=board.querySelector('[data-v="skip"]');
  const paint=el=>el.style.setProperty('--p',((el.value-el.min)/(el.max-el.min)*100)+'%');
  const flapTo=(id,val)=>{const host=$(id),len=+host.dataset.len,t=String(val).padStart(len,' ').slice(-len);
    [...host.children].forEach((c,i)=>{const ch=t[i]===' '?' ':t[i];if(c.textContent!==ch){c.textContent=ch;if(!reduce&&c.animate)c.animate([{transform:'scaleY(1)'},{transform:'scaleY(.1)'},{transform:'scaleY(1)'}],{duration:140,easing:'ease-out'});}});};
  let liveTimer=0;
  const upd=announce=>{
    const s=+sales.value,n=+sellers.value,per=Math.round(s/(n+1)),off=skip.checked;
    $('slice-sales-out').textContent=fmt(s);$('slice-sellers-out').textContent=n;$('v-per').textContent=fmt(per);
    for(const id of ['v-low','r-low'])$(id).textContent=fmt(per);
    for(const id of ['v-high','r-high'])$(id).textContent=fmt(per*2);
    flapTo('f-sales',s);flapTo('f-sellers',n);flapTo('f-per',per);
    board.classList.toggle('is-skipped',off);rule1.textContent=off?'Skipped':'Continue';
    paint(sales);paint(sellers);
    if(announce){clearTimeout(liveTimer);liveTimer=setTimeout(()=>{live.textContent=off?'Rule 1 skips this listing. No order.':`Our share is ${fmt(per)} units a month. First order: ${fmt(per)} to ${fmt(per*2)} units.`;},600);}
  };
  for(const el of [sales,sellers])el.addEventListener('input',()=>upd(true));
  skip.addEventListener('change',()=>upd(true));
  upd(false);
}

/* supplier fit check: three steps when JS runs, one long form when it doesn't */
const form=$('fit-check');
if(form){
  const src=$('fit-source');if(src)src.value=source;
  const steps=[...form.querySelectorAll('.fit-step')],prog=[...form.querySelectorAll('.fit-progress li')],progList=form.querySelector('.fit-progress');
  const back=form.querySelector('[data-back]'),next=form.querySelector('[data-next]'),submit=form.querySelector('[data-submit]');
  const status=$('fit-status'),terms=[...steps[1].querySelectorAll('[required]')];
  let cur=0,sending=false;
  /* the progress is a three-station route: the car sits on the current step */
  const car=progList.querySelector('.fit-car'),track=progList.querySelector('.fit-track');
  const placeCar=()=>{const a=prog[cur].getBoundingClientRect(),b=progList.getBoundingClientRect();if(!a.width)return;car.style.setProperty('--cx',a.left+a.width/2-b.left+'px');track.style.setProperty('--p',cur/(prog.length-1));};
  addEventListener('resize',placeCar);document.fonts&&document.fonts.ready.then(placeCar);
  const show=(i,focus)=>{
    cur=i;steps.forEach((s,j)=>{s.hidden=j!==i;s.classList.toggle('is-entering',j===i&&!reduce);});
    prog.forEach((p,j)=>{p.classList.toggle('is-current',j===i);p.classList.toggle('is-done',j<i);});
    placeCar();
    back.hidden=i===0;next.hidden=i===steps.length-1;submit.hidden=i!==steps.length-1;
    if(focus){
      const f=steps[i].querySelector('input:not([type=hidden]),select,textarea');f&&f.focus({preventScroll:true});
      const top=form.getBoundingClientRect().top;
      if(top<90||top>innerHeight*.6)progList.scrollIntoView({block:'start',behavior:reduce?'auto':'smooth'});
    }
  };
  const clearErr=el=>{el.removeAttribute('aria-invalid');const m=el.closest('.field,.field-set')?.querySelector('.err-msg');m&&m.remove();el.closest('.field-set')?.classList.remove('fit-set-invalid');};
  const msgFor=el=>el.validity.valueMissing?(el.dataset.need||el.closest('.field-set')?.dataset.need||'This field is needed.'):el.validity.typeMismatch?'Enter a valid email address, like name@company.com.':'Check this field.';
  const validate=step=>{
    let first=null;const seen=new Set();
    step.querySelectorAll('input,select,textarea').forEach(el=>{
      if(el.type==='hidden'||seen.has(el.name))return;seen.add(el.name);
      const ok=el.type==='radio'?!!step.querySelector(`input[name="${el.name}"]:checked`)||!step.querySelector(`input[name="${el.name}"][required]`):el.checkValidity();
      const holder=el.closest('.field,.field-set');holder?.querySelector('.err-msg')?.remove();
      if(!ok){
        const target=el.type==='radio'?step.querySelector(`input[name="${el.name}"]`):el;
        if(el.type==='radio')holder.classList.add('fit-set-invalid');else el.setAttribute('aria-invalid','true');
        const m=document.createElement('p');m.className='err-msg';m.id=(el.id||el.name)+'-err';m.textContent=msgFor(target);holder.appendChild(m);
        if(el.type!=='radio')el.setAttribute('aria-describedby',m.id);
        first=first||target;
      }
    });
    if(first){first.focus();return false;}return true;
  };
  /* "Something else" (a question about the site, say) makes the supplier terms optional */
  const roleSync=()=>{
    const other=form.querySelector('input[name="role"]:checked')?.value==='other';
    form.classList.toggle('is-other',other);terms.forEach(el=>{el.required=!other;if(other)clearErr(el);});
  };
  form.addEventListener('input',e=>clearErr(e.target));
  form.addEventListener('change',e=>{clearErr(e.target);if(e.target.name==='role')roleSync();});
  next.addEventListener('click',()=>{if(validate(steps[cur]))show(cur+1,true);});
  back.addEventListener('click',()=>show(cur-1,true));
  roleSync();show(0,false);form.classList.add('is-ready');requestAnimationFrame(()=>{placeCar();requestAnimationFrame(()=>progList.classList.add('is-live'));});
  form.addEventListener('submit',async e=>{
    e.preventDefault();if(sending)return;
    for(let i=0;i<steps.length;i++){steps[i].hidden=false;if(!validate(steps[i])){show(i,false);validate(steps[i]);return;}steps[i].hidden=i!==cur;}
    sending=true;submit.disabled=true;submit.firstChild.textContent='Sending ';status.dataset.state='';status.textContent='';
    const ctl=new AbortController(),timer=setTimeout(()=>ctl.abort(),15000);
    try{
      const res=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString(),signal:ctl.signal});
      if(!res.ok)throw new Error('status '+res.status);
      form.classList.add('is-sent');
      const done=document.createElement('div');done.className='fit-done';
      done.innerHTML='<svg class="seal-mark" viewBox="0 0 40 40" fill="none" stroke="#D9B24C" stroke-width="1.2" aria-hidden="true"><circle cx="20" cy="20" r="18"/><circle cx="20" cy="20" r="13.5" stroke-dasharray="1.5 2"/><path d="M13.5 20.5l4.2 4.2 8.8-9.2"/></svg><h3>Received, thank you.</h3><p>Your Fit Check reached SmooveOperator. We’ll reply to <b></b> if there’s an opportunity to explore or we need more information.</p>';
      done.querySelector('b').textContent=form.elements.email.value.trim();
      form.prepend(done);status.dataset.state='success';status.textContent='Fit Check sent.';done.setAttribute('tabindex','-1');done.focus();
    }catch(err){
      status.dataset.state='error';
      status.textContent=err.name==='AbortError'?'We couldn’t confirm delivery in time. Your answers are still here, so please try again in a moment.':'Your Fit Check could not be sent. Your answers are still here, so please try again in a moment.';
      status.focus();
    }finally{clearTimeout(timer);sending=false;submit.disabled=false;submit.firstChild.textContent='Send the Fit Check ';}
  });
}
})();
