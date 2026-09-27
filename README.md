# SmooveOperator website

Static supplier-focused business website using a custom Node build, semantic HTML, local fonts, CSS and small progressive-enhancement JavaScript. No framework or runtime dependency migration.

## Commands

- npm ci
- npm run build: generates all 11 pages in dist.
- npm test: static checks and form-behavior assertions.
- npm run dev: local preview, port 4173 by default.
- npm run assets: social card and one-page PDF. Render the PDF after changes.

Real forms require Netlify. Local form POSTs intentionally return 503 so failure behavior can be checked.

## Sources

- src/pages.mjs: page copy and composition.
- src/components.mjs: header, footer and buttons.
- src/commerce.mjs: shared form, operating map and invitation.
- src/industrial.mjs: recovered route, principles board and profile presentation.
- public/assets/site.css: existing accessible base plus clearly labeled recovery styling.
- public/assets/site.js: menu, optional motion and Netlify submission handling.
- scripts/build.mjs: generated metadata, sitemap and robots.

## Direction and release

Read PRODUCT.md, DESIGN.md and docs/BRAND.md. The primary slogan is exactly Wholesale, made Smoove. Recovery direction: Premium Industrial Commerce.

Branch: recovery/premium-industrial-commerce. Baseline production: 5a2ff52. Visual reference: aeec63e. Both exact revisions were exported and run locally. Current production is preserved as preserve/production-2026-09-27.

This recovery is preview-only. Do not merge or publish until the user explicitly says Ship it. Use the existing Netlify project; never change DNS or Google Workspace records. Read docs/RECOVERY.md, docs/TESTING.md and docs/DEPLOYMENT.md for evidence and the approval boundary.
