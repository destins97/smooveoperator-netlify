import {button,pageHero,ctaBand,path,rulesPanel,calculator,ledger,fitCheck,seal,download,arrow} from './components.mjs';

const home = () => `
<section class="hero">
  <canvas class="rosette" id="rosette" aria-hidden="true"></canvas>
  <div class="wrap hero-inner">
    <h1>Wholesale, handled <span class="script foil-text">smoove.</span></h1>
    <p class="lede"><strong>SmooveOperator is an independent wholesale reseller.</strong> We buy established brands from authorized sources and sell them through online marketplaces, with independent prep and fulfillment partners doing the physical work. Careful buying, written rules, and supplier relationships worth keeping.</p>
    <div class="btn-row">${button('Open a supplier conversation','/contact/')}${button('Read the buy rules','#rules','line')}</div>
    <p class="seal">${seal}<span>California seller’s permit on file</span></p>
  </div>
</section>

<section class="band" id="path" aria-labelledby="path-title">
  <div class="wrap">
    <h2 class="band-title" id="path-title">How a product moves, and who handles each step</h2>
    ${path()}
    <p class="band-note">SmooveOperator makes the sourcing and purchasing decisions. Independent providers handle the physical preparation and fulfillment. We don’t operate a warehouse.</p>
  </div>
</section>

<section class="section" id="rules" aria-labelledby="rules-title">
  <div class="wrap split">
    <div class="split-head">
      <h2 id="rules-title">Every order passes <em>the same four rules.</em></h2>
      <p class="intro">Written before the first purchase and applied to every one after it. They protect your pricing as much as our cash.</p>
    </div>
    ${rulesPanel()}
  </div>
  <div class="wrap">${calculator()}</div>
</section>

<section class="section section-tight" id="commitments" aria-labelledby="commit-title">
  <div class="wrap split">
    <div class="split-head">
      <h2 id="commit-title">What a supplier <em>can count on.</em></h2>
      <p class="intro">No guaranteed volumes and no invented scale. These are the terms we hold ourselves to from the first order.</p>
      ${button('Supplier details and FAQ','/suppliers/','text')}
    </div>
    ${ledger()}
  </div>
</section>

<section class="section section-tight" aria-labelledby="papers-title">
  <div class="wrap papers">
    <div>
      <h2 id="papers-title">Paperwork, <em>ready.</em></h2>
      <p class="intro">A one-page reseller profile you can drop straight into an account file: the business model, fulfillment path, buy rules and commitments. The seller’s permit itself is shared directly with your application.</p>
    </div>
    <div class="papers-actions">
      <a class="doc-link" href="/assets/smooveoperator-reseller-profile.pdf" download>${download}<span><strong>Reseller profile</strong><small>PDF, one page</small></span></a>
      <a class="doc-link" href="/profile/">${arrow}<span><strong>View it on the web</strong><small>Same facts, readable on any screen</small></span></a>
    </div>
  </div>
</section>
${ctaBand()}`;

const suppliers = () => `${pageHero('Good relationships, <em>built on common ground.</em>','We welcome introductions from brands, manufacturers, distributors and authorized wholesalers interested in a careful approach to marketplace commerce. Let’s understand the fit before discussing the scale.')}
<section class="section section-tight"><div class="wrap split">
  <div class="split-head"><h2>What we <em>value.</em></h2><p class="intro">Supplier relationships built on accurate product information, documented sourcing and clear expectations about where products may be sold.</p></div>
  ${ledger([
    ['Responsible purchasing','Supported by real product demand and economics that work for both sides.'],
    ['Accurate representation','Products and their condition are described truthfully.'],
    ['Channel permissions','Agreed sales channels and applicable marketplace requirements are respected.'],
    ['Organized fulfillment','Prep instructions, product identification and receiving requirements are confirmed before anything ships.'],
    ['Repeat purchasing','Pursued when performance and availability support it, never promised up front.']
  ])}
</div></section>
<section class="band"><div class="wrap">
  <h2 class="band-title">The standard at each step</h2>
  <ol class="path path-3">
    <li class="stop"><span class="stop-n" aria-hidden="true">i.</span><h3>Before a purchase</h3><p>Check product fit, source documentation, channel requirements and the full cost to fulfill.</p></li>
    <li class="stop"><span class="stop-n" aria-hidden="true">ii.</span><h3>Before fulfillment</h3><p>Confirm preparation instructions, product identification, condition expectations and receiving requirements.</p></li>
    <li class="stop"><span class="stop-n" aria-hidden="true">iii.</span><h3>Before a reorder</h3><p>Revisit demand, stock availability, pricing and economics using what the first purchase taught us.</p></li>
  </ol>
</div></section>
<section class="section section-tight"><div class="wrap split">
  <div class="split-head"><h2>A useful first <em>conversation.</em></h2><p class="intro">A brief introduction is enough. Documentation and detailed terms come next, when there’s a suitable fit.</p>${button('Start the Fit Check','/contact/')}</div>
  ${ledger([
    ['Your business','Your company, the brands or categories you supply, and your role in the supply chain.'],
    ['Your requirements','Opening order expectations, permitted sales channels, and any account application steps.'],
    ['The opportunity','Product availability, order cadence, and what a useful relationship looks like for you.']
  ])}
</div></section>
<section class="section section-tight faq"><div class="wrap narrow">
  <h2>A few practical <em>answers.</em></h2>
  <details><summary>Are you currently looking for wholesale suppliers?</summary><p>Yes. We welcome introductions as we develop our supplier network. An inquiry doesn’t imply an existing account or a purchasing commitment.</p></details>
  <details><summary>Do you operate your own warehouse?</summary><p>No. Our model uses independent preparation and fulfillment providers. We don’t represent ourselves as a warehouse or logistics operator.</p></details>
  <details><summary>Can we discuss marketplace restrictions?</summary><p>Yes. Permitted sales channels, brand requirements and documentation are part of evaluating any supplier relationship.</p></details>
  <details><summary>Do you guarantee order volumes?</summary><p>No. Purchasing depends on product fit, eligibility, demand, costs and available capital. We’d rather set realistic expectations from the start.</p></details>
  <details><summary>Can you provide a resale certificate?</summary><p>Yes. SmooveOperator holds a California seller’s permit, and we share it directly as part of your account application rather than posting it publicly.</p></details>
</div></section>
${ctaBand()}`;

