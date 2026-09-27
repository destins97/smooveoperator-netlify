# Recovery diagnosis and implementation

## Exact source comparison

Production main was confirmed at 5a2ff52dd7cb6083b4b84f47565893d5a86761ce. Preferred Departures revision aeec63eaa1ab06a96033a31059ade85237fe71ad was inspected directly from Git, including pages, components, fonts, CSS and behavior. Both were exported and built locally, on ports 4174 and 4175. Only the QA copy of the dev server received the existing Windows-safe path handling. No approximation from memory.

The preserved source reference is preserve/production-2026-09-27, created locally and on GitHub. Work is isolated on recovery/premium-industrial-commerce. No history was deleted and no vending-machine files were touched.

## Diagnosis

| Area | Departures aeec63e | Production 5a2ff52 | Recovery |
| --- | --- | --- | --- |
| First impression | Large condensed typography and script payoff | Narrow stacked headline plus dominant outlined map | Full-width condensed headline, large script payoff, clear supporting copy |
| Operations | Strong route metaphor, four stages | Clear responsibilities, five-stage disclosure | Five connected stations, owner visible at each step |
| Principles | Distinct mechanical board, public order formulas | Plain list, accurate public principles | Tactile gold ordinal tiles with public sourcing and channel principles |
| Company stage | Some overly definite operational language | More measured responsibility wording | Explicitly developing, seeking direct supplier relationships |
| Form | Personality but multiple required steps | Accessible continuous form with tested states | Continuous form retained, industrial Fit Check presentation restored |
| Profile | Memorable physical-document presentation | Useful facts but visually quiet | Layered live HTML profile linked to accurate one-page resource |
| Motion | Route and calculator interaction | Restrained map entry | Once-only route line, native details and modest document hover |

## Lead method and boundaries

Used Redesign Skill scan, diagnose and targeted-fix sequence. Existing static Node stack retained. Brandkit informed consistency only, with no replacement-logo generation. Brutalist reference supplied mechanical precision, grids and scale; military/CRT/telemetry styling was explicitly rejected. GPT Taste was consulted only for first-impression and wide-headline principles. No randomization, React, Tailwind, GSAP, stock imagery or runtime dependency was added. Caveman was not used.

## Refinement

The first recovery build overlapped the headline and supporting copy because both occupied the same grid row with end alignment. Changed the hero grid to start alignment and verified 375, 390, 1024 and desktop compositions. Optional station detail uses native disclosure so core responsibilities remain visible. Mobile route switches to a continuous vertical line. Broad source and channel principles replace exposed arithmetic or private thresholds.

See TESTING.md for verified measurements and DEPLOYMENT.md for the preview-only release gate.
