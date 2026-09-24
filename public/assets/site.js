(()=>{
const root=document.documentElement;root.classList.add('js');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* outreach source: ?ref= / ?src= / ?utm_campaign= kept for this tab */
let source='direct';
try{
  const q=new URLSearchParams(location.search);
  const hit=q.get('ref')||q.get('src')||q.get('utm_campaign');
  if(hit){source=hit.replace(/[^\w.-]/g,'').slice(0,64)||'direct';sessionStorage.setItem('so-source',source);}
  else source=sessionStorage.getItem('so-source')||'direct';
}catch{}

/* mobile menu */
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
if(menu&&nav){
  const mq=matchMedia('(max-width: 920px)');
  const close=()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');};
  const sync=()=>{menu.hidden=!mq.matches;nav.classList.toggle('enhanced',mq.matches);close();};
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){close();menu.focus();}});
  nav.addEventListener('click',e=>{if(e.target.closest('a'))close();});
  mq.addEventListener('change',sync);sync();
}

/* guilloche rosette: layered hypotrochoid bands that turn slowly and lean toward the pointer */
const c=document.getElementById('rosette');
if(c&&c.getContext){
  const x=c.getContext('2d');let W=0,H=0,d=1,t=0,tx=0,mx=0,run=false,raf=0;
  const gcd=(a,b)=>b?gcd(b,a%b):a;let N=innerWidth<760?600:1200,skip=innerWidth<760,odd=false;
  const bands=[[300,40,120,.02,'#D9B24C',.34,.6,1],[250,70,90,.03,'#8A6B22',.5,.5,-1.3],[180,30,70,.025,'#F6DE8D',.2,.45,.7],[120,20,40,.04,'#D9B24C',.28,.5,-1]];
  const size=()=>{const r=c.getBoundingClientRect();d=Math.min(1.5,devicePixelRatio||1);W=c.width=Math.round(r.width*d);H=c.height=Math.round(r.height*d);};
  const draw=()=>{
    mx+=(tx-mx)*.05;x.clearRect(0,0,W,H);const s=W/d/900;
    for(const [R,r,p,amp,col,a,lw,dir] of bands){
      const RR=R*s,rr=r*s,pp=p*s,k=(RR-rr)/rr,turns=Math.PI*2*r/gcd(R,r),ph=t*dir,am=amp+mx*.03*dir;
      x.beginPath();x.strokeStyle=col;x.globalAlpha=a;x.lineWidth=lw*d;
      for(let i=0;i<=N;i++){const th=i/N*turns,w=1+am*Math.sin(th*7+ph);
        const X=((RR-rr)*Math.cos(th)+pp*Math.cos(k*th))*w,Y=((RR-rr)*Math.sin(th)-pp*Math.sin(k*th))*w;
        i?x.lineTo(W/2+X*d,H/2+Y*d):x.moveTo(W/2+X*d,H/2+Y*d);}
      x.stroke();
    }
  };
  const loop=()=>{odd=!odd;if(!skip||odd){t+=skip?.008:.004;draw();}if(run)raf=requestAnimationFrame(loop);};
  const start=()=>{if(run||reduce)return;run=true;raf=requestAnimationFrame(loop);};
  const stop=()=>{run=false;cancelAnimationFrame(raf);};
  size();draw();
  addEventListener('resize',()=>{size();draw();});
  addEventListener('pointermove',e=>{tx=e.clientX/innerWidth-.5;},{passive:true});
  if('IntersectionObserver' in window)new IntersectionObserver(es=>{es[0].isIntersecting&&!document.hidden?start():stop();}).observe(c);else start();
  document.addEventListener('visibilitychange',()=>{document.hidden?stop():start();});
}

