# Supplier-first editorial website handoff

Existing static Node build, GitHub repository and Netlify project retained. No framework migration.

## Protected branding

Primary opening headline: Wholesale, made Smoove.

Approved treatment (owner decision, 2026-09-27): WHOLESALE, MADE in compressed all caps, Smoove in the protected Yellowtail font in gold with the neon glow, and compressed all caps for other headings, per `concepts/night-route.html`. Production still uses Barlow 600 for Wholesale, made and Bodoni Moda headings until the Night Route redesign ships. Never replace the slogan wording. Preserve black and gold.

## Content truth

Supplier credibility leads. Distinguish commercial decisions from physical work performed by independent preparation providers and marketplace fulfillment networks. No invented scale, partners, endorsements, facilities or testimonials. California seller's permit status is public; its number and private addresses are not.

## Maintenance

src/pages.mjs owns pages. src/commerce.mjs owns the pathway and inquiry form. src/components.mjs owns navigation/footer. public/assets/site.css and site.js own styling and enhancement. scripts/assets.mjs regenerates the social image and profile PDF. Read DESIGN.md, docs/BRAND.md, docs/TESTING.md and docs/DEPLOYMENT.md.

Run npm run assets after profile/social content changes, then npm run build and npm test. Always render the PDF to inspect it; text extraction alone missed invisible WOFF2 fonts. Inquiries are available in Netlify Forms. Mailbox notifications have not been verified.

The current user brief authorizes verified production publishing and supersedes historical preview-only instructions. No DNS, registrar or Google Workspace records were changed.
