# Supplier-first editorial website handoff

Existing static Node build, GitHub repository and Netlify project retained. No framework migration.

## Protected branding

Primary opening headline: Wholesale, made Smoove.

Wholesale, made uses Barlow 600. Smoove uses the exact existing self-hosted Yellowtail font and gold gradient from the protected logo. Never replace the slogan. Other editorial headings use Bodoni Moda. Preserve black and gold.

## Content truth

Supplier credibility leads. Distinguish commercial decisions from physical work performed by independent preparation providers and marketplace fulfillment networks. No invented scale, partners, endorsements, facilities or testimonials. California seller's permit status is public; its number and private addresses are not.

## Maintenance

src/pages.mjs owns pages. src/commerce.mjs owns the pathway and inquiry form. src/components.mjs owns navigation/footer. public/assets/site.css and site.js own styling and enhancement. scripts/assets.mjs regenerates the social image and profile PDF. Read DESIGN.md, docs/BRAND.md, docs/TESTING.md and docs/DEPLOYMENT.md.

Run npm run assets after profile/social content changes, then npm run build and npm test. Always render the PDF to inspect it; text extraction alone missed invisible WOFF2 fonts. Inquiries are available in Netlify Forms. Mailbox notifications have not been verified.

The current user brief authorizes verified production publishing and supersedes historical preview-only instructions. No DNS, registrar or Google Workspace records were changed.
