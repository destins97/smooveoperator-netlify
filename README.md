# SmooveOperator

A restrained charcoal-and-brass website for a developing commerce and marketplace operations business. Replaces the prior ATM/vending website while preserving the dark-and-gold brand direction. No claims of established wholesale relationships, scale, warehouses, or marketplace affiliation are made.

## Run

Node.js 22 or newer. There are no runtime or development dependencies.

```sh
npm ci
npm run build
npm test
npm run dev
```

Open `http://localhost:4173`. The preview server rebuilds on startup; restart after source changes. Local form POST requests deliberately fail with HTTP 503 because only Netlify can confirm real delivery.

## Structure

```text
src/components.mjs       Shared navigation, buttons, cards, headings, diagram, form, footer
src/pages.mjs            All page copy and page compositions
public/assets/site.css   Responsive layouts and design tokens
public/assets/site.js    Progressive navigation, reveals, contact interaction
public/assets/social-card.png  1200 × 630 social-sharing artwork
scripts/build.mjs        Static HTML, sitemap, robots generation
scripts/serve.mjs        Local preview, honest form failure behavior
scripts/check.mjs        Content, links, SEO, and contact-state verification
netlify.toml            Build, redirects, security headers
docs/                   Brand, deployment, testing, and handoff
```

## Page map

| URL | Purpose |
| --- | --- |
| `/` | Brand positioning, capabilities, operating flow, principles |
| `/about/` | Current business focus and future direction |
| `/capabilities/` | Four developing operational focus areas |
| `/operations/` | Sourcing, third-party prep, fulfillment, replenishment approach |
| `/suppliers/` | Supplier introductions, expectations, practical questions |
| `/contact/` | Business inquiry form |
| `/privacy/` | Clearly labeled draft privacy notice |
| `/terms/` | Clearly labeled draft website terms |
| `/thank-you/` | Native form submission return page; noindex |
| `/404.html` | Useful not-found page; noindex |

Legacy `/privacy.html` and `/terms.html` paths redirect to their new locations.

## Architecture decision

The original repository was static HTML/CSS/JS. This rebuild keeps browser delivery static and uses small Node modules to compose reusable components during the build. Astro was considered; with no requested interactive application or content CMS, it would add a dependency without changing the delivered experience. Pages, content, and CSS are already separated and can be migrated into Astro components if that becomes useful. Add future authenticated tools under a separate `/portal/` or `/tools/` application with server-side authorization; never protect private supplier data through client-only routing.

No remote fonts, icon libraries, animation libraries, tracking scripts, or images are needed at runtime. The hero is an accessible operational diagram, not a photograph implying company-owned infrastructure. Arial/Helvetica provides fast and dependable typography; Georgia adds an editorial accent.

## Configuration

No API keys are required. `SITE_URL` is optional and must be the verified production origin. Its default is the existing `https://smooveoperator.netlify.app`; if omitted on Netlify, Netlify's `URL` is used first. It controls canonical URLs, sitemap, social metadata, and organization markup. `CONTEXT=deploy-preview` or `branch-deploy` makes the build noindex and blocks crawling. `PORT` changes the local preview port.

Before launch, follow [Deployment](docs/DEPLOYMENT.md) and [Testing](docs/TESTING.md). Brand decisions are in [Brand system](docs/BRAND.md). All public copy is in `src/pages.mjs` and `src/components.mjs`.
