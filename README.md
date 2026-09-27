# SmooveOperator

A supplier-first website for an independent marketplace commerce and distribution business. The Night Route design (absolute black, Lamborghini gold, the protected neon Yellowtail wordmark, compressed Archivo capitals and a light-trail homepage) explains sourcing, purchasing and inventory decisions alongside independent preparation and fulfillment roles.

## Run locally

Use Node.js 22 or newer. There are no browser framework or runtime package dependencies. Development dependencies support tests. Regenerating the social card and profile PDF uses Playwright, installed locally only when needed.

```sh
npm ci
npm run build
npm test
npm run dev
```

Open http://localhost:4173. The server rebuilds on startup; restart after source changes. Local POST requests deliberately return HTTP 503 because the preview server cannot confirm Netlify Forms delivery. `npm run assets` renders the link preview image and the business profile PDF from HTML sources in `scripts/` (requires `npm i --no-save playwright && npx playwright install chromium`). This README documents implementation and commands, not a completed QA run.

## Source map

| Path | Responsibility |
| --- | --- |
| `src/components.mjs` | Shared buttons, navigation, wordmark, footer and escaping |
| `src/commerce.mjs` | Native-details commerce pathway, principles, invitation and inquiry form |
| `src/pages.mjs` | Copy, page metadata and composition |
| `src/boot.mjs` | Initial browser enhancement bootstrap |
| `public/assets/site.css` | Tokens, typography, responsive layout and states |
| `public/assets/site.js` | Menu, light trails, route observer, partnership outline, profile viewer, attribution and enhanced submission |
| `public/fonts/` | Local Archivo variable font and Yellowtail, with licenses |
| `scripts/build.mjs` | Static HTML, hashed asset references, sitemap and robots |
| `scripts/serve.mjs` | Local preview with deliberate POST failure |
| `scripts/social-card.html`, `scripts/profile.html` | Sources for the link preview image and the business profile PDF |
| `scripts/render-assets.mjs` | Renders both sources in Chromium |
| `scripts/check.mjs` | Static release checks |
| `scripts/test-form.mjs` | Form behavior tests |
| `netlify.toml` | Hosting, redirects and headers |

## Page map

The build declares 11 pages. The not-found page is also written as `/404.html` for hosting.

| URL | Purpose |
| --- | --- |
| `/` | Light-trail hero, spec strip, five-stage route and the partnership outline |
| `/suppliers/` | Fit, responsibilities, practical questions and inquiry |
| `/capabilities/` | Sourcing, marketplace operations, coordination and replenishment |
| `/operations/` | Inspectable product journey and commercial decisions |
| `/about/` | Current focus and future direction |
| `/contact/` | Brief introduction with optional product details |
| `/profile/` | Business facts and the profile PDF in an on-page viewer |
| `/privacy/` | Privacy notice |
| `/terms/` | Website terms |
| `/thank-you/` | Native form return page, noindex |
| `/404/` | Recovery page, noindex |

## Forms and progressive enhancement

The retained Netlify form name is `supplier-fit-check`. Supplier and contact pages share a continuous form. Inquiry type, name, email and message are required. Company and phone are optional; native details holds optional product and order information. Sensitive identity and financial documents are not requested.

Without JavaScript, navigation remains visible, disclosures work, and forms post natively with `/thank-you/` as the return destination. Enhanced submission validates, focuses the first invalid field and posts URL-encoded data to `/`. A successful HTTP response confirms receipt and resets answers. Failure or a 15-second timeout preserves answers. Actual hosted delivery requires separate verification.

Optional attribution accepts `ref`, `src` or `utm_campaign`, restricts it to letters, digits, underscore, period and hyphen, and limits it to 64 characters. Session storage retains it for inquiries in that tab session. No paid API or browser analytics integration is required.

## Configuration and architecture

`SITE_URL` controls canonicals, sitemap, sharing metadata and organization markup. Priority is `SITE_URL`, then Netlify's `URL`, then `https://smoove-operator.com`. Use the verified origin. `CONTEXT=deploy-preview` or `CONTEXT=branch-deploy` produces noindex pages and blocks crawling. `PORT` controls the local preview port.

Delivery remains static HTML, CSS and JavaScript with local fonts and inline SVG arrows. No framework migration, paid API, DNS change or email change is required. The semantic commerce diagram explains roles without implying company-owned infrastructure.

## Handoff

- [Product](PRODUCT.md): business truth, public facts, scope and quality targets.
- [Design](DESIGN.md): implemented visual system and component behavior.
- [Brand](docs/BRAND.md): positioning, identity, voice and factual boundaries.
- [Deployment](docs/DEPLOYMENT.md): release procedure and hosting evidence.
- [Testing](docs/TESTING.md): verification scope and results.

Preserve URLs and `/profile/`. Legal copy needs owner or counsel review for business-specific obligations. Deployment is not legal validation. Release claims must come from current verification records.
