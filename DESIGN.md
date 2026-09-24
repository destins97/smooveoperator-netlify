---
name: SmooveOperator
description: "Departures: wholesale posted like a station departures board, black stock and gold flap tiles."
colors:
  black: "#060605"
  board: "#0f0e0b"
  board-2: "#15130f"
  panel: "#0c0b09"
  gold: "#D9B24C"
  gold-hi: "#F6DE8D"
  gold-lo: "#8A6B22"
  text: "#ECE5D2"
  muted: "#A79E86"
  rule: "#2B261B"
  rule-2: "#3A331F"
  err: "#F3B4A8"
typography:
  display:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(60px, 8.6vw, 120px)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.005em"
  script:
    fontFamily: "Yellowtail, Script Fallback, cursive"
    fontSize: "1.08em"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0"
  wordmark:
    fontFamily: "Yellowtail, Script Fallback, cursive"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: 1
  headline-page:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(48px, 6.4vw, 92px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(40px, 5.2vw, 72px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.005em"
  title-band:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 46px)"
    fontWeight: 700
    lineHeight: 1
  result:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(28px, 3.2vw, 44px)"
    fontWeight: 700
    lineHeight: 1.05
  title-station:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(28px, 2.6vw, 36px)"
    fontWeight: 700
    lineHeight: 1
  title:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(24px, 2.3vw, 30px)"
    fontWeight: 700
    lineHeight: 1.05
  title-rule:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(22px, 2.1vw, 28px)"
    fontWeight: 700
    lineHeight: 1.05
  numeral-station:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1
  numeral-flap:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "'tnum' 1, 'lnum' 1"
  status:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.02em"
  label-button:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.13em"
  label-nav:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.14em"
  label-board:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.2em"
  label-manifest:
    fontFamily: "Barlow Condensed, Cond Fallback, Arial Narrow, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.14em"
  lede:
    fontFamily: "Barlow, Barlow Fallback, Arial, sans-serif"
    fontSize: "clamp(17px, 1.4vw, 19px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Barlow, Barlow Fallback, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Barlow, Barlow Fallback, Arial, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.55
  label-field:
    fontFamily: "Barlow, Barlow Fallback, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
  fine:
    fontFamily: "Barlow, Barlow Fallback, Arial, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0"
  tile: "3px"
  track: "4px"
  car: "8px 8px 4px 4px"
  dot: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "22px"
  lg: "36px"
  gutter: "clamp(20px, 4vw, 56px)"
  max-width: "1240px"
  narrow: "760px"
  band: "clamp(56px, 7vw, 88px)"
  section-tight: "clamp(56px, 7vw, 96px)"
  section: "clamp(80px, 10vw, 128px)"
  closing-band: "clamp(72px, 9vw, 112px)"
  page-hero: "clamp(44px, 5.5vw, 80px)"
components:
  button-solid:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.black}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "17px 24px"
  button-solid-hover:
    backgroundColor: "{colors.gold-hi}"
    textColor: "{colors.black}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "17px 24px"
  button-line-hover:
    backgroundColor: "rgba(217,178,76,.08)"
    textColor: "{colors.gold-hi}"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    typography: "{typography.label-button}"
    padding: "12px 0"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label-nav}"
    padding: "8px 0"
  nav-link-current:
    textColor: "{colors.text}"
  nav-cta:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.black}"
    typography: "{typography.label-nav}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  header:
    backgroundColor: "rgba(6,6,5,.9)"
    height: "68px"
  board:
    backgroundColor: "{colors.board}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "22px 24px"
  board-numeral:
    backgroundColor: "#1c1a14"
    textColor: "{colors.gold}"
    typography: "{typography.numeral-flap}"
    rounded: "{rounded.tile}"
    width: "52px"
    height: "64px"
  board-status:
    backgroundColor: "transparent"
    textColor: "{colors.gold-hi}"
    typography: "{typography.status}"
    padding: "6px 0 6px 12px"
  board-status-skipped:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.black}"
  flap-digit:
    backgroundColor: "#1c1a14"
    textColor: "#E9C45C"
    typography: "{typography.numeral-flap}"
    rounded: "{rounded.tile}"
    width: "0.92em"
    height: "1.42em"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 0"
  choice-open:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.body-small}"
    rounded: "{rounded.none}"
    padding: "11px 14px"
  choice-chosen:
    backgroundColor: "rgba(217,178,76,.14)"
    textColor: "{colors.gold-hi}"
  switch-track:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    width: "46px"
    height: "24px"
  form-panel:
    backgroundColor: "{colors.board}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 4vw, 44px)"
  manifest-sheet:
    backgroundColor: "{colors.board}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "clamp(28px, 4vw, 52px)"
  closing-band:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    padding: "clamp(72px, 9vw, 112px) 0"
  skip-link:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.black}"
    padding: "10px 14px"
