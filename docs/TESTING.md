# Verification record

## Completed

- Build: 11 pages, including restored About, Capabilities and Operations and retained Profile.
- 399 static checks cover internal links, IDs, labels, metadata, form contract, copy guardrails and assets.
- 51 form behavior assertions cover required fields, focus, original descriptions, duplicate prevention, payload, success, HTTP/network/timeout failures and retained answers.
- Social image: 1200 by 630 pixels.
- Profile PDF: one page, visually rendered with Poppler after correcting invisible embedded WOFF2 fonts. Uses readable standard PDF fonts and the exact Yellowtail wordmark rendered at high resolution.
- Every route checked for overflow at measured 375, 390, 768 and 1440 CSS pixels. The requested 1024 viewport rounded to 1023 and 1025 on the Windows host; both bracketing sizes were inspected.
- Desktop/mobile homepage and mobile contact captures visually reviewed. Independent Impeccable review cleared visual quality and credibility; documentation fix completed with final disposition ship.
- Mobile menu and Escape focus return verified. Browser validation errors and retained answers after local HTTP 503 verified.
- Preview form showed success and focused confirmation. Backend receipt confirmed: 6ab8af631c20d1c8d6f10d6a.
- Final hero DOM text is exactly Wholesale, made Smoove. Both emphasized word and logo compute to Yellowtail.

## Night Route release, 2026-09-27

- `npm run build` and `npm test`: 385 site checks and 51 form assertions pass.
- All 11 routes loaded in Chromium at 1440 and 390 CSS pixels behind the production Content Security Policy: no console errors or policy violations (the 404 route reports its own expected 404), no horizontal overflow.
- Homepage outline to suppliers prefill verified: choosing Authorized distributor and As you approve lands on `/suppliers/#supplier-form` with the message and channels fields filled from known values.
- Light trails verified to render a still frame under reduced motion, pause offscreen and expose a pause control.
- Dependency audit: zero vulnerabilities at inspection.

## Lighthouse

Local mobile homepage and contact initially scored 99 Performance, 100 Accessibility, 100 Best Practices and 100 SEO. Desktop scored 100 in all four categories. Mobile LCP was approximately 1.7 seconds and CLS 0. Final slogan audits are saved separately in qa-artifacts.

## Evidence limits

Local qa-artifacts contains screenshots, Lighthouse JSON and responsive measurements; excluded from Git. These lab results are not field guarantees or full WCAG certification. Reduced-motion and no-JavaScript fallback are implemented and source-reviewed; a real no-JavaScript form submission and mailbox notification delivery have not been verified. The Netlify preview review drawer conflicts with the preserved restrictive CSP; verify production independently for site errors.

After merge, verify the deployed commit and custom domain, then record the result in the handoff. Repeat relevant tests after implementation changes.