const profileFacts = [
  ['Business','SmooveOperator'],
  ['Model','Wholesale resale of established brands through online marketplaces'],
  ['Sourcing','Brands, manufacturers, distributors and authorized wholesalers'],
  ['Fulfillment','Independent prep partner, then marketplace fulfillment'],
  ['Warehouse','None operated. Physical handling is done by third parties'],
  ['Resale documentation','California seller’s permit on file, provided with account applications'],
  ['Stage','Developing. Measured first purchases; repeat orders earned by sell-through'],
  ['Contact','Supplier Fit Check at smoove-operator.com/contact']
];
const profile = () => `<section class="page-hero profile-hero"><div class="wrap"><h1>Reseller <em>profile.</em></h1><p class="lede">The facts a supplier needs for an account file, on one page.</p><div class="btn-row">${button('Download the PDF','/assets/smooveoperator-reseller-profile.pdf','solid',' download')}${button('Start the Fit Check','/contact/','line')}</div></div></section>
<section class="section section-tight"><div class="wrap">
  <article class="sheet" id="profile-sheet">
    <header class="sheet-head"><span class="wordmark">Smoove Operator</span><span class="sheet-meta">Reseller profile &middot; ${new Date().toLocaleString('en-US',{month:'long',year:'numeric'})}</span></header>
    <dl class="facts">${profileFacts.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    <div class="sheet-cols">
      <section><h2>Purchasing policy</h2><ol class="mini-rules"><li><strong>Pass when the marketplace sells it.</strong> Listings where the marketplace itself sells are skipped.</li><li><strong>Sell through in 30 to 60 days.</strong> No aging stock, no fire-sale pricing.</li><li><strong>Order only our share.</strong> Estimated monthly sales divided by (sellers + 1).</li><li><strong>Start small, reorder on evidence.</strong> Reorders follow real sell-through.</li></ol></section>
      <section><h2>Commitments</h2><ul class="mini-list"><li>Agreed sales channels and brand requirements respected</li><li>Accurate listings in true condition</li><li>Sourcing records kept for every purchase</li><li>Prep and receiving requirements confirmed before shipping</li><li>Direct communication, realistic order expectations, no guaranteed volumes</li></ul></section>
    </div>
    <section class="direction"><h2>Direction</h2><div class="dir3"><div><b>Now</b><p>Establish the operation: sourcing criteria, purchasing records and a practical fulfillment path.</p></div><div><b>Next</b><p>Build repeatability through observed demand, inventory performance and reliable availability.</p></div><div><b>Long term</b><p>Deepen wholesale accounts and supplier collaboration while improving the systems behind the business.</p></div></div></section>
    <p class="sheet-foot">SmooveOperator is not affiliated with or endorsed by any marketplace or any brand it resells.</p>
  </article>
</div></section>`;

const contact = () => `${pageHero('Supplier <em>Fit Check.</em>','Three short steps, about a minute. It tells us what we need to know about your products and terms, so the first reply can be a useful one.')}
<section class="section section-tight"><div class="wrap contact-grid">
  <aside class="contact-aside">
    <h2>A conversation, <em>not a commitment.</em></h2>
    <p>For brands, manufacturers, distributors and authorized wholesalers. Submitting creates no purchase order or agreement.</p>
    <h3>What happens next</h3>
    <p>We read every Fit Check and reply by email when there’s an opportunity to explore or we need more information.</p>
    <p class="seal">${seal}<span>California seller’s permit on file</span></p>
  </aside>
  <div class="form-panel">${fitCheck()}</div>
</div></section>`;

