import {CTA,ctaLink,footer} from './components.mjs';

const M = '/assets/media/';
const sampleNote = 'Concept home. Every frame AI-generated. No real listing is shown.';

const bookingForm = () => `<form name="book-a-call" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field" id="booking" class="sheet__form">
<input type="hidden" name="form-name" value="book-a-call"><input type="hidden" name="subject" value="Free call request from smoove-operator.com (%{submissionId})"><input type="hidden" name="source" id="booking-source" value="direct">
<p class="hp" aria-hidden="true"><label>Leave this empty <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
<div class="sheet__row"><div class="field"><label for="bk-name">Name *</label><input id="bk-name" name="name" autocomplete="name" required maxlength="120"></div><div class="field"><label for="bk-brokerage">Brokerage or team <span>(optional)</span></label><input id="bk-brokerage" name="brokerage" autocomplete="organization" maxlength="160"></div></div>
<div class="sheet__row"><div class="field"><label for="bk-email">Email *</label><input id="bk-email" name="email" type="email" autocomplete="email" required maxlength="254"></div><div class="field"><label for="bk-phone">Phone <span>(optional)</span></label><input id="bk-phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div></div>
<div class="field"><label for="bk-listing">Listing address or link <span>(optional)</span></label><input id="bk-listing" name="listing" maxlength="300"></div>
<fieldset class="field sheet__needs"><legend>What do you need? <span>(optional)</span></legend><label><input type="checkbox" name="needs" value="Listing video"> Listing video</label><label><input type="checkbox" name="needs" value="Reel"> Reel</label><label><input type="checkbox" name="needs" value="Website"> Website</label></fieldset>
<div class="field"><label for="bk-message">Anything else <span>(optional)</span></label><textarea id="bk-message" name="message" rows="3" maxlength="3000" aria-describedby="bk-message-help"></textarea><p class="help" id="bk-message-help">Timing, number of listings, or the best time to call.</p></div>
<div class="sheet__send"><button type="submit" class="btn">${CTA}</button><p class="help">Fields marked * are required. <a href="/privacy/">Privacy notice</a>.</p></div>
<p id="booking-status" class="sheet__status" role="status" aria-live="polite" tabindex="-1"></p>
</form>`;

