export const escape = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');

/* Drawn icons: one stroke weight, no unicode glyphs */
export const arrow = '<svg class="i-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 10h11M11 5.5 15.5 10 11 14.5"/></svg>';
export const download = '<svg class="i-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M10 3.5v10M5.5 9.5 10 14l4.5-4.5M4 16.5h12"/></svg>';
export const seal = '<svg class="seal-mark" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="20" cy="20" r="18"/><circle cx="20" cy="20" r="13.5" stroke-dasharray="1.5 2"/><path d="M13.5 20.5l4.2 4.2 8.8-9.2"/></svg>';

export const button = (label, href, variant='solid', extra='') => `<a class="btn btn-${variant}" href="${href}"${extra}>${label}${arrow}</a>`;

export const links = [['How it moves','/#path'],['Buy rules','/#rules'],['Suppliers','/suppliers/'],['Reseller profile','/profile/']];

export function header(path) {
  return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="wrap bar"><a class="wordmark" href="/" aria-label="Smoove Operator, home">Smoove Operator</a><button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false"><span class="menu-lines" aria-hidden="true"></span><span class="menu-label">Menu</span></button><nav id="site-nav" aria-label="Main">${links.map(([l,h])=>`<a href="${h}"${path===h?' aria-current="page"':''}>${l}</a>`).join('')}<a class="nav-cta" href="/contact/"${path==='/contact/'?' aria-current="page"':''}>Start the Fit Check</a></nav></div></header>`;
}

export function footer() {
  return `<footer class="site-footer"><div class="wrap footer-grid"><div><a class="wordmark" href="/">Smoove Operator</a><p>Independent wholesale resale for online marketplaces.</p></div><nav aria-label="Footer"><a href="/suppliers/">Supplier relationships</a><a href="/profile/">Reseller profile</a><a href="/contact/">Start the Fit Check</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav><p class="fine">&copy; ${new Date().getFullYear()} SmooveOperator. Not affiliated with or endorsed by any marketplace or any brand it resells. Brand and marketplace names belong to their owners.</p></div></footer>`;
}

export const steps = [
  ['i.','Source','Established products from brands, distributors and authorized wholesalers, checked for fit and documentation before any purchase.','SmooveOperator'],
  ['ii.','Prepare','An independent prep partner inspects, labels and packs units to the receiving requirements.','Third-party prep'],
  ['iii.','Fulfill','Marketplace fulfillment stores the inventory and delivers each order.','Marketplace network'],
  ['iv.','Reach','An accurately listed product arrives with the customer as described.','The customer']
];
export const path = () => `<ol class="path">${steps.map(([n,t,d,by],i)=>`<li class="stop${i===0?' is-ours':''}"><span class="stop-n" aria-hidden="true">${n}</span><h3>${t}</h3><p class="stop-by">Handled by <b>${by}</b></p><p>${d}</p></li>`).join('')}</ol>`;

