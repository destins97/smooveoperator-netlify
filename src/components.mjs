export const escape = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');

/* Drawn icons: one stroke weight, no unicode glyphs */
export const arrow = '<svg class="i-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 10h11M11 5.5 15.5 10 11 14.5"/></svg>';
export const download = '<svg class="i-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M10 3.5v10M5.5 9.5 10 14l4.5-4.5M4 16.5h12"/></svg>';
export const seal = '<svg class="seal-mark" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="20" cy="20" r="18"/><circle cx="20" cy="20" r="13.5" stroke-dasharray="1.5 2"/><path d="M13.5 20.5l4.2 4.2 8.8-9.2"/></svg>';

export const button = (label, href, variant='solid', extra='') => `<a class="btn btn-${variant}" href="${href}"${extra}>${label}${arrow}</a>`;

export const links = [['How it moves','/#path'],['Buy rules','/#rules'],['Suppliers','/suppliers/'],['Reseller profile','/profile/']];

export function header(path) {
  return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="wrap bar"><a class="wordmark" href="/" aria-label="Smoove Operator, home">Smoove Operator</a><button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false" hidden><span class="menu-lines" aria-hidden="true"></span><span class="menu-label">Menu</span></button><nav id="site-nav" aria-label="Main">${links.map(([l,h])=>`<a href="${h}"${path===h?' aria-current="page"':''}>${l}</a>`).join('')}<a class="nav-cta" href="/contact/"${path==='/contact/'?' aria-current="page"':''}>Work with us</a></nav></div></header>`;
}

export function footer() {
  return `<footer class="site-footer"><div class="wrap footer-grid"><div><a class="wordmark" href="/">Smoove Operator</a><p>Independent wholesale resale for online marketplaces.</p></div><nav aria-label="Footer"><a href="/suppliers/">Supplier relationships</a><a href="/profile/">Reseller profile</a><a href="/contact/">Supplier Fit Check</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav><p class="fine">&copy; ${new Date().getFullYear()} SmooveOperator. Not affiliated with or endorsed by any marketplace or any brand it resells. Brand and marketplace names belong to their owners.</p></div></footer>`;
}

export const steps = [
  ['i.','Source','Established products from brands, distributors and authorized wholesalers, checked for fit and documentation before any purchase.','SmooveOperator'],
  ['ii.','Prepare','An independent prep partner inspects, labels and packs units to the receiving requirements.','Third-party prep'],
  ['iii.','Fulfill','Marketplace fulfillment stores the inventory and delivers each order.','Marketplace network'],
  ['iv.','Reach','An accurately listed product arrives with the customer as described.','The customer']
];
export const path = () => `<ol class="path">${steps.map(([n,t,d,by])=>`<li class="stop"><span class="stop-n" aria-hidden="true">${n}</span><h3>${t}</h3><p>${d}</p><span class="stop-by">${by}</span></li>`).join('')}</ol>`;

export const rules = [
  ['Pass when the marketplace sells it','If the marketplace itself is a seller on the listing, the product is skipped. We don’t pile onto listings we can’t sell on without undercutting.',''],
  ['Sell through in 30 to 60 days','Orders are sized to clear in one to two months. No aging stock, so no pressure to dump your product below its price.',''],
  ['Order only our share','A realistic slice of monthly demand, split across everyone already selling the product.','est. monthly sales / (sellers + 1)'],
  ['Start small, reorder on evidence','A first purchase is a test. Reorders are earned by real sell-through, pricing and available cash.','']
];
export const rulesPanel = () => `<div class="cert"><ol class="clauses">${rules.map(([t,d,code],i)=>`<li class="clause"><span class="clause-n">Rule ${i+1}</span><div><h3>${t}</h3><p>${d}</p>${code?`<code>${code}</code>`:''}</div></li>`).join('')}</ol></div>`;

export const calculator = () => `<div class="slice" id="my-slice"><div class="slice-head"><h3>Try the “my slice” math</h3><p>Move the sliders to see how a first order would be sized for a product like yours. Sample numbers only; nothing here describes a real listing.</p></div><div class="slice-body"><div class="slice-inputs"><label for="slice-sales">Estimated sales per month, all sellers<output id="slice-sales-out" for="slice-sales">300</output></label><input type="range" id="slice-sales" min="30" max="3000" step="10" value="300"><label for="slice-sellers">Sellers already on the listing<output id="slice-sellers-out" for="slice-sellers">5</output></label><input type="range" id="slice-sellers" min="1" max="30" step="1" value="5"></div><div class="slice-result" aria-live="polite"><p class="slice-k">Our slice</p><p class="slice-v"><span id="slice-per">50</span> <small>units a month</small></p><p class="slice-k">First order, 30 to 60 days of stock</p><p class="slice-v foil-text"><span id="slice-low">50</span> to <span id="slice-high">100</span> <small>units</small></p></div></div><noscript><p class="slice-note">With JavaScript off, the formula is the same: estimated monthly sales divided by (sellers + 1), then one to two months of that.</p></noscript></div>`;