const home = () => `
<section id="arrival" class="room arrival" data-sc-act="scrub" data-sc-span="5.2" data-sc-dwell="0.15" data-sc-drift="#0B0907" aria-labelledby="h-arrival">
 <div data-sc-stage class="arrival__stage">
  <picture><source media="(max-width: 860px)" srcset="${M}walk-poster-m.webp"><img class="sc-stage__poster" src="${M}walk-poster.webp" width="1600" height="900" alt=""></picture>
  <video data-sc-scrub data-sc-src="${M}walk.mp4" data-sc-src-mobile="${M}walk-m.mp4" muted playsinline preload="none" aria-hidden="true"></video>
  <div class="door" data-door aria-hidden="true">
   <picture><source media="(max-width: 860px)" srcset="${M}door-poster-m.webp"><img class="door__poster" src="${M}door-poster.webp" width="1600" height="900" alt=""></picture>
   <video class="door__film" data-src="${M}door.mp4" data-src-mobile="${M}door-m.mp4" muted playsinline preload="auto"></video>
  </div>
  <div class="shutter" aria-hidden="true"><div class="shutter__light"></div></div>
  <div class="arrival__scrim arrival__scrim--hero" aria-hidden="true"></div>
  <div class="arrival__scrim arrival__scrim--trail" aria-hidden="true"></div>
  <div class="arrival__scrim arrival__scrim--lead" aria-hidden="true"></div>
  <div class="sc-copy sc-copy--lead arrival__copy" data-sc-cue="0 0.16 0">
   <h1 id="h-arrival" class="sc-display arrival__title">Making a good house look <em>great.</em></h1>
   <p class="arrival__sub">Listing videos, reels and websites for real estate agents, teams and brokerages.</p>
   ${ctaLink()}
  </div>
  <p class="sc-copy sc-copy--trail arrival__line" data-sc-cue="0.30 0.56 0.22 0.12">Every room, in the light it deserves.</p>
  <p class="sc-copy sc-copy--lead arrival__line" data-sc-cue="0.66 0.94 0.2 0.1">Built from the listing photos you already have.</p>
  <p class="room-tag" aria-hidden="true"><span data-room-tag>Living room</span></p>
  <p class="sample-note">${sampleNote}</p>
 </div>
</section>

<section id="light" class="room light" data-sc-act="pin" data-sc-span="2.2" data-sc-drift="#110D08" aria-labelledby="h-light">
 <div data-sc-stage class="light__stage">
  <figure class="compare" data-compare>
   <img class="compare__before" src="${M}backyard-before.webp" width="1600" height="900" loading="lazy" alt="AI-generated concept backyard in neutral daytime light.">
   <img class="compare__after" src="${M}backyard-after.webp" width="1600" height="900" loading="lazy" alt="The same concept backyard illustrated in golden-hour light.">
   <span class="compare__line" aria-hidden="true"></span>
   <label class="visually-hidden" for="light-range">Move between the daytime and golden-hour concept illustrations</label>
   <input id="light-range" class="compare__range" type="range" min="0" max="100" value="0" aria-valuetext="0% golden hour">
   <figcaption class="compare__caption"><span>Golden-hour illustration</span><span>Daytime illustration</span></figcaption>
  </figure>
  <div class="light__copy" data-sc-cue="0.02 0.97 0.14 0.03">
   <h2 id="h-light" class="sc-display">Same home. A&nbsp;different evening.</h2>
   <p>Drag the light across. This AI-generated comparison illustrates how the same view can feel in daytime and at golden hour. Both sides show a fictional home.</p>
  </div>
 </div>
</section>

<section id="formats" class="room formats" data-sc-act="pan" data-sc-span="4" data-sc-drift="#0B0907" aria-labelledby="h-formats">
 <div data-sc-stage class="formats__stage">
  <div class="rail" data-sc-pan="0.04">
   <div class="rail__lead">
    <h2 id="h-formats" class="sc-display">One listing. Three ways to show&nbsp;it.</h2>
    <p>Each piece comes from the same walk-through, so the light matches wherever the listing shows up.</p>
   </div>
   <article class="piece piece--film">
    <div class="piece__media"><img src="${M}still-living.webp" width="1200" height="675" loading="lazy" alt="Living room at golden hour, a frame from the listing film."></div>
    <h3>Listing film</h3>
    <dl class="piece__label"><div><dt>Ratio</dt><dd>16:9</dd></div><div><dt>Length</dt><dd>36 seconds, silent master</dd></div><div><dt>Lives on</dt><dd>Your listing page, YouTube, email</dd></div></dl>
   </article>
   <article class="piece piece--reel">
    <div class="piece__media"><video data-loop data-src="${M}reel.mp4" poster="${M}reel-poster.webp" muted playsinline loop preload="none" aria-label="AI-generated concept-home reel: the front door opens, then a beat from each room, ending in the backyard."></video></div>
    <h3>Reel</h3>
    <dl class="piece__label"><div><dt>Ratio</dt><dd>9:16</dd></div><div><dt>Length</dt><dd>22 seconds, cut from the film</dd></div><div><dt>Lives on</dt><dd>Instagram Reels, TikTok, YouTube Shorts</dd></div></dl>
   </article>
   <article class="piece piece--site">
    <a class="piece__media" href="/sample-site/"><img src="${M}sample-site.webp" width="1200" height="750" loading="lazy" alt="Screenshot of a sample single-property website built around the film."></a>
    <h3>Website</h3>
    <dl class="piece__label"><div><dt>Ratio</dt><dd>Any screen</dd></div><div><dt>Shape</dt><dd>One property, one link</dd></div><div><dt>Lives on</dt><dd>Your listing link, socials, sign riders</dd></div></dl>
    <a class="piece__more" href="/sample-site/">Open the sample site</a>
   </article>
  </div>
 </div>
</section>

<section id="book" class="room book" data-sc-act="flow" aria-labelledby="h-book">
 <figure class="book__ground" data-sc-reveal="up" data-sc-reveal-at="0.02 0.42" aria-hidden="true"><img src="${M}still-backyard.webp" width="1200" height="675" loading="lazy" alt=""></figure>
 <div class="sheet">
  <p class="sheet__kicker">Open house sign-in</p>
  <h2 id="h-book" class="sc-display">Your listing deserves to be seen, and <em>felt,</em> the way it feels to walk through&nbsp;it.</h2>
  <ol class="sheet__steps">
   <li><strong>Sign in below.</strong> Tell me about the listing.</li>
   <li><strong>We talk it through.</strong> Film, reel or site, plus timing and price, on a free call.</li>
   <li><strong>You get the files.</strong> Send the listing photos. Finished pieces come back ready to post.</li>
  </ol>
  ${bookingForm()}
 </div>
 ${footer()}
</section>`;