export const rules = [
  ['Pass when the marketplace sells it','If the marketplace itself is a seller on the listing, the product is skipped. We don’t pile onto listings we can’t sell on without undercutting.',''],
  ['Sell through in 30 to 60 days','Orders are sized to clear in one to two months. No aging stock, so no pressure to dump your product below its price.',''],
  ['Order only our share','A realistic slice of monthly demand, split across everyone already selling the product.','est. monthly sales / (sellers + 1)'],
  ['Start small, reorder on evidence','A first purchase is a test. Reorders are earned by real sell-through, pricing and available cash.','']
];
/* The instrument: the four rules printed as one engraved note. With JavaScript, a sample listing runs through them live. */
const verdicts = [
  '<span data-v="skip">Marketplace isn’t selling. Continue.</span>',
  'First order: <b id="v-low">50</b> to <b id="v-high">100</b> units',
  '<span class="calc"><span id="v-sales">300</span> / (<span id="v-sellers">5</span> + 1) = <b id="v-per">50</b></span> units a month',
  'Reorder only after these sell through.'
];
const edges = ['t','r','b','l'].map(e=>`<span class="edge edge-${e}"><i></i></span>`).join('');
const corners = ['tl','tr','br','bl'].map(c=>`<span class="corner corner-${c}"></span>`).join('');
const range = (id,label,min,max,step,value) => `<div class="dial"><label for="${id}">${label}<output id="${id}-out" for="${id}">${value}</output></label><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}"></div>`;
export const instrument = (seal) => `<div class="note" id="note"><div class="note-frame" aria-hidden="true">${edges}${corners}</div><p class="micro" aria-hidden="true"></p>
<div class="note-body"><ol class="clauses">${rules.map(([t,d,code],i)=>`<li class="clause" data-rule="${i+1}"><span class="clause-n">Rule ${['i','ii','iii','iv'][i]}.</span><div><h3>${t}</h3><p>${d}</p>${code?`<code>${code}</code>`:''}<p class="verdict" id="verdict-${i+1}">${verdicts[i]}</p>${i===0?'<span class="stamp" aria-hidden="true">Skipped</span>':''}</div></li>`).join('')}</ol>
<div class="sample"><h3>Run a sample listing</h3><p class="sample-note">Sample numbers only. Nothing here describes a real listing.</p>
<label class="switch"><input type="checkbox" id="rules-skip" role="switch"><span class="switch-track" aria-hidden="true"></span><span>The marketplace itself sells this listing</span></label>
${range('slice-sales','Estimated sales per month, all sellers',30,3000,10,300)}${range('slice-sellers','Sellers already on the listing',1,30,1,5)}</div></div>
<div class="note-foot">${seal}<p class="note-result"><span id="note-result-text"><span class="res-go">A first order of <b id="r-low">50</b> to <b id="r-high">100</b> units</span><span class="res-skip">No order. The listing is skipped.</span></span></p><p class="note-static">Estimated monthly sales divided by (sellers + 1), then one to two months of that.</p></div>
<p class="micro micro-b" aria-hidden="true"></p><p class="visually-hidden" id="note-live" aria-live="polite"></p></div>`;

export const commitments = [
  ['Your channel rules','Permitted sales channels and brand requirements are part of the first conversation, and then they are followed.'],
  ['Accurate listings','Products are represented truthfully, in their real condition, on the correct existing listing.'],
  ['Records on file','Sourcing records are kept for every purchase. A California seller’s permit is on file and shared with your account application.'],
  ['A direct line','One point of contact who answers. Clear expectations about order size from the start, and no guaranteed volumes.']
];
export const ledger = (items=commitments) => `<ul class="ledger">${items.map(([t,d])=>`<li><h3>${t}</h3><p>${d}</p></li>`).join('')}</ul>`;
/* Perforated sheet: items separated like stamps on a sheet, not boxed as cards */
export const perfGrid = (items, cols=2) => `<ul class="perf perf-${cols}">${items.map(([t,d])=>`<li><h3>${t}</h3><p>${d}</p></li>`).join('')}</ul>`;

export const pageHero = (title, lede, actions='') => `<section class="page-hero"><canvas class="rosette rosette-still" aria-hidden="true"></canvas><div class="wrap"><h1>${title}</h1><p class="lede">${lede}</p>${actions?`<div class="btn-row">${actions}</div>`:''}</div></section>`;

export const ctaBand = () => `<section class="cta-band"><div class="wrap cta-grid"><h2>Let’s see if <em>we’re a fit.</em></h2><div><p>Brands, manufacturers, distributors and authorized wholesalers: the Fit Check takes about a minute and tells us what we need to know about your terms.</p>${button('Start the Fit Check','/contact/')}</div></div></section>`;

const radio = (name, legend, options, need) => `<fieldset class="field-set" data-need="${need}"><legend>${legend}</legend><div class="choices">${options.map(([v,l],i)=>`<label class="choice"><input type="radio" name="${name}" value="${v}"${i===0?' required':''}><span>${l}</span></label>`).join('')}</div></fieldset>`;