/* my slice calculator */
const sales=document.getElementById('slice-sales'),sellers=document.getElementById('slice-sellers');
if(sales&&sellers){
  const fmt=n=>Math.round(n).toLocaleString('en-US');
  const paint=el=>el.style.setProperty('--p',((el.value-el.min)/(el.max-el.min)*100)+'%');
  const upd=()=>{
    const s=+sales.value,n=+sellers.value,per=s/(n+1);
    document.getElementById('slice-sales-out').textContent=fmt(s);
    document.getElementById('slice-sellers-out').textContent=n;
    document.getElementById('slice-per').textContent=fmt(per);
    document.getElementById('slice-low').textContent=fmt(per);
    document.getElementById('slice-high').textContent=fmt(per*2);
    paint(sales);paint(sellers);
  };
  sales.addEventListener('input',upd);sellers.addEventListener('input',upd);upd();
}

/* supplier fit check: three steps when JS runs, one long form when it doesn't */
const form=document.getElementById('fit-check');
if(form){
  const src=document.getElementById('fit-source');if(src)src.value=source;
  const steps=[...form.querySelectorAll('.fit-step')],prog=[...form.querySelectorAll('.fit-progress li')];
  const back=form.querySelector('[data-back]'),next=form.querySelector('[data-next]'),submit=form.querySelector('[data-submit]');
  const status=document.getElementById('fit-status');
  let cur=0,sending=false;
  const show=(i,focus)=>{
    cur=i;steps.forEach((s,j)=>{s.hidden=j!==i;s.classList.toggle('is-entering',j===i&&!reduce);});
    prog.forEach((p,j)=>{p.classList.toggle('is-current',j===i);p.classList.toggle('is-done',j<i);});
    back.hidden=i===0;next.hidden=i===steps.length-1;submit.hidden=i!==steps.length-1;
    if(focus){const f=steps[i].querySelector('input:not([type=hidden]),select,textarea');f&&f.focus({preventScroll:true});steps[i].scrollIntoView({block:'nearest',behavior:reduce?'auto':'smooth'});}
  };
  const clearErr=el=>{el.removeAttribute('aria-invalid');const m=el.closest('.field,.field-set')?.querySelector('.err-msg');m&&m.remove();el.closest('.field-set')?.classList.remove('fit-set-invalid');};
  const msgFor=el=>el.validity.valueMissing?(el.type==='radio'?'Choose one option.':'This one is needed.'):el.validity.typeMismatch?'Enter a valid email address, like name@company.com.':'Check this field.';
  const validate=step=>{
    let first=null;const seen=new Set();
    step.querySelectorAll('input,select,textarea').forEach(el=>{
      if(el.type==='hidden'||seen.has(el.name))return;seen.add(el.name);
      const ok=el.type==='radio'?!!step.querySelector(`input[name="${el.name}"]:checked`)||!el.required&&!step.querySelector(`input[name="${el.name}"][required]`):el.checkValidity();
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
  form.addEventListener('input',e=>clearErr(e.target));form.addEventListener('change',e=>clearErr(e.target));
  next.addEventListener('click',()=>{if(validate(steps[cur]))show(cur+1,true);});
  back.addEventListener('click',()=>show(cur-1,true));
  show(0,false);
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
      done.innerHTML='<svg class="seal-mark" viewBox="0 0 40 40" fill="none" stroke="#D9B24C" stroke-width="1.2" aria-hidden="true"><circle cx="20" cy="20" r="18"/><circle cx="20" cy="20" r="13.5" stroke-dasharray="1.5 2"/><path d="M13.5 20.5l4.2 4.2 8.8-9.2"/></svg><h3>Received, thank you.</h3><p>Your Fit Check reached SmooveOperator. We’ll reply by email if there’s an opportunity to explore or we need more information.</p>';
      form.prepend(done);status.dataset.state='success';status.textContent='Fit Check sent.';done.setAttribute('tabindex','-1');done.focus();
    }catch(err){
      status.dataset.state='error';
      status.textContent=err.name==='AbortError'?'We couldn’t confirm delivery in time. Your answers are still here, so please try again in a moment.':'Your Fit Check could not be sent. Your answers are still here, so please try again in a moment.';
      status.focus();
    }finally{clearTimeout(timer);sending=false;submit.disabled=false;submit.firstChild.textContent='Send the Fit Check ';}
  });
}
})();