const sampleSite = () => `
<article class="sample">
 <header class="sample__hero">
  <img src="${M}walk-poster.webp" width="1600" height="900" alt="Entry looking into the living room at golden hour.">
  <div class="sample__heading"><p class="sample__flag">Sample property site</p><h1 class="sc-display">Every room, at its best&nbsp;hour.</h1><p>A single page for a single listing: the film first, then the rooms, then one clear way to reach the agent.</p></div>
 </header>
 <section class="sample__film" aria-labelledby="h-film"><h2 id="h-film" class="sc-display">The walk-through</h2><video src="${M}walk.mp4" poster="${M}walk-poster.webp" controls muted playsinline preload="none" aria-label="Walk-through film, played at double speed"></video><p class="sample__note">${sampleNote} Shown here at double speed.</p></section>
 <section class="sample__rooms" aria-labelledby="h-rooms"><h2 id="h-rooms" class="sc-display">The rooms</h2><ul>
  <li><img src="${M}still-living.webp" width="1200" height="675" loading="lazy" alt="Living room"><span>Living room</span></li>
  <li><img src="${M}still-kitchen.webp" width="1200" height="675" loading="lazy" alt="Kitchen opening to the dining area"><span>Kitchen</span></li>
  <li><img src="${M}still-bedroom.webp" width="1200" height="675" loading="lazy" alt="Primary bedroom"><span>Primary bedroom</span></li>
  <li><img src="${M}still-bath.webp" width="1200" height="675" loading="lazy" alt="Primary bath"><span>Primary bath</span></li>
 </ul></section>
 <section class="sample__contact"><p>On a real listing, this is where the agent’s name, number and showing link go. This one is a sample.</p>${ctaLink()}</section>
</article>`;

const legal = (title,lede,body) => `<article class="legal"><h1 class="sc-display">${title}</h1><p class="legal__lede">${lede}</p>${body}</article>`;

const privacy = () => legal('Privacy notice.','How this website handles information. Effective October 2026.',`
<h2>Information you provide</h2><p>The sign-in sheet collects your name and email address. Brokerage or team, phone, listing address or link, the services you need and any notes are optional. Please do not submit government identifiers, banking information or passwords.</p>
<h2>How information is used</h2><p>Submissions are used to reply to you, schedule a call and discuss your listing. The form does not enroll you in a newsletter.</p>
<h2>Hosting and form processing</h2><p>Netlify hosts the website and processes form submissions on the business’s behalf, including spam filtering. Hosting and security providers may process technical information such as IP addresses and request logs to operate and protect the site.</p>
<h2>Cookies and links</h2><p>The site does not add advertising trackers, analytics tools or nonessential cookies. When a link contains a campaign code, a short code is kept in session storage and included with your request. Session storage clears when the tab closes.</p>
<h2>Retention</h2><p>Requests are kept as long as needed to correspond with you and for ordinary business records.</p>
<h2>Questions and requests</h2><p>Use the <a href="/#book">sign-in sheet</a> and mention privacy in the notes to ask about information you submitted or this notice.</p>
<h2>Updates</h2><p>This notice may be updated as practices change. The effective date identifies the current version.</p>`);

const terms = () => legal('Website terms.','Terms for using this website. Effective October 2026.',`
<h2>Purpose</h2><p>This website describes SmooveOperator Creations’ listing video, reel and website services and provides a way to request a call.</p>
<h2>Samples</h2><p>The home shown here is fictional. Its images and video are AI-generated concept work, including the daytime and golden-hour comparison. They illustrate presentation styles and do not depict a client listing or offer any property for sale.</p>
<h2>No guarantee of results</h2><p>Marketing pieces can help present a listing. They do not guarantee showings, offers, sale price or time on market.</p>
<h2>Requests</h2><p>Submitting the sign-in sheet does not create an agreement. Scope, timing and price are agreed separately for each listing.</p>
<h2>Independent business</h2><p>SmooveOperator Creations is not affiliated with or endorsed by any brokerage, MLS or platform named on this site. Names and trademarks belong to their owners.</p>
<h2>Appropriate use</h2><p>Please use the site for legitimate requests. Do not attempt unauthorized access, disrupt the website or submit unlawful content.</p>
<h2>Questions</h2><p>For questions about these terms, use the <a href="/#book">sign-in sheet</a>.</p>`);

const message = (title,lede) => `<article class="legal legal--message"><h1 class="sc-display">${title}</h1><p class="legal__lede">${lede}</p><a class="btn btn--quiet" href="/">Back to the front door</a></article>`;

export const pages = [
 {path:'/',title:'SmooveOperator Creations | Listing Videos, Reels and Websites for Real Estate',description:'Golden-hour listing videos, reels and single-property websites for real estate agents, teams and brokerages. Based in Orange County, working anywhere in the US.',home:true,body:home},
 {path:'/sample-site/',title:'Sample Property Site | SmooveOperator Creations',description:'A sample single-property website built around a golden-hour listing film.',noindex:true,body:sampleSite},
 {path:'/privacy/',title:'Privacy Notice | SmooveOperator Creations',description:'How SmooveOperator Creations handles information sent through the sign-in sheet.',body:privacy},
 {path:'/terms/',title:'Website Terms | SmooveOperator Creations',description:'Terms for using the SmooveOperator Creations website.',body:terms},
 {path:'/thank-you/',title:'Signed In | SmooveOperator Creations',description:'Your free call request was received.',noindex:true,body:()=>message('You’re signed in.','Thanks. I’ll email you to set a time for the call.')},
 {path:'/404/',title:'Page Not Found | SmooveOperator Creations',description:'This page is not part of the tour.',noindex:true,body:()=>message('Wrong door.','This page may have moved, or the address may be incorrect.')}
];
