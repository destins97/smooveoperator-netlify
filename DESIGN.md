---
name: SmooveOperator
description: "Gold Standard: wholesale credibility printed as security engraving, black stock and brushed foil."
colors:
  black: "#050504"
  panel: "#0e0d0a"
  panel-2: "#15130e"
  foil: "#D9B24C"
  foil-hi: "#F6DE8D"
  foil-lo: "#8A6B22"
  text: "#EFE8D6"
  muted: "#A99F86"
  rule: "#2d2715"
  rule-2: "#3a321c"
  err: "#F3B4A8"
typography:
  display:
    fontFamily: "Bodoni Moda, Bodoni Fallback, Didot, Times New Roman, serif"
    fontSize: "clamp(54px, 7.8vw, 112px)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 18"
  headline-page:
    fontFamily: "Bodoni Moda, Bodoni Fallback, Didot, Times New Roman, serif"
    fontSize: "clamp(44px, 5.6vw, 80px)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.015em"
    fontVariation: "'opsz' 18"
  headline:
    fontFamily: "Bodoni Moda, Bodoni Fallback, Didot, Times New Roman, serif"
    fontSize: "clamp(40px, 4.8vw, 70px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontVariation: "'opsz' 18"
  title-band:
    fontFamily: "Bodoni Moda, Bodoni Fallback, Didot, Times New Roman, serif"
    fontSize: "clamp(28px, 3vw, 40px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 18"
  result:
    fontFamily: "Bodoni Moda, Bodoni Fallback, Didot, Times New Roman, serif"
    fontSize: "clamp(26px, 3vw, 40px)"
    fontWeight: 500
    lineHeight: 1.15
    fontVariation: "'opsz' 18"
  title:
    fontFamily: "Bodoni Moda, Bodoni Fallback, Didot, Times New Roman, serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.15
    fontVariation: "'opsz' 18"
  title-rule:
    fontFamily: "Bodoni Moda, Bodoni Fallback, Didot, Times New Roman, serif"
    fontSize: "clamp(22px, 2.2vw, 27px)"
    fontWeight: 500
    lineHeight: 1.15
    fontVariation: "'opsz' 18"
  numeral:
    fontFamily: "Bodoni Moda, Bodoni Fallback, Didot, Times New Roman, serif"
    fontSize: "44px"
    fontWeight: 400
    lineHeight: 1
    fontVariation: "'opsz' 18"
  numeral-rule:
    fontFamily: "Bodoni Moda, Bodoni Fallback, Didot, Times New Roman, serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.25
    fontVariation: "'opsz' 18"
  lede:
    fontFamily: "Manrope, Manrope Fallback, Arial, sans-serif"
    fontSize: "clamp(18px, 1.7vw, 22px)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Manrope, Manrope Fallback, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "Manrope, Manrope Fallback, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Manrope, Manrope Fallback, Arial, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.65
  label-button:
    fontFamily: "Manrope, Manrope Fallback, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
  label-nav:
    fontFamily: "Manrope, Manrope Fallback, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  label-field:
    fontFamily: "Manrope, Manrope Fallback, Arial, sans-serif"
    fontSize: "14.5px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
  label-fact:
    fontFamily: "Manrope, Manrope Fallback, Arial, sans-serif"
    fontSize: "11.5px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.1em"
  mono-formula:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
  mono-readout:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1
    fontFeature: "'tnum' 1"
  script-wordmark:
    fontFamily: "Yellowtail, Script Fallback, cursive"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  max-width: "1240px"
  narrow: "760px"
  header: "68px"
  scroll-offset: "88px"
  section: "clamp(88px, 10vw, 128px)"
  section-tight: "clamp(56px, 7vw, 96px)"
  band: "56px 52px"
  hero-top: "clamp(56px, 7vw, 96px)"
  hero-bottom: "clamp(72px, 9vw, 120px)"
  page-hero: "clamp(40px, 5vw, 72px)"
  button-gap: "14px"
  field-gap: "18px"
