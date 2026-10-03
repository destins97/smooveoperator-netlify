export const escape = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');

// One label for the one action, everywhere on the site.
export const CTA = 'Book a free call';
export const ctaLink = (cls='btn') => `<a class="${cls}" href="/#book">${CTA}</a>`;

export const rooms = [['arrival','Front door'],['light','The light'],['formats','Three formats'],['book','Sign-in sheet']];

const mark = `<a class="mark" href="/"><span class="mark__script">Smoove Operator</span> <span class="mark__sub">Creations</span><span class="visually-hidden">, home</span></a>`;

// The home page is a showing, so its nav is the room list, the way a listing sheet lists rooms.
export const header = path => `<a class="skip-link" href="#main">Skip to content</a><header class="bar">${mark}${path==='/'?`<nav class="rooms" aria-label="Rooms"><ol>${rooms.map(([id,name])=>`<li><a href="#${id}" data-room-link="${id}">${name}</a></li>`).join('')}</ol></nav>`:''}${ctaLink('bar__cta')}</header>`;

export const footer = () => `<footer class="foot"><div class="foot__mark"><span class="mark__script">Smoove Operator</span><span class="mark__sub">Creations</span></div><p>Listing videos, reels and websites for real estate professionals. Based in Orange County, California. Working with listings anywhere in the US.</p><p class="foot__small">&copy; ${new Date().getFullYear()} SmooveOperator Creations <span aria-hidden="true">·</span> <a href="/privacy/">Privacy</a> <span aria-hidden="true">·</span> <a href="/terms/">Terms</a></p></footer>`;