export function fitCheck() {
  return `<form name="supplier-fit-check" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field" id="fit-check" class="fit" novalidate>
<input type="hidden" name="form-name" value="supplier-fit-check">
<input type="hidden" name="subject" value="Supplier Fit Check from smoove-operator.com (%{submissionId})">
<input type="hidden" name="source" id="fit-source" value="direct">
<p class="hp" aria-hidden="true"><label>Leave this empty <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
<ol class="fit-progress" aria-hidden="true"><li class="is-current">You</li><li>Your terms</li><li>Anything else</li></ol>
<fieldset class="fit-step" data-step="1"><legend class="step-title">Who you are</legend>
<div class="row2"><div class="field"><label for="fc-name">Your name</label><input id="fc-name" name="name" autocomplete="name" required maxlength="120" data-need="Enter your name."></div><div class="field"><label for="fc-company">Company</label><input id="fc-company" name="company" autocomplete="organization" required maxlength="160" data-need="Enter your company name."></div></div>
<div class="row2"><div class="field"><label for="fc-email">Work email</label><input id="fc-email" name="email" type="email" autocomplete="email" required maxlength="254" data-need="Enter your work email."></div><div class="field"><label for="fc-phone">Phone <span class="opt">(optional)</span></label><input id="fc-phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div></div>
${radio('role','Your role in the supply chain',[['brand','Brand or manufacturer'],['distributor','Distributor'],['wholesaler','Authorized wholesaler'],['other','Something else']],'Choose your role in the supply chain.')}
</fieldset>
<fieldset class="fit-step" data-step="2"><legend class="step-title">Your terms</legend>
<p class="help if-other">Optional when your role is “Something else”. Skip ahead with Next.</p>
<div class="field"><label for="fc-brands">Brands or categories you supply</label><input id="fc-brands" name="brands" required maxlength="300" aria-describedby="fc-brands-help" data-need="List the brands or categories you supply."><p class="help" id="fc-brands-help">A short list is fine, for example “kitchen tools, 3 brands”.</p></div>
<div class="field"><label for="fc-moq">Opening order minimum</label><select id="fc-moq" name="opening_minimum" required data-need="Choose an opening order minimum."><option value="">Choose one</option><option>No minimum</option><option>Under $500</option><option>$500 to $2,500</option><option>Over $2,500</option><option>Depends on the brand</option></select></div>
${radio('channels','Can your products be sold on online marketplaces?',[['permitted','Yes, permitted'],['some-restricted','Some brands are restricted'],['discuss','Let’s discuss']],'Choose whether marketplace sales are permitted.')}
${radio('map_policy','Do you have a minimum advertised price (MAP) policy?',[['yes','Yes'],['no','No'],['varies','Varies by brand']],'Choose an answer about MAP policy.')}
</fieldset>
<fieldset class="fit-step" data-step="3"><legend class="step-title">Anything else</legend>
<div class="field"><label for="fc-message">Account application steps, documents you need, or questions <span class="opt">(optional)</span></label><textarea id="fc-message" name="message" rows="5" maxlength="5000"></textarea></div>
<p class="help">Please don’t send tax IDs, banking details or identity documents here. We’ll exchange documents directly once there’s a fit. Read the <a href="/privacy/">privacy notice</a>.</p>
</fieldset>
<div class="fit-nav"><button type="button" class="btn btn-line" data-back hidden>Back</button><button type="button" class="btn btn-solid" data-next>Next ${arrow}</button><button type="submit" class="btn btn-solid" data-submit>Send the Fit Check ${arrow}</button></div>
<p class="fit-assure">Submitting creates no purchase order or agreement.</p>
<p id="fit-status" class="fit-status" role="status" aria-live="polite" tabindex="-1"></p>
</form>`;
}