---

# Design System: SmooveOperator

<!-- Departures replaced the earlier "Gold Standard" banknote world on 2026-09-24. Every value here is read from public/assets/site.css, public/assets/site.js, src/components.mjs and src/pages.mjs as built. docs/BRAND.md is superseded by this file and is kept only as history. -->

## Overview

**Creative North Star: "The Departures Board"**

Wholesale as a well-run station. The path a product travels, the four rules every order passes and who handles each step are posted the way a terminal posts departures: condensed capitals on black, gold numerals on hinged flap tiles, ruled columns, nothing decorated for its own sake. The world earns trust by being legible and on time. A supplier scanning from an account-application queue should be able to read the operation the way a traveler reads a board: row by row, at a glance, with the one thing that matters lit in gold.

Density is board-like rather than editorial. Headlines are tall, tight and uppercase; reading text is plain Barlow in bone on black at a generous 1.6 line height. The only script on the site is the owner's Yellowtail logo and the single word "smoove." in the hero; everything else speaks in Barlow Condensed or Barlow. Surfaces are flat black and near-black board stock separated by hairline rules; depth comes from the flap tile's hinge line and from one stacked document, not from cards and shadows.

Motion has mass and a destination. The route line's gold car travels from station to station once, on a slow in-out curve, and a changed digit flaps once. Nothing cycles, nothing loops, and with reduced motion the finished line is simply there. The world refuses the flat dark SaaS template and the cliche Gatsby black-and-gold: no Art Deco fans, no gradient panels, no glowing cards.

