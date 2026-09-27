import {arrow,button} from './components.mjs';

export const stages = [
  ['Source','Brands & suppliers','Established products, accurate product information and a documented source.'],
  ['Evaluate','SmooveOperator','We assess marketplace eligibility, channel permissions, demand and the full cost of an order.'],
  ['Prepare','Independent providers','Third-party preparation providers handle inspection, labeling and packing to receiving requirements.'],
  ['Fulfill','Marketplace networks','Fulfillment networks store prepared inventory and handle customer orders.'],
  ['Customer','The final destination','The product reaches the customer through the marketplace’s order and delivery process.']
];

export function commerceMap(id='commerce') {
return `<div class="commerce-map" data-commerce><div class="map-heading"><span>From source to customer</span><span class="map-caption">Our operating model</span></div><ol class="map-stages">${stages.map(([t,by,d],i)=>`<li><details${i===1?' open':''}><summary><span class="stage-number">0${i+1}</span><span class="stage-name">${t}</span><span class="stage-owner">${by}</span><span class="stage-symbol" aria-hidden="true">+</span></summary><p>${d}</p></details></li>`).join('')}</ol><p class="map-note">Commercial decisions stay with SmooveOperator. Physical preparation and fulfillment are handled by independent providers.</p></div>`;
}

export const principleRows = () => `<dl class="principle-rows"><div><dt>Know the source.</dt><dd>Evaluate suppliers and retain organized purchasing records and product documentation.</dd></div><div><dt>Respect the channel.</dt><dd>Clarify permitted marketplaces and agreed brand requirements before purchasing.</dd></div><div><dt>Represent accurately.</dt><dd>Check product identity, pack size and condition against the intended marketplace listing.</dd></div><div><dt>Reorder with reason.</dt><dd>Use observed demand, available inventory and order economics to guide repeat purchasing.</dd></div></dl>`;

export const invitation = () => `<section class="invitation"><div class="wrap invitation-grid"><h2>The next stop?<br><span>A conversation.</span></h2><div><p>Brands, manufacturers, wholesalers and authorized distributors: let’s discuss your products, your requirements and the potential fit.</p>${button('Start the supplier Fit Check','/contact/')}</div></div></section>`;

export const inquiryForm = () => `<form name="supplier-fit-check" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field" id="supplier-inquiry" class="inquiry-form">
<input type="hidden" name="form-name" value="supplier-fit-check"><input type="hidden" name="subject" value="Supplier inquiry from smoove-operator.com (%{submissionId})"><input type="hidden" name="source" id="inquiry-source" value="direct">
<p class="hp" aria-hidden="true"><label>Leave this empty <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
<div class="fit-heading"><span class="flap-index" aria-hidden="true">↗</span><div><p class="eyebrow">Supplier Fit Check</p><h2>Introduce your business.</h2></div></div><p class="form-intro">A brief introduction is enough. Fields marked * are required.</p>
<div class="field"><label for="fc-inquiry">Inquiry type *</label><select id="fc-inquiry" name="inquiry" required><option value="supplier">Supplier or wholesale relationship</option><option value="preparation">Preparation or fulfillment provider</option><option value="general">General business inquiry</option><option value="privacy">Privacy or website question</option></select></div>
<div class="row2"><div class="field"><label for="fc-name">Your name *</label><input id="fc-name" name="name" autocomplete="name" required maxlength="120"></div><div class="field"><label for="fc-company">Company <span>(optional)</span></label><input id="fc-company" name="company" autocomplete="organization" maxlength="160"></div></div>
<div class="row2"><div class="field"><label for="fc-email">Work email *</label><input id="fc-email" name="email" type="email" autocomplete="email" required maxlength="254"></div><div class="field"><label for="fc-phone">Phone <span>(optional)</span></label><input id="fc-phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div></div>
<div class="field"><label for="fc-message">How might we work together? *</label><textarea id="fc-message" name="message" rows="5" required minlength="15" maxlength="5000" aria-describedby="message-help"></textarea><p class="help" id="message-help">Tell us about your products, permitted channels or account requirements. Please use at least 15 characters.</p></div>
<details class="optional-details"><summary>Add product and order details <span>(optional)</span></summary><div class="field"><label for="fc-brands">Brands or product categories</label><input id="fc-brands" name="brands" maxlength="300"></div><div class="row2"><div class="field"><label for="fc-moq">Opening order requirements</label><input id="fc-moq" name="opening_minimum" maxlength="200"></div><div class="field"><label for="fc-channels">Permitted sales channels</label><input id="fc-channels" name="channels" maxlength="200"></div></div></details>
<p class="help privacy-help">Please do not send tax IDs, banking details or identity documents. Documents can be exchanged directly during the account process. <a href="/privacy/">Read our privacy notice</a>.</p>
<button type="submit" class="btn btn-solid">Send inquiry ${arrow}</button><p class="help">An introduction creates no purchase order or agreement.</p><p id="inquiry-status" role="status" aria-live="polite" tabindex="-1"></p>
</form>`;

export const pagesIntro = (title,description,action='') => `<section class="page-intro"><div class="wrap"><h1>${title}</h1><p class="lede">${description}</p>${action?`<div class="btn-row">${action}</div>`:''}</div></section>`;
