# Recovery verification record

## Automated and browser checks

- Build produces 11 pages. 396 static checks and 51 form behavior assertions pass.
- Form tests cover required fields, error focus/descriptions, duplicate submission prevention, payload, success, HTTP/network/timeout failure and preserved answers.
- Browser checks confirmed mobile menu opening, Escape closing with focus return, route and operating-board keyboard disclosures, three required-field errors and retained answers after deliberate local HTTP 503.
- All 11 routes measured without horizontal overflow at 375, 390, 769, 1024, 1440 and 1920 CSS pixels. Windows rounded the interactive 768 request to 769; a separate exact 768 Lighthouse render was captured and visually inspected.
- Exact homepage captures and audits at 375, 390, 768, 1024, 1440 and 1920. Both historical versions were built and captured at 1440 for direct comparison.
- Hero overlap found during review was corrected by top-aligning the hero grid. Final desktop and mobile screenshots show clean spacing and readable type.
- Social card is 1200 by 630. One-page PDF was regenerated and visually rendered, using readable standard PDF fonts with protected Yellowtail artwork.
- Exact opening headline and protected logo treatment retained. No runtime framework or dependency additions.

## Lighthouse lab results

| Viewport | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| 375, mobile throttling | 98 | 100 | 100 | 100 |
| 390, desktop preset | 100 | 100 | 100 | 100 |
| 768, desktop preset | 100 | 100 | 100 | 100 |
| 1024, desktop preset | 100 | 100 | 100 | 100 |
| 1440, desktop preset | 100 | 100 | 100 | 100 |
| 1920, desktop preset | 100 | 100 | 100 | 100 |

Current production baseline: 100 across desktop categories. Departures baseline: 99 Performance, 100 remaining categories. Recovery layout shift was below 0.001 on desktop and mobile. Lighthouse report generation completed successfully; Windows temporary-profile cleanup emitted EPERM after reports were saved.

## Evidence limits

Lab scores are not field guarantees or a full WCAG certification. No-JavaScript and reduced-motion fallbacks are implemented and source-reviewed; native end-to-end form receipt and mailbox notification delivery are separate checks. Preview hosting may inject a review toolbar whose requests conflict with the site's restrictive CSP; do not weaken site security to accommodate that toolbar. QA files are excluded from Git. Live preview verification belongs in the final review record before approval. Production publication has not been authorized.