components:
  button-solid:
    backgroundColor: "{colors.foil}"
    textColor: "{colors.black}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "18px 24px"
  button-solid-hover:
    backgroundColor: "{colors.foil-hi}"
    textColor: "{colors.black}"
  button-line:
    textColor: "{colors.foil}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "18px 24px"
  button-line-hover:
    backgroundColor: "rgba(217, 178, 76, 0.08)"
    textColor: "{colors.foil-hi}"
  button-text:
    textColor: "{colors.foil}"
    typography: "{typography.label-button}"
    padding: "12px 0"
  button-text-hover:
    textColor: "{colors.foil-hi}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label-nav}"
    padding: "8px 0"
  nav-link-current:
    textColor: "{colors.text}"
  nav-cta:
    backgroundColor: "{colors.foil}"
    textColor: "{colors.black}"
    typography: "{typography.label-nav}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  nav-cta-current:
    textColor: "{colors.foil-hi}"
  site-header:
    backgroundColor: "rgba(5, 5, 4, 0.88)"
    height: "{spacing.header}"
  field:
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 0"
  field-label:
    textColor: "{colors.text}"
    typography: "{typography.label-field}"
  field-error:
    textColor: "{colors.err}"
    typography: "{typography.caption}"
  choice:
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "11px 14px"
  choice-selected:
    backgroundColor: "rgba(217, 178, 76, 0.12)"
    textColor: "{colors.foil-hi}"
  switch-track:
    rounded: "{rounded.none}"
    width: "46px"
    height: "24px"
  switch-thumb-on:
    backgroundColor: "{colors.foil-hi}"
    size: "16px"
  dial-output:
    textColor: "{colors.foil-hi}"
    typography: "{typography.mono-readout}"
  formula-chip:
    textColor: "{colors.foil-hi}"
    typography: "{typography.mono-formula}"
    rounded: "{rounded.none}"
    padding: "7px 10px"
  engraved-note:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.none}"
    padding: "clamp(58px, 6vw, 80px) clamp(40px, 5.5vw, 84px) clamp(54px, 5.5vw, 74px)"
  stamp:
    backgroundColor: "rgba(14, 13, 10, 0.82)"
    textColor: "{colors.foil-hi}"
    rounded: "{rounded.none}"
    padding: "9px 10px 8px 14px"
  form-panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 4vw, 44px)"
  profile-sheet:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.none}"
    padding: "clamp(28px, 4vw, 52px)"
  cta-band:
    backgroundColor: "{colors.panel}"
    padding: "clamp(72px, 9vw, 112px) 0"
---

# Design System: SmooveOperator

## Overview

**Creative North Star: "The Gold Standard"**

