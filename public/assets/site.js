const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
if (menu && navigation) {
  const media = matchMedia('(max-width: 900px)');
  const closeMenu = () => {navigation.classList.remove('is-open');menu.setAttribute('aria-expanded','false');};
  const syncMenu = () => {menu.hidden=!media.matches;navigation.classList.toggle('enhanced',media.matches);closeMenu();};
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('is-open',open);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
  navigation.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
  media.addEventListener('change',syncMenu); syncMenu();
}
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}},{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
const form=document.querySelector('#contact-form');
if(form){
  const type=new URLSearchParams(location.search).get('type');
  if(['supplier','brand','business','general'].includes(type))form.elements.inquiry.value=type;
  let sending=false;
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(sending||!form.reportValidity())return;
    const status=document.querySelector('#form-status');
    const submit=form.querySelector('[type="submit"]');
    sending=true;submit.disabled=true;submit.textContent='Sending inquiry…';status.textContent='';
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),15000);
    try{
      const response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString(),signal:controller.signal});
      if(!response.ok)throw new Error('Submission failed');
      status.dataset.state='success';status.textContent='Your inquiry has been submitted. Thank you for getting in touch.';form.reset();status.focus();
    }catch(error){
      status.dataset.state='error';status.textContent=error.name==='AbortError'?'We couldn’t confirm delivery in time. Your message is still here; please try again later.':'Your inquiry could not be sent. Your message is still here; please try again later.';status.focus();
    }finally{clearTimeout(timeout);sending=false;submit.disabled=false;submit.innerHTML='Send inquiry <span aria-hidden="true">↗</span>';}
  });
}
