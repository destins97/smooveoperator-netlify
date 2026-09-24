# Handoff: Gold Standard redesign, finish Phase 4 and run Phase 5

Written 24 Sep 2026 by the Cowork session that built this branch. Owner: Destin. Read all of this before acting.

## Where things stand

- Branch `claude/gold-standard-redesign` (this commit) is built on `codex/commerce-redesign` (commit 88a184c, which is what production serves today).
- Direction chosen by Destin: **C, Gold Standard** (black + brushed foil gold, security-printing world, Bodoni Moda / Manrope / JetBrains Mono / Yellowtail wordmark).
- Tier: Redesign + 4 Reimagine pieces. All built:
  - Supplier Fit Check: 3-step Netlify form `supplier-fit-check` on `/contact/` (JS steps, works as one long form without JS)
  - Outreach tracking: `?ref=` / `?src=` / `?utm_campaign=` saved in sessionStorage, sent as hidden `source`
  - Reseller profile: `/profile/` page + `public/assets/smooveoperator-reseller-profile.pdf` (regenerate with `scripts/assets.mjs`)
  - "My Slice" calculator on the homepage
- About / Capabilities / Our approach were folded into Home and `/suppliers/`; 301s in `netlify.toml`.
- Fonts self-hosted in `public/fonts/` (fixed the 0.41 mobile layout shift). CSP tightened to `'self'` only.
- `npm test` passes (303 checks). Local Lighthouse: mobile perf 98 / a11y 100 / SEO 100 / CLS 0; desktop perf 100.
- Fit Check verified in Playwright: step validation, error path keeps answers, success confirmation, POST payload has `form-name`, `source`, radio values.
- Impeccable context: `PRODUCT.md`, direction contract in `.impeccable/surfaces/src-pages-mjs.md` (seed 764057ef, kind canon, code-led).

## Hard rules (Destin's guardrails)

1. **Never deploy to production.** No merge to `main`, no `netlify deploy --prod`, no publishing a deploy, until Destin writes "yes, ship it".
2. No new paid services, plugins or subscriptions without asking him first.
3. No marketplace logos/trademarks (never the word "Amazon" or "FBA" in site copy), no implied affiliation with any marketplace or brand he resells.
4. Never invent testimonials, sales numbers, reviews or credentials. Only approved public credential: "holds a California seller's permit" (number never shown). Not approved for public display: LLC wording, city/region, Instagram, his personal name.
5. No em dashes or en dashes anywhere in site copy (`npm test` checks built HTML).

## Remaining tasks, in order

### 1. Get a Deploy Preview
- Push `claude/gold-standard-redesign` to origin.
- Open a PR into `main` titled "Gold Standard redesign (preview only, do not merge)". Put "Do not merge until Destin approves" at the top of the description. That PR triggers a Netlify Deploy Preview (`deploy-preview-<n>--smooveoperator.netlify.app`). Previews are noindex by design; that's expected.
- Netlify project: name `smooveoperator`, site id `39a5f333-e6c4-4ad0-90c8-587092b5e6ac`.

### 2. Form detection (ask first)
- Netlify Forms is currently **not enabled** on the project, which is why every inquiry on the live site returns 404.
- Enabling form detection is a project setting. Check whether it costs anything on his current Netlify plan (credit-based plans may meter submissions). Tell Destin the cost in one line and get a yes before enabling. Then redeploy the preview and send one real-looking test submission (real sentences, not test@test.com, or Akismet flags it) and confirm it appears under Forms.
- Suggest (don't enable without a yes) an email notification to his inbox for `supplier-fit-check`.

### 3. Finish Impeccable Phase 4
- Capture screenshots of the preview (reduced motion on, so scroll-driven reveals are settled) at 1440 and 390 into `.impeccable/review/desktop.png` and `mobile.png` (home), plus suppliers, contact and profile.
- Run the `impeccable-finish-reviewer` agent with: the original request, these handoff facts, the direction contract path, the screenshots, the craft floor reference, and the chosen direction preview (the "Gold Standard" card in the checkpoint report) as critique reference. Detector notes: low-contrast hits against #ffffff are false positives (real pairs: #A99F86 on #050504 = 7.76:1); gradient-text on the foil script is a suppressed, intentional signature.
- Apply the reviewer's fix batch once, recapture, get a verdict. Two rounds maximum.
- Run `impeccable-documenter` to write `DESIGN.md` + `.impeccable/design.json` from the built world.
- Run `impeccable embed-prompt --scan public/assets` and give `social-card.png` its provenance (it's a screenshot of the built homepage made by `scripts/assets.mjs`).

### 4. Phase 5: prove it, then STOP
Deliver to Destin, opening with a START HERE block (one next action, a decision table Decision · Options · Your pick · Deadline, what happens if he does nothing, what is NOT a decision right now). Visual, scannable, one question maximum. Call him friend. No em dashes.
- Before and after screenshots, desktop and mobile. Before = live https://smoove-operator.com today.
- Re-score the 11-point audit with one sentence of evidence each. Baseline (live site, 24 Sep):

| Criterion | Before |
|-|-|
| Visual design | 6 |
| Typography | 5 |
| Layout and spacing | 6 |
| Motion and interaction | 3 |
| Mobile experience | 6 |
| Copy and messaging | 5 |
| Trust and credibility | 3 |
| Speed and performance | 7 (mobile perf 80, CLS 0.409) |
| Accessibility | 8 |
| SEO basics | 2 (robots Disallow + noindex because production serves a preview build) |
| Functionality | 1 (form 404s, Netlify Forms off) |
| **Average** | **4.7** |

- Lighthouse on the deploy preview URL (mobile + desktop).
- List anything unfinished.
- **Decisions Destin must make at the ship gate:**
  - Approve Privacy and Terms text: the public "Draft for legal review" banners were replaced with "Effective September 2026". Ask him to confirm he's OK publishing them as final (Claude is not a lawyer).
  - Approve showing the 4 buy rules publicly (he was told they're shown; the "fewer than 3 sellers" rule is intentionally left off).
- How shipping works once he says "yes, ship it": merge the PR into `main`; production builds from `main` (today production is a manually published preview of PR #1, which is why Google is blocked). After the production build, confirm `robots.txt` allows crawling and pages are `index, follow`, and close PR #1.

## Useful commands

```sh
npm ci && npm run build && npm test
npm run dev                      # local preview on :4173 (form POSTs return 503 locally by design)
node scripts/assets.mjs          # regenerate PDF + social card (needs Playwright, dev only)
```