const privacy = () => `${pageHero('Privacy <em>notice.</em>','A plain-language explanation of how this website handles information. Effective September 2026.')}
<article class="section section-tight"><div class="wrap narrow legal">
<h2>Information you provide</h2><p>The Supplier Fit Check asks for your name, company, email address, role, the brands or categories you supply, your opening order minimum, channel permissions, MAP policy, and an optional phone number and message. It also records which outreach link brought you to the site, when there is one. Please don’t include sensitive documents, government identifiers or banking information.</p>
<h2>How information is used</h2><p>Submissions are used to review and respond to business inquiries, evaluate potential supplier relationships, and keep relevant business correspondence. This website doesn’t enroll visitors in a newsletter.</p>
<h2>Hosting and form processing</h2><p>This website is hosted on Netlify, which processes form submissions on the business’s behalf and may filter them for spam. Hosting and security providers may process technical information such as IP addresses and request logs to operate and protect the site.</p>
<h2>Cookies and analytics</h2><p>The site doesn’t add advertising trackers, analytics tools or nonessential cookies. To remember which outreach link you arrived from, it keeps a short code in your browser’s session storage, which clears when you close the tab.</p>
<h2>Access and retention</h2><p>Inquiries are accessible only to the people who need them to respond or run the business, and are kept only as long as they’re useful for that purpose.</p>
<h2>Questions and requests</h2><p>Use the <a href="/contact/">Fit Check form</a> for questions about this notice or requests about information you’ve submitted. Include enough context to identify your inquiry, without sending identity documents.</p>
<h2>Changes</h2><p>This notice is updated when the site’s information practices change. The date above identifies the current version.</p></div></article>`;

const terms = () => `${pageHero('Website <em>terms.</em>','Basic terms for using the SmooveOperator website. Effective September 2026.')}
<article class="section section-tight"><div class="wrap narrow legal">
<h2>Purpose of the website</h2><p>This website gives general information about SmooveOperator’s developing ecommerce business and a way to make business inquiries. Descriptions of processes and future direction aren’t guarantees of capability, availability or results.</p>
<h2>Business inquiries</h2><p>Submitting a form doesn’t create a supplier relationship, purchase order, distribution agreement or other contract. Any commercial arrangement requires separate discussion and agreement.</p>
<h2>Appropriate use</h2><p>Use this website lawfully. Don’t submit fraudulent information, harmful code, spam, or material you aren’t authorized to share, and don’t try to interfere with the site or access information not intended for you.</p>
<h2>Names and third-party services</h2><p>Third-party brand and marketplace names, where referenced, belong to their owners. Mentioning them doesn’t imply affiliation, endorsement, exclusive rights or authorized distributor status.</p>
<h2>Calculator and examples</h2><p>The order-sizing calculator uses sample numbers to show a method. It isn’t a quote, forecast or commitment to purchase.</p>
<h2>Accuracy and availability</h2><p>Website information may change as the business develops. Confirm availability, operating arrangements and commercial terms directly before relying on them for a business decision.</p>
<h2>Questions</h2><p>Use the <a href="/contact/">Fit Check form</a> for questions about this website or a potential business relationship.</p></div></article>`;

export const pages = [
  {path:'/',title:'SmooveOperator | Independent wholesale reseller',description:'SmooveOperator buys established brands from authorized sources and sells them through online marketplaces, with written buy rules that protect supplier pricing.',body:home},
  {path:'/suppliers/',title:'For Suppliers and Brands | SmooveOperator',description:'What brands, distributors and authorized wholesalers can expect from SmooveOperator: channel rules respected, accurate listings, documented sourcing.',body:suppliers},
  {path:'/profile/',title:'Reseller Profile | SmooveOperator',description:'One-page reseller profile for supplier account files: business model, fulfillment path, purchasing policy and commitments.',body:profile},
  {path:'/contact/',title:'Supplier Fit Check | SmooveOperator',description:'Introduce your brand or distribution business to SmooveOperator in about a minute with the Supplier Fit Check.',body:contact},
  {path:'/privacy/',title:'Privacy Notice | SmooveOperator',description:'How information submitted through the SmooveOperator Supplier Fit Check is used.',body:privacy},
  {path:'/terms/',title:'Website Terms | SmooveOperator',description:'Terms for using the SmooveOperator informational business website.',body:terms},
  {path:'/thank-you/',title:'Fit Check Received | SmooveOperator',description:'Your Supplier Fit Check has been received.',noindex:true,body:()=>`${pageHero('Received, <em>thank you.</em>','Your Fit Check reached SmooveOperator. We’ll reply by email if there’s an opportunity to explore or we need more information.')}<div class="wrap btn-row utility">${button('Back to home','/')}${button('Reseller profile','/profile/','line')}</div>`},
  {path:'/404/',title:'Page Not Found | SmooveOperator',description:'Find your way back to SmooveOperator.',noindex:true,body:()=>`${pageHero('A different <em>direction.</em>','This page may have moved, or the address may be incorrect.')}<div class="wrap btn-row utility">${button('Back to home','/')}${button('Supplier Fit Check','/contact/','line')}</div>`}
];
