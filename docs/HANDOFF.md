# Night Route website handoff

Existing static Node build, GitHub repository and Netlify project retained. No framework migration.

## Protected branding

Primary opening headline: Wholesale, made Smoove.

WHOLESALE, MADE in compressed Archivo capitals; Smoove in the protected Yellowtail font in `#FFC000` with the neon glow. Other headings use compressed capitals. Approved 2026-09-27 and live. Never replace the slogan wording. Preserve absolute black `#000000` and Lamborghini gold `#FFC000`. The design studies that led here live in `concepts/` and are not deployed.

## Content truth

Supplier credibility leads. Distinguish commercial decisions from physical work performed by independent preparation providers and marketplace fulfillment networks. No invented scale, partners, endorsements, facilities or testimonials. California seller's permit status is public; its number and private addresses are not.

## Maintenance

src/pages.mjs owns pages. src/commerce.mjs owns the pathway and inquiry form. The Night Route homepage (hero, spec strip, route and partnership outline) lives in `home()` in src/pages.mjs; its behavior (light trails, route observer, outline and suppliers prefill) is in site.js. src/components.mjs owns navigation/footer. public/assets/site.css and site.js own styling and enhancement. scripts/assets.mjs regenerates the social image and profile PDF. Read DESIGN.md, docs/BRAND.md, docs/TESTING.md and docs/DEPLOYMENT.md.

Run npm run assets after profile/social content changes, then npm run build and npm test. Always render the PDF to inspect it; text extraction alone missed invisible WOFF2 fonts. Inquiries are available in Netlify Forms. Mailbox notifications have not been verified.

The current user brief authorizes verified production publishing and supersedes historical preview-only instructions. No DNS, registrar or Google Workspace records were changed.