**Key Characteristics:**
- Black stock (#060605) and board (#0f0e0b) with gold #D9B24C as the only accent family.
- Barlow Condensed 700 uppercase for headlines, boards and buttons; Barlow for reading.
- Flap tiles with a dark hinge line carry every numeral that is a value.
- Ruled timetable columns instead of boxed cards.
- One authored motion: the route line's gold car.
- Square buttons, switches, fields and choices; round only for route stations and the car.

## Colors

A near-monochrome black board lit by one gold family in three tones, with warm bone text and a single error pink kept for forms.

### Primary
- **Departure Gold** (`gold`): the one accent. Solid buttons and the header CTA, flap-tile numerals, the route fill and the SmooveOperator station, manifest field names, the hero's script "smoove.", and the one `em.claim` per page. 10.06:1 on black.
- **Lamp Gold** (`gold-hi`): the lit highlight. Links, the live status column, dial readouts, the route car, the chosen answer, focus rings, button hover. 15.20:1 on black.
- **Brass Shadow** (`gold-lo`): gold in shadow, used as structure rather than text. Field underlines, dashed open choices, timetable and ledger top rules, the manifest border, status column edge, menu and switch outlines, the dimmed math when a listing is skipped. 4.06:1 on black, so it clears 3:1 for UI boundaries and large numerals only.

### Neutral
- **Station Black** (`black`): page stock, header glass base, text on gold.
- **Board** (`board`): raised surfaces that hold information: the rules board, the Fit Check panel, the manifest sheet, unvisited Fit Check stations.
- **Under Sheet** (`board-2`): the back sheet in the stacked document preview.
- **Panel** (`panel`): the closing band only.
- **Bone** (`text`): headlines and reading text. 16.12:1 on black, 15.35:1 on board.
- **Timetable Grey** (`muted`): supporting copy, ledes, nav at rest, board column heads, waiting station titles, rows ii to iv when a listing is skipped. 7.60:1 on black, 7.24:1 on board, 7.08:1 over the flap field texture.
- **Hairline** (`rule`): section borders, row dividers, header and footer rules.
- **Hairline Strong** (`rule-2`): board and panel borders, unfilled route and dial tracks, textarea ruling, waiting station dots. Never text (1.62:1 on black).
- **Form Error** (`err`): form errors only. Invalid underlines, error messages, invalid choice outlines, the send-failure status. 11.49:1 on black.

Untokenized literals the build also uses: flap-digit gold `#E9C45C`, the flap tile gradient (`#1c1a14` top, `#070706` hinge, `#17150f` bottom), and the flap field's `#13110c` board with `#050504` hinge lines. Treat them as part of the flap material, not as new palette entries.

### Named Rules
**The One Claim Rule.** Gold marks one `em.claim` per page, in the page's main headline or its key section headline. Every other `em` in a headline stays bone.

**The Error Pink Rule.** `err` appears only on form validation and the send-failure message. It is never decoration, never a status on the rules board, never a highlight.

**The Brass Is Structure Rule.** `gold-lo` draws lines, borders and dimmed numerals. It is never used for body-size text.

## Typography

**Display Font:** Barlow Condensed 600, 700 and 600 italic (with the metric-matched "Cond Fallback" on Arial Bold, then Arial Narrow)
**Body Font:** Barlow 400, 500 and 600 (with the metric-matched "Barlow Fallback" on Arial)
**Script:** Yellowtail 400 (with "Script Fallback" on Brush Script MT), logo and one word only
**License:** Barlow and Barlow Condensed are SIL Open Font License files served from `/fonts`; Yellowtail is the owner's logo face.

**Character:** Barlow Condensed is the departures board: narrow, upright capitals that stack tall and read at distance. Barlow is its quiet reading voice from the same family, so board and paragraph never argue. Yellowtail is the neon sign over the door.

### Hierarchy
- **Display** (700, clamp(60px, 8.6vw, 120px), line-height 0.88, uppercase): the home hero only, "Wholesale, made" over the gold script "smoove.".
- **Script** (Yellowtail 400, 1.08em of the display, line-height 1.02, gold): the single word "smoove." inside the hero headline.
- **Wordmark** (Yellowtail 400, 34px; 30px at 1000px and below): the logo in header, footer and manifest head.
- **Page headline** (700, clamp(48px, 6.4vw, 92px), line-height 0.92, uppercase, max 20ch): inner page heroes.
- **Headline** (700, clamp(40px, 5.2vw, 72px), line-height 0.95, uppercase): section h2s.
- **Band title** (700, clamp(30px, 3.4vw, 46px), line-height 1, uppercase, max 26ch): route line bands.
- **Result** (700, clamp(28px, 3.2vw, 44px), line-height 1.05, uppercase): the rules board's one-line verdict.
- **Station title** (700, clamp(28px, 2.6vw, 36px), uppercase): route station names.
- **Title** (700, clamp(24px, 2.3vw, 30px), line-height 1.05, uppercase): timetable items; the ledger (24px), step titles and legal h2s (30px) sit on the same ramp.
- **Rule title** (700, clamp(22px, 2.1vw, 28px), line-height 1.05, uppercase): rules board rows.
- **Station numeral** (600 italic, 24px): route station numerals i. to iv. The only italic in the system.
- **Flap numeral** (700, 30px, tabular lining figures; 24px under 620px): rules board numerals (lowercase roman) and the sample math digits.
- **Status** (600, 19px, line-height 1.25, 0.02em): the live status column. Sentence case.
- **Button label** (700, 16px, 0.13em, uppercase).
- **Nav label** (600, 15px, 0.14em, uppercase); footer nav at 0.12em; Fit Check stations at 14px.
- **Board head** (600, 13px, 0.2em, uppercase, muted): column heads on the rules board.
- **Manifest label** (700, 15px, 0.14em, uppercase, gold): profile fact names.
- **Lede** (Barlow 400, clamp(17px, 1.4vw, 19px), muted, max 52ch); the home hero lede is bone at clamp(18px, 1.6vw, 21px), line-height 1.5, max 34ch.
- **Body** (Barlow 400, 17px, line-height 1.6): all reading text. Intros cap at 44ch to 52ch, legal copy at 66ch.
- **Body small** (Barlow 400, 15.5px, line-height 1.55): station descriptions, band notes, choices.
- **Field label** (Barlow 600, 15px, line-height 1.4): form labels, legends and dial labels.
- **Fine** (Barlow 400, 13.5px): the footer's legal line and the manifest foot, capped at 75ch.

### Named Rules
**The Upright Emphasis Rule.** Headline emphasis is upright 700, never italic. An `em` in a stacked headline breaks onto its own line in bone; only `em.claim` turns gold.

**The Board Voice Rule.** Barlow Condensed 700 uppercase is for headlines, boards and buttons. Long reading text is never uppercase and never condensed; status lines and verdict sentences stay in sentence case at 19px.

**The One Script Rule.** Yellowtail appears on the `.wordmark` logo and the single word "smoove." in the hero headline. Nowhere else.

**The Italic Numeral Rule.** Barlow Condensed 600 italic is reserved for station and step numerals. Rule numerals on the board are upright 700 on flap tiles.

## Layout

A single centered column, `min(1240px, 100% - 2 x gutter)`, with a fluid gutter of clamp(20px, 4vw, 56px); legal pages narrow to 760px. The header is sticky at 68px with `scroll-padding-top: 88px` so anchors land below it.

Vertical rhythm is set per section type: full sections clamp(80px, 10vw, 128px), tight sections clamp(56px, 7vw, 96px), route bands clamp(56px, 7vw, 88px), page heroes clamp(44px, 5.5vw, 80px), the closing band clamp(72px, 9vw, 112px). Inside components the recurring steps are 8, 12, 14, 18, 22, 28 and 36px; row padding on boards and ledgers is 22px.

The home hero is a 1.2fr / 0.8fr grid aligned to the bottom: headline left, lede, two buttons and the permit line right. Two-column content grids (rules board with its sample panel, papers, contact, the suppliers "first conversation" block) run at roughly 0.8 to 1.6 fr ratios with clamp(28px, 6vw, 80px) gaps. Headlines stack above their intro text; section headers are not split into a heading column and an intro column.

Measure is enforced in ch: hero lede 34ch, intros 44ch to 52ch, timetable text 46ch, station descriptions 30ch, band notes 65ch, legal 66ch, fine print 75ch.

Breakpoints, from the build: 1000px (nav collapses to the menu), 980px (rules board stacks and the sample panel becomes a pinned strip), 900px (split, three-column timetable and contact go to one column), 860px (hero, papers, manifest go to one column), 760px (route line turns vertical, footer stacks), 700px (ledger rows stack), 640px (timetable to one column), 620px (compact board rows, single-column form rows, full-width form buttons), 520px (manifest facts stack).

## Elevation & Depth

Flat by default. Depth is tonal: black stock, a slightly lifted board surface for information, and 1px hairlines in `rule` and `rule-2` between everything. The flap tile's hinge line is the world's own depth cue, a 2% dark band through the middle of every tile.

### Shadow Vocabulary
- **Car shadow** (`box-shadow: 0 6px 14px rgba(0,0,0,.7)`; the Fit Check car uses `0 5px 12px`): lifts the moving car off the track.
- **Document drop** (`box-shadow: 0 28px 48px -18px rgba(0,0,0,.9)`): under the stacked profile preview only.
- **Header glass** (`background: rgba(6,6,5,.9); backdrop-filter: saturate(1.2) blur(10px)`): the sticky header over scrolling content, with a `rule` hairline below.
- **Current-page underline** (`box-shadow: inset 0 -2px 0 gold`): the current nav link.

### Named Rules
**The Only Things That Cast Rule.** Only moving objects (the cars) and the one physical document cast shadows. Boards, panels, buttons and cards never do.

## Shapes

Square is the default. Buttons, switches, the switch knob, dial thumbs, fields, choices, boards, panels and the manifest sheet all have 0 radius. Flap tiles round only 3px, like a real hinged tile. Route and progress tracks round 4px. Route stations are full circles (22px with a 4px ring; 16px with a 3px ring on the Fit Check). The car is the one soft silhouette (8px top corners, 4px bottom, with a black window band and wheel stubs).

Borders carry meaning by style: solid hairlines divide, `gold-lo` 2px top rules head each timetable item and the ledger, dashed `gold-lo` marks an answer that is still open, and a solid `gold-hi` border marks the one you chose. The profile preview is the only rotated object (the page at -2deg, its under sheet at a further 4.5deg).

## Components

### Buttons
Square and lettered like a board.
- **Shape:** square (0), 1px gold border, padding 17px 24px, Barlow Condensed 700 16px at 0.13em, uppercase, with a drawn 18px arrow.
- **Solid:** gold with black text; hover lifts to `gold-hi`.
- **Line:** transparent with gold text; hover adds an 8% gold wash and `gold-hi` text.
- **Text:** no border, gold text, 12px vertical padding; hover `gold-hi`.
- **Hover / Focus / Active:** the arrow slides 4px right over 360ms; active nudges down 1px; focus is the global 2px `gold-hi` outline at 4px offset; disabled drops to 55% opacity with a progress cursor.

### Header, Navigation and Footer
- **Header:** sticky, 68px, header glass with a `rule` hairline. Gradient Yellowtail wordmark left (hover brightens 15%).
- **Nav:** Barlow Condensed 600 15px, 0.14em, uppercase, `muted` at rest, `text` on hover; the current page is `text` with a 2px gold inset underline.
- **Nav CTA:** "Start the Fit Check" in solid gold. On the Fit Check page itself it becomes an outline (`gold-hi` text, 1px gold inset ring), because you are already there.
- **Mobile (1000px and below):** a square "Menu" toggle with a `gold-lo` border and two gold lines that rotate 90deg when open. The nav drops as a full-width black sheet revealed by a clip-path wipe over 360ms, links 16px with `rule` dividers, CTA full width. Escape closes and returns focus. Without JavaScript the nav simply wraps.
- **Footer:** `rule` top border, wordmark and one muted line, a Barlow Condensed nav at 0.12em, and the fine print under its own hairline at 13.5px, max 75ch.

### The Route Line (signature)
Stations on a transit line, the page's one authored moment.
- **Structure:** numbered stations (italic numeral, station title, "Handled by" line, 30ch description) on a 4px `rule-2` track with a gold fill. The SmooveOperator station has a solid gold dot and gold numeral; other dots are black with a gold ring.
- **Orientation:** horizontal across four (or three) columns on desktop; at 760px and below it turns vertical, stations left-aligned with dots in a 44px left gutter and the track running down through them. The script measures the dots and decides the orientation.
- **Motion:** when the line is a quarter in view, the gold car waits 250ms, then travels station to station on `cubic-bezier(.65,0,.35,1)`; the fill grows with it. Each station lights 1000ms after the car departs for it, then the car pauses 220ms. Runs once.
- **Waiting stations:** never hidden. Titles and "Handled by" names drop to `muted` (7.60:1), numerals to `gold-lo`, dots to a `rule-2` ring, until the car arrives.
- **Reduced motion or no IntersectionObserver:** the finished line, fill complete, car parked at the last station, every station lit. Without JavaScript the car is hidden and the track shows full (on phones the track is hidden).

### The Rules Board (signature)
The four buy rules posted like departures, with a sample listing running through them.
- **Board:** `board` surface, 1px `rule-2` border, a muted board-head row (Rule, What it means, This sample) and rows in a 64px / 1fr / 230px grid, 22px 24px padding, `rule` dividers.
- **Flap numeral:** a 52 x 64px tile (40 x 52px under 620px) with the hinge gradient, gold upright 700 lowercase roman numeral.
- **Rule:** station-scale title, muted description, and for rule iii the formula in a bordered Barlow Condensed chip in `gold-hi`.
- **Live status column:** `gold-hi` 600 19px with a 2px `gold-lo` left edge. The original verdict wording: rule i reads "Marketplace isn’t selling. Continue." or "Marketplace is selling. Skip this listing."; rule ii "First order: 50 to 100 units"; rule iii "50 units a month"; rule iv "Reorder only after these sell through." Numbers update live.
- **Skipped state:** rule i's status fills solid gold with black text and a gold edge. Rows ii to iv recolor their numerals, titles, status and formula to `muted` with a `rule-2` edge. The math dims (flap digits to `gold-lo`), and the result line switches from "A first order of 50 to 100 units" to "No order. The listing is skipped."
- **Announcement:** a polite live region speaks the outcome 600ms after the last change.
- **Without JavaScript:** a two-column board with no status column, and a plain sentence explaining the formula.

### Sample Panel
- **Desktop:** the right column beside the board, sticky at 100px: a heading, "Sample numbers only" note, the switch and two dials.
- **Phones and tablets (980px and below):** a compact strip pinned at 69px, directly under the header, on black with a `gold-lo` bottom rule while the rules scroll beneath. Labels swap to short visual forms ("Marketplace sells this listing", "Sales a month", "Sellers"); the full labels stay as the accessible names. Dials sit side by side.

### Flap Digits
- **Style:** each character is its own tile, 0.92em x 1.42em, 3px radius, the hinge gradient, flap gold `#E9C45C` numerals at 30px (24px under 620px), 3px apart, padded with blank tiles to a fixed width.
- **Motion:** only a digit that changed flaps, once: `scaleY` 1 to 0.1 to 1 over 140ms, ease-out. No random cycling, no cascade. Reduced motion changes the digit with no flap.

### Timetable Grids
Items posted in ruled columns, never boxed as cards.
- **Style:** two columns (or three over two on a six-track grid), each item headed by a 2px `gold-lo` top rule, 22px above and 34px below, a condensed uppercase title and a muted paragraph at 46ch. One column at 640px (three-up at 900px).

### Ledger
- **Style:** a 2px `gold-lo` rule over rows of 1fr / 1.4fr: condensed 24px title left, muted text right, `rule` hairline under each row, 22px padding. Stacks at 700px.

### Manifest Profile Sheet
- **Style:** `board` surface with a 1px `gold-lo` border, padding clamp(28px, 4vw, 52px). Head row with the wordmark and a muted uppercase meta line over a 2px `gold-lo` rule. Facts in two columns, each a 170px gold manifest label beside its value on a `rule` hairline. Purchasing policy and commitments in two lists, a three-part direction row with gold uppercase heads, and a fine foot line.
- **Print:** prints as one clean letter page: white paper, `#8A6B22` accents, dark text, header, footer and heroes removed.

### Stacked Document Preview
- **Style:** the real profile image at up to 440px, a 1px `gold-lo` border and the document drop shadow, rotated -2deg over an under sheet in `board-2` rotated a further 4.5deg. Beside it, document links as ruled rows: a gold 22px icon, a condensed title and a muted small line; the arrow slides 4px and the title turns `gold-hi` on hover.

### Inputs / Fields
- **Text fields and select:** transparent, square, a 1px `gold-lo` underline, 10px vertical padding, bone text; focus turns the underline `gold-hi` with no glow. The select draws its own gold chevron.
- **Textarea:** ruled like a manifest page, a `rule-2` line every 33px with a 33px line height so each line of the message sits on a rule; min 134px, vertical resize.
- **Labels:** Barlow 600 15px bone; "(optional)" in muted 500; help text 14px muted.
- **Choices:** open answers are dashed 1px `gold-lo` boxes, 11px 14px padding, 15.5px; hover turns the dash gold. The chosen answer prints solid: `gold-hi` border, 14% gold wash, `gold-hi` text.
- **Error:** invalid fields take an `err` underline, invalid choice groups an `err` outline, and a 14px `err` message is attached and referenced by `aria-describedby`. Focus moves to the first invalid field.

### Switch and Dials
- **Switch:** a square 46 x 24px track with a `gold-lo` border and a 16px square muted knob. On, the border turns gold and the knob slides 22px on the travel curve and lights to `gold-hi`. It is a real checkbox with `role="switch"`.
- **Dials:** range inputs with a 2px track filled gold up to the value, `rule-2` beyond; a square 12 x 26px black thumb with a 2px `gold-hi` border that stretches slightly while held. The readout is Barlow Condensed 700 20px `gold-hi`, tabular.

### Fit Check Progress
- **Style:** the route line at three stations ("You", "Your terms", "Anything else"): 16px dots with 3px `rule-2` rings on `board`, a 4px track and a smaller gold car (28 x 24px). Done stations fill gold; the current station has a gold ring; labels go from muted to bone.
- **Motion:** the car sits on the current step and travels to the next on `cubic-bezier(.65,0,.35,1)` over 600ms; transitions switch on only after the first layout so the car never slides in on load. Each new step enters with a 14px slide and fade over 360ms. Steps never flip.
- **After sending:** the form is replaced by a confirmation with a seal mark whose check stroke draws over 600ms.

### Flap Field Texture
- **Style:** an empty departures board painted in CSS behind the right side of page heroes and the closing band: 34 x 52px tiles on `#13110c` with black gaps and a dark hinge line, masked to fade in from the left, at 80% opacity (full width at 45% under 860px). Texture only; it carries no characters and sits under text that still reads at 7.08:1 (muted) and 15.01:1 (bone).

### Seal Line
- **Style:** a drawn 34px gold seal (double ring, check) beside "California seller’s permit on file" in Barlow 500 15px bone. It appears in the home hero and the contact aside.

## Do's and Don'ts

### Do:
- **Do** set headlines, boards and buttons in Barlow Condensed 700 uppercase, and all reading text in Barlow 400 at 17px / 1.6.
- **Do** keep headline emphasis upright; mark exactly one `em.claim` per page in gold.
- **Do** put every numeral that is a value on a flap tile with the hinge line.
- **Do** post lists as ruled timetable columns with `gold-lo` top rules, not boxed cards.
- **Do** keep waiting route stations readable in `muted`; only the dot and numeral wait.
- **Do** flap a digit once, only when it changes, and never under reduced motion.
- **Do** use `cubic-bezier(.65,0,.35,1)` for anything that travels (cars, switch knob, step entrance) and `cubic-bezier(.4,0,.2,1)` for color and border state at 180ms or 360ms.
- **Do** leave open answers dashed and print the chosen answer solid.
- **Do** keep the hero headline exactly "Wholesale, made smoove." with "smoove." in gold Yellowtail.
- **Do** state the only credential as "California seller’s permit on file", with no number shown.
- **Do** measure contrast from the tokens: bone and muted clear 7:1 on every surface; `gold-lo` is for lines and large numerals only.

### Don't:
- **Don't** use a text gradient anywhere except the `.wordmark` logo.
- **Don't** use Yellowtail for anything but the logo and the single word "smoove.".
- **Don't** use italic outside station and step numerals, and never italicize headline emphasis.
- **Don't** use `err` for anything but form errors.
- **Don't** add eyebrows or kickers above headlines, and don't split a section header into a heading column and an intro column.
- **Don't** set long reading text in uppercase or in Barlow Condensed.
- **Don't** round buttons, switches, fields or choices.
- **Don't** add shadows to boards, panels, cards or buttons; only the cars and the stacked document cast.
- **Don't** cycle or randomize flap digits, loop the route car, or flip the Fit Check steps.
- **Don't** reach for Art Deco fans, sunbursts, gradient panels or glow: this is a departures board, not a Gatsby party.
- **Don't** write em dashes or en dashes in site copy.
- **Don't** write "Amazon" or "FBA" anywhere, or show any marketplace or brand logo.
- **Don't** invent facts, figures, testimonials, partners or credentials.