The site is an engraved instrument of trust. Every page is printed on near-black stock with brushed-foil gold, and the proof a supplier needs (the four written buy rules, the commitments, the seller's permit line) is set the way a banknote sets its fine print: framed in guilloche rope, backed by microprint, sealed with a latent mark. The world refuses the category default of a flat dark software template with icon cards and neon glow. Nothing floats, nothing is rounded, nothing glows; depth comes from engraving, hairlines and paper stacked on paper.

Density is calm and editorial. A high-contrast Didone display face carries the headlines, a quiet grotesque carries the reading, a monospace appears only where arithmetic is shown, and a single script face signs the name. Foil is the material of the instrument (buttons, rule numerals, hairlines, the engraved frame), while in headline type it is spent on exactly one claim per page. Motion is slow and physical: a guilloche rosette that turns and leans toward the pointer, a foil sheen, a seal that glints as it scrolls past, and one authored moment in which the note engraves its own frame and prints the rules in.

This file records the system as shipped in `public/assets/site.css`, `public/assets/site.js`, `src/components.mjs`, `src/engraving.mjs` and `src/pages.mjs`. It supersedes `docs/BRAND.md`, which describes the pre-redesign system (Montserrat, matte gold #C5A028, a blue accent, rounded panels) and is kept only as history.

**Key Characteristics:**
- Near-black stock, brushed-foil gold in three weights, bone text; dark only (`color-scheme: dark`).
- Bodoni Moda pinned at optical size 18 for all display type; Manrope for reading; JetBrains Mono only for formulas and numeric readouts; Yellowtail only for the wordmark and "smoove.".
- Security-printing devices generated at build time: guilloche rope bands, rosette corners, microprint, a latent seal.
- Square everything: zero radius on buttons, fields, switches, panels and the stamp.
- Structure drawn with hairlines, perforations and diamond nodes instead of cards and shadows.
- Lowercase roman numerals (i., ii., iii., iv.) for sequence.
- Content is visible by default; motion only ever adds.

### Motion grammar

Two easings and three durations carry every state change: the standard ease `cubic-bezier(0.4, 0, 0.2, 1)` at 180ms (color and border changes), 360ms (menus, arrows, switch track, step entrance) and 600ms (the success tick), and an expo-out `cubic-bezier(0.16, 1, 0.3, 1)` for things that land (switch thumb, stamp, step entrance, the authored moment). Ambient motion is limited to three material effects: the hero rosette canvas (six counter-rotating rope rings, about one frame in two, leaning toward the pointer by depth, paused off screen and in hidden tabs), the 9s foil sheen on the hero "smoove.", and the latent seal's scroll-linked glint (CSS view timeline, only where `animation-timeline` is supported). Page heroes carry a still quarter of the rosette, drawn once.

**The One Moment Rule.** The site has one authored entrance: the engraved note draws its rope frame clockwise (top, right, bottom, left, 900ms each, staggered 110ms), the rosette corners and microprint arrive, then the four rules print in one after another (opacity and a 6px blur clearing over 650ms, 110ms apart), followed by the sample dials and the result. It is armed only when the note starts below the fold, so nothing a visitor has already seen is ever hidden. No other section gets an entrance animation.

### Accessibility floor

WCAG 2.2 AA is the floor. Bone on black is 16.7:1, muted on black 7.8:1, foil on black 10.1:1, black on foil 10.1:1. Every page has a skip link, one h1 and a main landmark. Focus is a 2px foil-highlight outline offset 4px on everything; custom controls (switch, choices) move the ring onto their visible part. Anchors and focus clear the sticky header with `scroll-padding-top: 88px`. The mobile menu closes on Escape and returns focus to its toggle. The sample calculator announces its result through a polite live region, debounced 600ms, and short visual labels on phones keep the full label as the accessible name. The Fit Check works as one long native form without JavaScript; with it, errors are written inline, focus moves to the first problem, and a failed send keeps every answer.

Under `prefers-reduced-motion: reduce` the rosette draws once and stops, the sheen and glint are removed, the authored moment never arms, smooth scrolling is off, step changes do not animate, and all remaining transitions and animations collapse to 0.01ms.

### Words on the instrument

The engraving carries only true phrases. Microprint reads "SMOOVEOPERATOR · FOUR WRITTEN BUY RULES · APPLIED TO EVERY ORDER · CALIFORNIA SELLER'S PERMIT ON FILE"; the seal ring reads "WRITTEN BUY RULES · APPLIED TO EVERY ORDER · SELLER'S PERMIT ON FILE". The only public credential anywhere in the system is "California seller's permit on file", and no permit number is ever shown. The sample calculator is labelled as sample numbers only.

## Colors

A two-metal palette on black stock: foil gold in three weights against warm bone, with every neutral pulled toward the same umber so rules and panels read as ink on one sheet.

### Primary
- **Brushed Foil** (foil): the working gold. Solid buttons and the header CTA, rule numerals, the one headline claim per page, the engraved frame, perforation dots, the checked switch border, the form select chevron, fact labels on the profile sheet.
- **Foil Highlight** (foil-hi): the lit edge of the foil. Hover state of solid buttons, links, focus rings, dial and result numerals, the formula chip, the stamp, selected choices, the glint.
- **Foil Shadow** (foil-lo): the recessed gold. Structural rules that must be seen (the route line, the ledger top rule, the note's result rule, underline fields, choice and toggle borders at 4.1:1 on black), the guilloche rope, the microprint ink, the unlit seal.

### Secondary
- **Correction Rose** (err): form errors only. The invalid field underline, the invalid choice border, inline error text and the failed-send status line.

### Neutral
- **Press Black** (black): the page stock and the text color on foil.
- **Note Panel** (panel): the raised paper of the engraved note, the Fit Check panel, the profile sheet and the closing CTA band.
- **Under Sheet** (panel-2): the second sheet peeking from behind the stacked document preview.
- **Bone** (text): headlines, body copy that must be read, the permit seal line, labels.
- **Worn Bone** (muted): supporting copy, ledes on page heroes, descriptions, inactive nav, footer links.
- **Hairline** (rule): the default divider, 1px, between rows, stops and sections.
- **Double Hairline** (rule-2): a slightly stronger divider for document links, the formula chip border, the textarea's ruled lines, and the unfilled half of a dial track.

A success token (`--ok`, #9CC7A5) is declared on `:root` but nothing in the build uses it; success is shown with the foil seal tick instead. It is not part of the system until a surface uses it.

### Named Rules

**The One Claim Rule.** In headline type, foil marks exactly one phrase per page, the `em.claim` (home: "the same four rules."; each inner page: the tail of its h1). Every other italic heading tail stays bone. The hero's foil script "smoove." is the wordmark device, not a second claim.

**The Correction Ink Rule.** Correction Rose appears only on the Fit Check to mark a field, a choice set or a send that needs attention. It is never decoration, never a status color for the rules calculator, never a highlight.

**The Foil Is Material Rule.** Foil is used as a printed material (fills, hairlines, numerals, engraving), never as a glow. No colored shadows, no blurred halos, no neon.

## Typography

**Display Font:** Bodoni Moda, self-hosted and pinned at optical size 18 (with a metric-matched Times fallback)
**Body Font:** Manrope (with a metric-matched Arial fallback)
**Label/Mono Font:** JetBrains Mono Medium, formulas and numeric readouts only
**Script:** Yellowtail (with a Brush Script fallback), wordmark and "smoove." only

**Character:** A banknote pairing. The Didone brings engraved contrast and ceremony to every heading and numeral; Manrope keeps the reading plain and modern so the rules sound like terms, not marketing.

### Hierarchy
- **Display** (500, clamp 54px to 112px, 0.96): the home hero headline only, max 11ch, with the script "smoove." at 1.14em.
- **Headline, page** (500, clamp 44px to 80px, 1.0): the h1 of every inner page hero, max 22ch.
- **Headline** (500, clamp 40px to 70px, 1.02): section h2s. An italic tail (`em`) closes most headlines; with the stack treatment it drops to its own line.
- **Title, band** (500, clamp 28px to 40px, 1.1): the route line's heading.
- **Result** (500, clamp 26px to 40px, 1.15): the engraved note's live result line.
- **Title** (500, 22px to 32px, 1.1 to 1.3): perforated items, step titles, ledger rows, FAQ questions (22px), route stops (28px), the success message (32px). The rule titles on the note use a fluid 22px to 27px.
- **Numeral** (italic 400, 44px, 1.0 on the route line; italic 500, 22px, 1.25 on the rules): lowercase roman numerals, muted except for the step SmooveOperator handles and the rule numerals, which are foil.
- **Lede** (400, clamp 18px to 22px, 1.5): the hero sentence in bone, max 36ch. Inner ledes run clamp 17px to 19px in muted, max 52ch.
- **Body** (400, 17px, 1.65): everything read. Supporting text steps down to 15px to 16px; help and error text to 13.5px.
- **Label** (600 to 700, 13px to 14px, 0.08em, uppercase): buttons, nav links and the menu toggle. Field labels are 600, 14.5px, sentence case. Profile fact terms are 600, 11.5px, 0.1em, uppercase, foil.
- **Mono** (500, 13px formula chip; 14px calculation line; 15px dial readouts, tabular figures): only where the page shows arithmetic.
- **Wordmark** (400, 34px, 30px under 1000px): "Smoove Operator" filled with a foil gradient.

### Named Rules

**The Pinned Optical Size Rule.** Bodoni Moda ships as static opsz 18 instances (weight axis 400 to 900 kept). Its display optical sizes thin the "e" crossbar and serifs below one pixel on screen, so "Wholesale" read as "Wholcsalc". Never load the variable optical-size axis or let the browser auto-size it.

**The Mono Is Arithmetic Rule.** JetBrains Mono appears only for a formula (`est. monthly sales / (sellers + 1)`), a calculation line and live numeric readouts. It is never a label, heading or decoration.

**The Signature Rule.** Yellowtail writes the wordmark and the hero's "smoove." and nothing else.

**The No Eyebrow Rule.** No kicker or small uppercase label ever sits above a heading. A heading opens its section by itself.

## Layout

A single centered column, `min(1240px, 100% minus two gutters)`, with a fluid gutter of 20px to 56px; legal text narrows to 760px. Sections breathe on a fluid rhythm: full sections 88px to 128px top and bottom, tight sections 56px to 96px, the route band 56px over 52px, page heroes 40px to 72px. A thin sticky header (68px) sits over everything and the scroll offset is 88px.

Section heads stack: the heading, then its intro paragraph (42ch to 52ch), then the content. The instrument head is the one centered head. Reading measure is held with ch widths: 36ch hero lede, 44ch perforated items, 52ch intros, 65ch notes, 66ch legal paragraphs, 75ch for fine print.

The home page runs hero, route line, engraved note, perforated commitments, stacked paperwork, closing band. The hero's rosette bleeds off the right edge (right -14vw, up to 940px); on phones it moves up behind the headline at half opacity.

Responsive behavior is breakpoint driven. At 1000px the nav collapses into a clipped drop sheet. At 980px the engraved note becomes one column with the sample dials pinned as a compact strip under the header. At 900px the route line goes two by two, the perforated three-column sheet and the contact grid go single column. At 860px the paperwork, closing band and profile columns stack. At 620px the note tightens (12px rope, 26px corners) and the stamp drops into flow. At 560px the route line is a single column.

**The Stacked Head Rule.** A section's heading and its intro stack in one column. Don't split a section header into heading on the left and intro on the right. Two shipped layouts still set a heading beside its content (the closing CTA band and the "useful first conversation" section on /suppliers/); they are recorded as drift, not as patterns.

**The Perforation, Not Box Rule.** Groups of peer items are separated like stamps on a sheet (rows of foil-shadow dots between and beside items) or by hairlines, never boxed as cards.

## Elevation & Depth

The system is flat and printed. Depth comes from paper layering (the note panel on black stock, a second sheet behind the document preview), from engraving (rope bands, rosette corners, a hairline inset 34px inside the note) and from the sticky header's translucent black with a 10px backdrop blur. There is exactly one cast shadow.

### Shadow Vocabulary
- **Document drop** (`box-shadow: 0 28px 48px -18px rgba(0,0,0,.9)`): under the profile preview image only, so the stacked sheet reads as a physical document on the desk.

### Named Rules

**The Printed, Not Lifted Rule.** Surfaces never rise on hover. Buttons press down 1px on activation; arrows slide 4px; nothing gains a shadow.

## Shapes

Every corner is square (0px). Buttons, fields, choices, the switch track and thumb, dial thumbs, panels, the formula chip and the stamp all share the same hard edge. Borders are 1px hairlines; the stamp alone uses a 4px double rule. Geometry beyond the rectangle comes only from the engraving: 45-degree diamonds as route nodes, rosette hypotrochoids in the corners and seal, sine-wave rope strands, circular seal rings. Choice chips and the textarea are the only bordered or ruled field shapes; single-line fields are underline only. The one tilt in the system is the stacked document (minus 2 degrees, its under sheet a further 4.5 degrees) and the stamp (minus 7 degrees).

## Components

### Buttons
Square, foil and decisive; one label per destination ("Start the Fit Check" for /contact/ everywhere).
- **Shape:** square corners (0px), 1px foil border on every variant.
- **Solid:** foil fill, black text, 18px by 24px padding, uppercase 14px bold label at 0.08em, a drawn 18px arrow.
- **Hover / Focus:** solid brightens to foil highlight (180ms); the arrow slides 4px right (360ms); press moves the button down 1px; focus shows the 2px foil-highlight ring.
- **Line:** transparent with foil text and border; hover adds an 8% foil wash and foil-highlight text.
- **Text:** borderless foil label with arrow for in-flow links like "Supplier details and FAQ".
- **Disabled (sending):** 55% opacity with a progress cursor.

### Navigation
- **Header:** sticky, 68px, black at 88% with blur, a hairline below. Foil-gradient script wordmark at left.
- **Links:** Manrope 13px semibold uppercase at 0.08em in muted; hover and the current page turn bone, and the current page gains a 1px foil underline.
- **Header CTA:** a solid foil block labelled "Start the Fit Check"; on /contact/ it becomes an outlined foil frame since the visitor is already there.
- **Mobile (1000px and below):** a bordered "Menu" toggle whose two lines turn 90 degrees; the nav drops as a full-width sheet revealed by a clip-path wipe (360ms), rows divided by hairlines, the CTA full width at the bottom. Without JavaScript the nav simply wraps.

### Inputs / Fields
- **Style:** underline only. Transparent background, a 1px foil-shadow bottom rule, 10px vertical padding, square. Labels sit above in 14.5px semibold bone; "(optional)" is set in muted.
- **Select:** same underline, with a small foil chevron drawn from two gradients.
- **Textarea:** ruled like a ledger page, each 33px line on its own double-hairline rule that scrolls with the text.
- **Focus:** the underline turns foil highlight; the caret is foil highlight.
- **Error:** the underline (or a choice set's borders) turns Correction Rose and a 13.5px message in Correction Rose names what is needed ("Enter your work email.").
- **Choices (radio chips):** square 1px foil-shadow boxes, 11px by 14px; hover to foil; selected gets a foil-highlight border, 12% foil wash and foil-highlight text.
- **Progress:** three steps labelled with lowercase roman counters over a 2px rule; done and current steps turn foil.

### Switch
A square rocker. A 46px by 24px track with a 1px foil-shadow border and a 16px muted square thumb; checked slides the thumb 22px (360ms, expo) and lights it foil highlight while the track border turns foil. It is a real checkbox with `role="switch"`, focus ring drawn around the track.

### Dials
Range sliders as engraved gauges. A 1px track filled foil up to the value and double hairline beyond; a 10px by 24px black thumb with a 1.5px foil-highlight outline that stretches 20% vertically while dragged. The label reads left and the value reads right in the mono readout face in foil highlight.

### The Engraved Note
The signature component: the four buy rules printed as one security document.
- **Frame:** a panel-colored sheet with an 18px guilloche rope band on all four edges (interlaced sine strands in foil and foil shadow between two hairlines, tiled every 72px), 36px rosette corners that overhang by 9px, a hairline inset 34px, and a line of foil-shadow microprint along the top and bottom.
- **Body:** the rules as a numbered list at left ("Rule i." in italic foil numerals, a Bodoni title, muted description, the formula in a mono chip, and a live verdict line on a foil left rule), the sample listing at right (a switch and two dials, sticky while the rules scroll).
- **Foot:** a foil-shadow rule, the latent seal, and the result line in large Bodoni with foil-highlight figures.
- **Skipped state:** when the switch says the marketplace sells the listing, rules ii to iv fade and the stamp lands on rule i; the result reads "No order. The listing is skipped."
- **Without JavaScript:** the rules and a static sentence of the method render; the calculator does not.

### The Latent Seal
A 104px to 136px engraved roundel: two outer rings, a dotted inner ring, two fine rosettes in foil over foil-shadow rings, ring text in muted, and a script "S" at the center (a Yellowtail use outside the Signature Rule, recorded as drift rather than precedent). A mask of the same geometry lets a foil-highlight band cross the engraved lines as the seal scrolls through the viewport. The small permit seal (a ring, a dotted ring and a check) marks the permit line and the success message, where its check draws in over 600ms.

### The Stamp
"SKIPPED" in a 4px double foil-highlight rule, rotated minus 7 degrees on a translucent panel ground, landing from 1.7x scale in 320ms (expo). It appears only in the note's skipped state and is decorative to assistive tech; the live region and verdict text carry the meaning.

### The Perforated Grid
Commitments and values as a sheet of stamps. Two columns (or three over two on /suppliers/), each item a Bodoni title with muted text, separated by rows and columns of 1.5px foil-shadow dots on a 9px pitch. No boxes, no fills. Collapses to one column at 640px (900px for the three-column sheet).

### The Route Line
How a product moves. A foil-shadow top rule with a diamond node at each stop; the stops divide with hairlines. Each stop carries a large italic roman numeral, a Bodoni title, "Handled by" in muted with the handler in bold bone, and a description. Only SmooveOperator's own step is foil (solid diamond, foil numeral). Four stops on home, three on /suppliers/.

### The Stacked Document Preview
The real profile sheet as a physical file: the preview image with a foil-shadow border and the one document shadow, rotated minus 2 degrees, with an under sheet in panel-2 rotated a further 4.5 degrees behind it. Beside it, document links are ruled rows: drawn icon, Bodoni name, muted caption, a foil title on hover.

### Ledger and Profile Sheet
- **Ledger:** a foil-shadow top rule, rows split into a Bodoni title and muted description, hairlines between.
- **Profile sheet:** a panel sheet with a foil-shadow border and a hairline outline inset 10px, a foil wordmark header, facts as a two-column definition list with small uppercase foil terms, and a print stylesheet that turns it into a clean one-page letter sheet on white.

## Do's and Don'ts

### Do:
- **Do** mark exactly one headline phrase per page in foil with `em.claim`; keep every other italic tail bone.
- **Do** use Correction Rose (#F3B4A8) only for Fit Check errors.
- **Do** keep every corner square (0px) and every divider a 1px hairline, perforation or rope.
- **Do** serve Bodoni Moda only from the pinned optical size 18 files, with the metric-matched fallbacks.
- **Do** keep JetBrains Mono to formulas, calculation lines and numeric readouts, with tabular figures.
- **Do** number sequences with lowercase roman numerals in italic Bodoni.
- **Do** use one label per destination: "Start the Fit Check" for /contact/ everywhere.
- **Do** keep content visible by default and let motion only add; honor `prefers-reduced-motion` in both CSS and script.
- **Do** keep focus visible (2px foil highlight, 4px offset) and hold text at 4.5:1 or better on its ground.
- **Do** write engraved text (microprint, seal ring) from true phrases only.
- **Do** state the credential only as "California seller's permit on file", with no number shown.

### Don't:
- **Don't** put an eyebrow, kicker or small uppercase label above a heading.
- **Don't** split a section header into heading left and intro right.
- **Don't** use foil as a glow, a colored shadow or a neon edge; don't add shadows beyond the document drop.
- **Don't** box peer items as cards; separate them with perforations or hairlines.
- **Don't** use Yellowtail for anything but the wordmark and "smoove.".
- **Don't** add a second authored entrance; the note's engraving is the one moment.
- **Don't** use em dashes or en dashes anywhere in copy.
- **Don't** write the words "Amazon" or "FBA" anywhere on the site; say "the marketplace" or "marketplace fulfillment".
- **Don't** invent testimonials, numbers, partner names, reviews or credentials.
- **Don't** show a permit number or any credential other than the seller's permit on file.
