# SmooveOperator Creations handoff

October 2026 pivot: the Amazon FBA supplier site is replaced by a scroll-driven site for a real estate media business. Same repository, Netlify project, domain and static Node build. No framework.

## Protected identity

Gold Yellowtail "Smoove Operator" wordmark with its existing gradient, plus a "CREATIONS" line. Black and gold. The supplier slogan is retired; the working h1 "Making a good house look great." stays until Destin names a slogan.

## How the home page works

Four rooms, defined in `scrollcraft/builds/creations/BRIEF.md`:

1. Front door: the opener (key, unlock, door swing) plays once on load, then the scroll scrubs the rest of the walk-through from the exact frame where the door stopped. A label names the room from the film's clock.
2. The light: listing photo against the golden-hour frame, revealed by scroll until the visitor takes the handle.
3. Three formats: a lateral rail of the film, the reel and the sample website.
4. Sign-in sheet: the request form, on a paper card, with the three-step process.

`public/assets/scrollcraft.js|css` is the engine, copied unmodified. Page-specific behavior lives in `site.js` and `site.css`.

## Content truth

Sample work is labeled AI-assisted and built from listing photos. No invented clients, numbers or testimonials. The sample listing's address, price and agent never appear; `scripts/check.mjs` enforces this.

## Open items

- Permission from the sample listing's photographer or agent before production.
- Clean (unwatermarked) media rebuilt with `scripts/media.mjs` after permission, then a fresh `sample-site.webp` screenshot.
- Destin's final slogan.
- A real phone check of the door prologue and scrub on iOS Safari.