export const commitments = [
  ['Your channel rules','Permitted sales channels and brand requirements are part of the first conversation, and then they are followed.'],
  ['Accurate listings','Products are represented truthfully, in their real condition, on the correct existing listing.'],
  ['Records on file','Sourcing records are kept for every purchase. A California seller’s permit is on file and shared with your account application.'],
  ['A direct line','One point of contact who answers. Clear expectations about order size from the start, and no guaranteed volumes.']
];
export const ledger = (items=commitments) => `<ul class="ledger">${items.map(([t,d])=>`<li><h3>${t}</h3><p>${d}</p></li>`).join('')}</ul>`;

export const pageHero = (title, lede) => `<section class="page-hero"><div class="wrap"><h1>${title}</h1><p class="lede">${lede}</p></div></section>`;

export const ctaBand = () => `<section class="cta-band"><div class="wrap cta-grid"><h2>Let’s see if <em>we’re a fit.</em></h2><div><p>Brands, manufacturers, distributors and authorized wholesalers: the Fit Check takes about a minute and tells us what we need to know about your terms.</p><div class="btn-row">${button('Start the Fit Check','/contact/')}${button('Reseller profile','/profile/','line')}</div></div></div></section>`;

const radio = (name, legend, options, req=true) => `<fieldset class="field-set"><legend>${legend}${req?'':' <span class="opt">(optional)</span>'}</legend><div class="choices">${options.map(([v,l],i)=>`<label class="choice"><input type="radio" name="${name}" value="${v}"${req&&i===0?' required':''}><span>${l}</span></label>`).join('')}</div></fieldset>`;

export function fitCheck() {
  return `<form name="supplier-fit-check" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field" id="fit-check" class="fit" novalidate>
<input type="hidden" name="form-name" value="supplier-fit-check">
<input type="hidden" name="subject" value="Supplier Fit Check from smoove-operator.com (%{submissionId})">
<input type="hidden" name="source" id="fit-source" value="direct">
<p class="hp" aria-hidden="true"><label>Leave this empty <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
<ol class="fit-progress" aria-hidden="true"><li class="is-current">You</li><li>Your terms</li><li>Anything else</li></ol>
<fieldset class="fit-step" data-step="1"><legend class="step-title">Who you are</legend>
<div class="row2"><div class="field"><label for="fc-name">Your name</label><input id="fc-name" name="name" autocomplete="name" required maxlength="120"></div><div class="field"><label for="fc-company">Company</label><input id="fc-company" name="company" autocomplete="organization" required maxlength="160"></div></div>
<div class="row2"><div class="field"><label for="fc-email">Work email</label><input id="fc-email" name="email" type="email" autocomplete="email" required maxlength="254"></div><div class="field"><label for="fc-phone">Phone <span class="opt">(optional)</span></label><input id="fc-phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div></div>
${radio('role','Your role in the supply chain',[['brand','Brand or manufacturer'],['distributor','Distributor'],['wholesaler','Authorized wholesaler'],['other','Something else']])}
</fieldset>
<fieldset class="fit-step" data-step="2"><legend class="step-title">Your terms</legend>
<div class="field"><label for="fc-brands">Brands or categories you supply</label><input id="fc-brands" name="brands" required maxlength="300" aria-describedby="fc-brands-help"><p class="help" id="fc-brands-help">A short list is fine, for example “kitchen tools, 3 brands”.</p></div>
<div class="field"><label for="fc-moq">Opening order minimum</label><select id="fc-moq" name="opening_minimum" required><option value="">Choose one</option><option>No minimum</option><option>Under $500</option><option>$500 to $2,500</option><option>Over $2,500</option><option>Depends on the brand</option></select></div>
${radio('channels','Can your products be sold on online marketplaces?',[['permitted','Yes, permitted'],['some-restricted','Some brands are restricted'],['discuss','Let’s discuss']])}
${radio('map_policy','Do you have a minimum advertised price (MAP) policy?',[['yes','Yes'],['no','No'],['varies','Varies by brand']])}
</fieldset>
<fieldset class="fit-step" data-step="3"><legend class="step-title">Anything else</legend>
<div class="field"><label for="fc-message">Account application steps, documents you need, or questions <span class="opt">(optional)</span></label><textarea id="fc-message" name="message" rows="5" maxlength="5000"></textarea></div>
<p class="help">Please don’t send tax IDs, banking details or identity documents here. We’ll exchange documents directly once there’s a fit. Read the <a href="/privacy/">privacy notice</a>.</p>
</fieldset>
<div class="fit-nav"><button type="button" class="btn btn-line" data-back hidden>Back</button><button type="button" class="btn btn-solid" data-next hidden>Next ${arrow}</button><button type="submit" class="btn btn-solid" data-submit>Send the Fit Check ${arrow}</button></div>
<p id="fit-status" class="fit-status" role="status" aria-live="polite" tabindex="-1"></p>
</form>`;
}
