# Recovery preview review: September 27, 2026

Preview: https://deploy-preview-8--smooveoperator.netlify.app
Pull request: https://github.com/destins97/smooveoperator-netlify/pull/8 (draft)
Implementation commit: 3b51aecb91a6f938d4a286ae21862ae663767fbb
Preview deploy: 6ab8ea2d98c19600082010f5, ready, deploy-preview context.

All 11 deployed routes returned 200 with unique titles, preview noindex metadata, custom-domain canonicals and the existing CSP. A missing route returned the custom 404. Social card, PDF, texture, Yellowtail font, sitemap and robots returned 200. Netlify header and redirect checks passed.

The preview form displayed its success message, cleared fields and focused the confirmation. Netlify backend receipt was confirmed for labeled test SMOOVE-RECOVERY-QA-20260927: submission 6ab8ea6323cb4616b5f7557e at 2026-09-27T10:05:23.199Z. The form has all 12 expected fields and honeypot protection. No site console errors were returned in the preview contact check. The hosting review drawer rendered an unavailable frame; site functionality was unaffected.

An actual script-blocked iframe verified that mobile navigation remains visible and native form validation focuses the first required field. A complete native no-JavaScript submission and mailbox notification delivery were not tested. Reduced-motion behavior is source-reviewed and covered by the form test environment; no OS-level preference change was made.

Production remains on 5a2ff52dd7cb6083b4b84f47565893d5a86761ce, deploy 6ab8b1a09ea4800008737c6b. The preservation branch remains available. Archived vending files and DNS were not changed.

Local visual evidence: qa-artifacts/recovery/comparison.png, departures-1440.png, production-1440.png, recovery-1440.png, recovery-375.png and exact-width recovery audit images. The recovery restores Departures scale and material character while preserving the current version's accessible controls and precise responsibility boundaries. The first review exposed overlapping hero columns; final top alignment resolves it across the inspected sizes.

Approval gate: only after Destin says "Ship it", merge this recovery PR into main and verify the resulting production deployment.
