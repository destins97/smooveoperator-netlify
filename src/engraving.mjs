// Engraved security-printing assets, generated at build time.
// Guilloche bands tile seamlessly: every strand completes whole sine cycles across one tile.
const r1 = n => Math.round(n * 10) / 10;
const svg = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${body}</svg>`;

const FOIL = '#D9B24C', FOIL_LO = '#8A6B22', RULE = '#3a321c';

/* Interlaced rope: phase-shifted strands between two hairlines */
function rope(len, depth, vertical) {
  const strands = [[5, 1, FOIL_LO, .9], [5, 1, FOIL, .45], [3, 2, FOIL_LO, .55]];
  let body = '';
  for (const [count, cycles, color, alpha] of strands) {
    for (let k = 0; k < count; k++) {
      const ph = k / count * Math.PI * 2, amp = depth * (cycles === 1 ? .34 : .18), pts = [];
      for (let i = 0; i <= len; i += 1) {
        const a = i / len * Math.PI * 2 * cycles + ph, off = depth / 2 + amp * Math.sin(a);
        pts.push(vertical ? `${r1(off)},${i}` : `${i},${r1(off)}`);
      }
      body += `<polyline points="${pts.join(' ')}" fill="none" stroke="${color}" stroke-opacity="${alpha}" stroke-width=".55"/>`;
    }
  }
  const e = depth - .5;
  body += vertical
    ? `<path d="M.5 0V${len}M${e} 0V${len}" stroke="${FOIL_LO}" stroke-width="1"/>`
    : `<path d="M0 .5H${len}M0 ${e}H${len}" stroke="${FOIL_LO}" stroke-width="1"/>`;
  return vertical ? svg(depth, len, body) : svg(len, depth, body);
}
export const bandH = () => rope(72, 18, false);
export const bandV = () => rope(72, 18, true);

/* Hypotrochoid rosette as one path, centred on (c, c) */
function rosettePath(c, R, r, p, steps = 720) {
  const g = (a, b) => b ? g(b, a % b) : a, turns = Math.PI * 2 * r / g(R, r), k = (R - r) / r, d = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps * turns;
    const x = c + (R - r) * Math.cos(t) + p * Math.cos(k * t), y = c + (R - r) * Math.sin(t) - p * Math.sin(k * t);
    d.push(`${i ? 'L' : 'M'}${r1(x)} ${r1(y)}`);
  }
  return d.join('');
}
export const corner = () => svg(36, 36, `<rect x=".5" y=".5" width="35" height="35" fill="#0e0d0a" stroke="${FOIL_LO}"/><path d="${rosettePath(18, 15, 3, 9, 360)}" fill="none" stroke="${FOIL}" stroke-opacity=".8" stroke-width=".5"/><circle cx="18" cy="18" r="2" fill="${FOIL}"/>`);

/* Microprint: true phrases only; textLength makes the tile seamless whatever font renders it */
export function microprint() {
  const text = 'SMOOVEOPERATOR · FOUR WRITTEN BUY RULES · APPLIED TO EVERY ORDER · CALIFORNIA SELLER’S PERMIT ON FILE · ';
  const w = 420;
  return svg(w, 8, `<text x="0" y="6" textLength="${w}" lengthAdjust="spacingAndGlyphs" font-family="Arial, Helvetica, sans-serif" font-size="5.6" letter-spacing=".4" fill="${FOIL_LO}">${text.replace('’', '&#8217;')}</text>`);
}

/* Latent seal: rings, a fine rosette and ring text from true phrases. The mask variant drives the scroll glint. */
function sealGeometry(stroke, fine) {
  return `<circle cx="80" cy="80" r="77" fill="none" stroke="${stroke}" stroke-width="1"/>`
    + `<circle cx="80" cy="80" r="73" fill="none" stroke="${stroke}" stroke-width=".5"/>`
    + `<circle cx="80" cy="80" r="52" fill="none" stroke="${stroke}" stroke-width=".8"/>`
    + `<circle cx="80" cy="80" r="49" fill="none" stroke="${stroke}" stroke-width=".4" stroke-dasharray="1 2"/>`
    + `<path d="${rosettePath(80, 45, 5, 22, 900)}" fill="none" stroke="${fine}" stroke-width=".45"/>`
    + `<path d="${rosettePath(80, 33, 3, 14, 600)}" fill="none" stroke="${fine}" stroke-width=".4"/>`;
}
export const sealMask = () => svg(160, 160, sealGeometry('#fff', '#fff') + '<circle cx="80" cy="80" r="62.5" fill="none" stroke="#fff" stroke-width="7"/>');
export const latentSeal = () => `<div class="latent" aria-hidden="true"><svg class="latent-svg" viewBox="0 0 160 160"><defs><path id="seal-ring" d="M80 80m-62.5 0a62.5 62.5 0 1 1 125 0a62.5 62.5 0 1 1-125 0"/></defs>${sealGeometry(FOIL_LO, FOIL)}<text class="latent-ring"><textPath href="#seal-ring" textLength="388" lengthAdjust="spacing">WRITTEN BUY RULES · APPLIED TO EVERY ORDER · SELLER’S PERMIT ON FILE ·</textPath></text><text class="latent-mono" x="80" y="92" text-anchor="middle">S</text></svg><span class="glint"><i></i></span></div>`;

export const files = {
  'assets/band-h.svg': bandH,
  'assets/band-v.svg': bandV,
  'assets/corner.svg': corner,
  'assets/microprint.svg': microprint,
  'assets/seal-mask.svg': sealMask
};
