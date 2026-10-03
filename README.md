# SmooveOperator Creations website

Current media uses a fictional starter home rather than the Magnolia pitch sample. Rebuild it with `node scripts/concept-media.mjs <concept-home-folder>`. Required inputs and the frame-locking contract are documented in that script. Original generated media and the credit ledger are retained separately from deployed assets. After rebuilding, retake `/sample-site/` as `public/assets/media/sample-site.webp`, then build and verify. Both sides of the lighting comparison are AI-generated illustrations.

smoove-operator.com: listing videos, reels and websites for real estate agents, teams and brokerages. Static site, custom Node build, semantic HTML, self-hosted fonts, and the scrollcraft scroll engine on the home page. No framework.

## Commands

- `npm ci`
- `npm run build`: generates 6 pages in `dist`.
- `npm test`: static checks (links, media, metadata, copy guardrails, CSP, redirects) and form behavior.
- `npm run dev`: local preview on port 4173, served with the production CSP.
- `npm run assets`: social card.
- `node scripts/concept-media.mjs <concept-home-folder>`: rebuilds the current fictional-home clips, posters, stills and lighting comparison.
- `node scripts/media.mjs <walkthrough.mp4> <listing-folder>`: historical listing-based pipeline, retained for reference.

Real forms require Netlify. Local form POSTs intentionally return 503 so the failure message can be checked.

## Sources

- `src/pages.mjs`: page copy and markup for all pages.
- `src/components.mjs`: bar, room list, footer, the one CTA label.
- `public/assets/site.css`: tokens and page styles over `scrollcraft.css`.
- `public/assets/site.js`: engine mount, door prologue, room label, light handle, room list state, reel playback, form.
- `public/assets/scrollcraft.js|css`: the scroll engine, copied unmodified from the scroll-craft skill. Do not edit per page.
- `scrollcraft/builds/creations/BRIEF.md`: the interview, grammar, feeling curve and score this design follows.

## Before publishing

- The sample walk-through, reel and before/after are built from a real listing's photos, which belong to its listing photographer or agent. Get their permission before production.
- The current clips carry the "PREVIEW, NOT FOR PUBLICATION" watermark. After permission, rebuild media from the clean master with `scripts/media.mjs`, then retake `sample-site.webp`.
- Production deploy only when Destin explicitly approves it. Never change DNS or Google Workspace records.
