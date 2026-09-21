# Verification and release gates

## Completed in the build environment

- Production build generates 10 pages, sitemap, robots, favicon, and social card.
- Automated checks validate every internal page/asset link and capability fragment.
- Unique page titles, descriptions, canonical tags, social metadata, one H1 per page, skip navigation, and unique IDs are checked.
- Form field names, associated labels, Netlify detection markup, honeypot, and URL-encoded POST payload are checked.
- Contact handler is exercised with isolated success, HTTP failure, network failure, and timeout fixtures. It restores controls, focuses the status, and clears inputs only on success.
- Social artwork dimensions are verified at 1200 × 630.
- Draft legal pages are explicitly marked as requiring review.
- Source has no remote browser dependencies, analytics, tracking code, fake testimonials, invented metrics, private addresses, or personal financial information.

Run `npm run build && npm test` to repeat the automated checks.

## Pending hosted browser verification

The cloud browser cannot access this workspace's local server or file URLs. No rendered screenshot, mobile interaction, browser-console, Lighthouse, or real Netlify delivery result is claimed. The existing Netlify deployment was a manual upload; the development environment did not have Netlify CLI authentication.

Before production, review a Netlify draft or pull-request preview:

- At 320, 390, 768, 1024, and 1440px: verify hierarchy, spacing, diagram labels, long text, and no horizontal overflow on every route.
- At 200% zoom: verify readable text, accessible controls, and no clipped form labels.
- Keyboard: skip link, all navigation, mobile menu opening/closing, Escape focus restoration, FAQ toggles, and all form controls.
- Navigate every header/footer/CTA and capability fragment; check the custom 404.
- Test required fields, invalid email, minimum message length, query-prefilled inquiry type, and a network failure with content retained.
- Submit a labeled test to enabled Netlify Forms and confirm actual receipt in the dashboard, including native no-JS submission.
- Check console and network for unexpected errors; verify no broken assets.
- Check reduced motion and no-JavaScript navigation.
- Check deployed redirects, security headers, indexability of production, noindex of preview, canonical origin, sitemap, and social preview.

These remaining checks are release gates, not completed tests.
