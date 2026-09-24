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

/* guilloche rosette: layered hypotrochoid bands at different depths. They turn slowly, and each
   layer leans toward the pointer by its depth, so the engraving reads as stacked plates.
   Page heroes carry a still copy, drawn once. */
const bandsFull=[
  // R, r, p, wobble, colour, alpha, line width, turn direction, depth
  [300,40,120,.02,'#D9B24C',.36,.6,1,1],
  [280,48,104,.022,'#8A6B22',.5,.45,-.8,.82],
  [250,70,90,.03,'#8A6B22',.5,.5,-1.3,.64],
  [210,33,82,.018,'#F6DE8D',.16,.35,.9,.5],
  [180,30,70,.025,'#F6DE8D',.22,.45,.7,.36],
  [120,20,40,.04,'#D9B24C',.3,.5,-1,.2]
];
const gcd=(a,b)=>b?gcd(b,a%b):a;
function rosette(c,live){
  const x=c.getContext('2d');if(!x)return;
  const small=innerWidth<760,bands=small?bandsFull.filter((_,i)=>i!==1&&i!==3):bandsFull;
  let W=0,H=0,d=1,t=0,tx=0,ty=0,mx=0,my=0,run=false,raf=0,odd=false;
  const size=()=>{const r=c.getBoundingClientRect();d=Math.min(1.5,devicePixelRatio||1);W=c.width=Math.round(r.width*d);H=c.height=Math.round(r.height*d);};
  const draw=()=>{
    mx+=(tx-mx)*.06;my+=(ty-my)*.06;x.clearRect(0,0,W,H);const s=W/d/900,lean=Math.hypot(mx,my);
    for(const [R,r,p,amp,col,a,lw,dir,depth] of bands){
      const RR=R*s,rr=r*s,pp=p*s,k=(RR-rr)/rr,revs=r/gcd(R,r),turns=Math.PI*2*revs,N=Math.min(small?1400:2600,Math.round(revs*(small?220:320)));
      const rot=t*dir*.35,cr=Math.cos(rot),sr=Math.sin(rot),ph=t*dir,am=amp+lean*.035*dir;
      const ox=W/2+mx*depth*34*d,oy=H/2+my*depth*34*d;
      x.beginPath();x.strokeStyle=col;x.globalAlpha=a;x.lineWidth=lw*d;
      for(let i=0;i<=N;i++){const th=i/N*turns,w=1+am*Math.sin(th*7+ph);
        const X=((RR-rr)*Math.cos(th)+pp*Math.cos(k*th))*w,Y=((RR-rr)*Math.sin(th)-pp*Math.sin(k*th))*w;
        const px=ox+(X*cr-Y*sr)*d,py=oy+(X*sr+Y*cr)*d;
        i?x.lineTo(px,py):x.moveTo(px,py);}
      x.stroke();
    }
  };
  size();draw();
  addEventListener('resize',()=>{size();draw();});
  if(!live||reduce)return;
  const loop=()=>{odd=!odd;if(odd){t+=.008;draw();}if(run)raf=requestAnimationFrame(loop);};
  const start=()=>{if(run)return;run=true;raf=requestAnimationFrame(loop);};
  const stop=()=>{run=false;cancelAnimationFrame(raf);};
  addEventListener('pointermove',e=>{tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5;},{passive:true});
  if('IntersectionObserver' in window)new IntersectionObserver(es=>{es[0].isIntersecting&&!document.hidden?start():stop();}).observe(c);else start();
  document.addEventListener('visibilitychange',()=>{document.hidden?stop():start();});
}
document.querySelectorAll('canvas.rosette').forEach(c=>rosette(c,!c.classList.contains('rosette-still')));

/* the instrument: a sample listing run through the four rules */
const note=$('note');
if(note){
  const sales=$('slice-sales'),sellers=$('slice-sellers'),skip=$('rules-skip'),live=$('note-live'),rule1=note.querySelector('[data-v="skip"]');
  const paint=el=>el.style.setProperty('--p',((el.value-el.min)/(el.max-el.min)*100)+'%');
  let liveTimer=0;
  const upd=announce=>{
    const s=+sales.value,n=+sellers.value,per=s/(n+1),off=skip.checked;
    $('slice-sales-out').textContent=fmt(s);$('slice-sellers-out').textContent=n;
    $('v-sales').textContent=fmt(s);$('v-sellers').textContent=n;$('v-per').textContent=fmt(per);
    for(const id of ['v-low','r-low'])$(id).textContent=fmt(per);
    for(const id of ['v-high','r-high'])$(id).textContent=fmt(per*2);
    note.classList.toggle('is-skipped',off);
    rule1.textContent=off?'Marketplace is selling. Skip this listing.':'Marketplace isn’t selling. Continue.';
    paint(sales);paint(sellers);
    if(announce){clearTimeout(liveTimer);liveTimer=setTimeout(()=>{live.textContent=off?'Rule 1 skips this listing. No order.':`Our share is ${fmt(per)} units a month. First order: ${fmt(per)} to ${fmt(per*2)} units.`;},600);}
  };
  for(const el of [sales,sellers])el.addEventListener('input',()=>upd(true));
  skip.addEventListener('change',()=>upd(true));
  upd(false);
  /* one authored moment: armed only when the note starts below the fold, so nothing visible ever hides */
  if(!reduce&&'IntersectionObserver' in window&&note.getBoundingClientRect().top>innerHeight){
    note.classList.add('is-armed');
    const io=new IntersectionObserver(es=>{
      if(!es.some(e=>e.isIntersecting))return;
      io.disconnect();requestAnimationFrame(()=>note.classList.add('is-in'));
      setTimeout(()=>note.classList.remove('is-armed','is-in'),2400);
    },{rootMargin:'0px 0px -22% 0px'});
    io.observe(note);
  }
}

/* supplier fit check: three steps when JS runs, one long form when it doesn't */
const form=$('fit-check');
if(form){
  const src=$('fit-source');if(src)src.value=source;
  const steps=[...form.querySelectorAll('.fit-step')],prog=[...form.querySelectorAll('.fit-progress li')],progList=form.querySelector('.fit-progress');
  const back=form.querySelector('[data-back]'),next=form.querySelector('[data-next]'),submit=form.querySelector('[data-submit]');
  const status=$('fit-status'),terms=[...steps[1].querySelectorAll('[required]')];
  let cur=0,sending=false;
  const show=(i,focus)=>{
    cur=i;steps.forEach((s,j)=>{s.hidden=j!==i;s.classList.toggle('is-entering',j===i&&!reduce);});
    prog.forEach((p,j)=>{p.classList.toggle('is-current',j===i);p.classList.toggle('is-done',j<i);});
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
  roleSync();show(0,false);form.classList.add('is-ready');
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
