import {button,arrow} from './components.mjs';

export const journey = () => `<div class="journey" data-journey><div class="journey-track" aria-hidden="true"></div><ol>
${[
 ['Source','Brands & suppliers','A documented starting point.','Products from legitimate sources, supported by accurate product information and purchasing records.'],
 ['Evaluate','SmooveOperator','The commercial decisions stay here.','We evaluate product fit, marketplace eligibility, channel requirements and order economics before purchasing.'],
 ['Prepare','Independent providers','Ready for the receiving requirements.','Third-party preparation providers handle inspection, labeling and packing as required.'],
 ['Fulfill','Marketplace networks','Storage, orders and delivery.','Marketplace fulfillment networks handle prepared inventory and customer orders.'],
 ['Reach','The customer','The destination that connects the work.','Products are offered with accurate identity, pack size and condition information.']
].map(([title,owner,line,detail],i)=>`<li${i===1?' class="journey-owned"':''}><span class="journey-node" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><h3>${title}</h3><p class="journey-owner">${owner}</p><p class="journey-line">${line}</p><details><summary>About this step <span aria-hidden="true">+</span></summary><p>${detail}</p></details></li>`).join('')}
</ol></div>`;

export const rulesBoard = () => `<div class="operating-board"><div class="board-heading"><span>Operating principles</span><span>What we look for</span></div>
${[
 ['Know the source.','Documented sourcing','Understand the supplier’s role, verify product identity and retain organized purchasing records.','Supplier identity, catalog information and the documents available with an order.'],
 ['Respect the channel.','Clear permissions','Clarify permitted marketplaces and applicable brand requirements before making a purchasing decision.','Permitted sales channels, any brand restrictions and account requirements.'],
 ['Represent accurately.','Product integrity','Check the product, pack configuration and condition against the intended marketplace listing.','Accurate identifiers, pack details and current product information.'],
 ['Reorder with reason.','Evidence before scale','Evaluate repeat purchasing when observed demand, availability and economics support it. No guaranteed volumes.','Availability, lead times and the terms that would apply to future orders.']
].map(([title,label,body,detail],i)=>`<div class="operating-row"><span class="flap-index" aria-hidden="true">0${i+1}</span><div class="operating-rule"><h3>${title}</h3><p>${body}</p></div><details><summary>${label}<span class="board-plus" aria-hidden="true">+</span></summary><p><strong>Useful in a first conversation:</strong> ${detail}</p></details></div>`).join('')}
<div class="board-foot"><span class="board-dot" aria-hidden="true"></span><p>Clear requirements first. A purchasing decision second.</p></div></div>`;

export const profileFeature = () => `<section class="section profile-feature"><div class="wrap profile-feature-grid"><div><p class="eyebrow">For your account file</p><h2>The business.<br><span>On one page.</span></h2><p class="intro">A concise reference to our business focus, commercial role and fulfillment approach. Something useful to take into the next conversation.</p><div class="profile-actions">${button('View the business profile','/profile/')}${button('Download the one-page PDF','/assets/smooveoperator-reseller-profile.pdf','text',' download')}</div><p class="help">Resale documentation is exchanged directly during an account application.</p></div><a class="profile-preview" href="/profile/" aria-label="Read the SmooveOperator business profile"><span class="profile-paper"><span class="wordmark">Smoove Operator</span><span class="paper-label">Business profile</span><span class="paper-rule"></span><span class="paper-row"><small>Business focus</small><strong>Marketplace commerce</strong></span><span class="paper-row"><small>Commercial role</small><strong>Sourcing & purchasing</strong></span><span class="paper-row"><small>Physical operations</small><strong>Independent providers</strong></span><span class="paper-row"><small>Documentation</small><strong>California seller’s permit on file</strong></span><span class="paper-footer">Open the profile ${arrow}</span></span></a></div></section>`;
