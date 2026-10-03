---
name: SmooveOperator Creations
description: "Listing videos, reels and websites for real estate agents, teams and brokerages, presented as an open house."
colors:
  canvas: "#0B0907"
  surface: "#16120C"
  ink: "#F3ECDF"
  ink-soft: "#BDB096"
  gold: "#D9B24C"
  gold-hi: "#F1D88E"
  gold-ink: "#140F05"
  paper: "#F1E9DA"
  paper-ink: "#1C150C"
  paper-soft: "#5B4D38"
  paper-gold: "#7A5A12"
  paper-button-gold: "#F6DE8D"
  paper-error: "#9B2C1A"
  paper-success: "#2F5A23"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.9rem, 1.4rem + 4.4vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariation: "\"opsz\" 120, \"SOFT\" 50"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.1rem, 1.6rem + 2.4vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.6rem, 1.35rem + 1.2vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "0.005em"
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.2em"
  wordmark:
    fontFamily: "Yellowtail, cursive"
    fontSize: "2.05rem"
    fontWeight: 400
    lineHeight: 1.05
rounded:
  sm: "6px"
  lg: "20px"
  pill: "999px"
  none: "0"
spacing:
  unit: "0.25rem"
  gutter: "clamp(1.25rem, 5vw, 5.5rem)"
  section: "clamp(4.5rem, 9vw, 11rem)"
  bar: "76px"
  bar-mobile: "64px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.gold-ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hi}"
    textColor: "{colors.gold-ink}"
  button-quiet:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  bar-cta:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.25rem"
    height: "44px"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.5rem, 4vw, 3.25rem)"
  sheet-button:
    backgroundColor: "{colors.paper-ink}"
    textColor: "{colors.paper-button-gold}"
    rounded: "{rounded.pill}"
  sheet-field:
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0 0.5rem"
---

# Design System: SmooveOperator Creations

## Overview

**Creative North Star: "The Open House"**

The site is a showing, and each section is a room of it. Four rooms run in order: the Front door (a scroll scrub of the walk-through film, opened by a door prologue that plays by itself), The light (a pinned before and after), Three formats (a sideways pan rail) and the Sign-in sheet (a natural flow close where the inquiry form is typeset on a paper card). Warm near-black grounds the page, real golden-hour footage carries the mood, and gold is reserved for the mark, emphasis and the one action.

The layer model is strict: `scrollcraft.css` is the engine floor and its device selectors are never restyled; `site.css` overrides only the engine tokens and styles its own markup. Visual direction is golden hour, quiet luxury and cinematic, kept to realistic homes rather than estates.

**Key Characteristics:**

- One scrub act, at the peak, carrying the only real footage.
- Fraunces display with italic gold emphasis, Barlow for reading, Yellowtail only in the wordmark.
- Pill controls, 20px media corners, warm tinted shadows.
- A light paper sheet as the single inverted surface.
- Copy that names no numbers it cannot prove.

## Colors

Warm black and parchment ink with one gold, which shifts lightness when the ground turns to paper.

### Primary
- **Golden Hour** (`gold`): primary button fill, italic display emphasis, nav underline, room tag rule.
- **Late Light** (`gold-hi`): button hover, focus outlines, the light handle and its divider, text links on dark.
- **Wordmark gradient**: the protected four-stop gradient on the Yellowtail mark (see sidecar). Identity only.

### Neutral
- **Night Canvas** (`canvas`) and **Ember Surface** (`surface`): page ground and raised media wells.
- **Parchment Ink** (`ink`) and **Dry Grass** (`ink-soft`): primary and secondary text on dark.
- **Paper** set (`paper`, `paper-ink`, `paper-soft`, `paper-gold`): the sign-in sheet. Rules on paper are `paper-ink` at 25% alpha. Errors and success on paper use `paper-error` and `paper-success` with text.

**The Two Golds Rule.** On dark, gold is `gold` and `gold-hi`. On paper, gold drops to `paper-gold` for type and focus, and the paper button pairs `paper-ink` with `paper-button-gold`. Never set the dark-ground golds on paper.

**The Protected Mark Rule.** The gold Yellowtail "Smoove Operator" wordmark keeps its gradient and its small uppercase "CREATIONS" sub-line (0.64rem, 0.42em tracking, `ink-soft`), right aligned beneath it.

## Typography

**Display Font:** Fraunces variable, self-hosted, roman and italic (Georgia fallback)
**Body Font:** Barlow 400, 500 and 600, self-hosted (system-ui fallback)
**Wordmark Font:** Yellowtail 400, self-hosted

**Character:** a soft, optically sized serif for the voice, a plain grotesk for the facts.

### Hierarchy
- **Display** (400, `opsz` 120, `SOFT` 50): the front door h1; shrinks to `clamp(2.4rem, 1.6rem + 4vw, 3.4rem)` at 860px.
- **Headline** (400): room headings; the formats lead and legal titles step up to `clamp(2.8rem, 1.9rem + 4.2vw, 5rem)`.
- **Title** (400): format names, legal subheads, and italic lines such as the arrival lines and the rail note.
- **Body** (400): reading text, held to about 34 to 36ch beside media and 62ch on legal pages.
- **Label** (500, uppercase, tracked): definition terms in piece labels and the live room tag.

**The Italic Emphasis Rule.** Emphasis is a Fraunces italic `em` in gold (paper gold on the sheet). Room nav links are Fraunces italic too. Never italicize Barlow for emphasis.

**The Three Voices Rule.** Fraunces speaks, Barlow informs, Yellowtail signs. Yellowtail never sets a headline or body text.

## Layout

A fixed 76px bar (64px at 860px and below) holds the mark, the room list and the CTA, over a gradient density band that never covers the full frame. The room list hides at 1100px and below. Rooms are full-viewport acts with engine spans: arrival 5.2, light 2.2, formats 4.0, book in natural flow. The light room is a 2.5fr / 1fr media and copy grid that stacks at 860px, where the compare frames crop to 1:1. The formats rail lays a lead, a 16:9 film, a 9:16 reel, a 16:10 site and a closing note side by side. The sheet sits left at up to 42rem over a masked pool still; on phones the still sits above and the sheet starts 28svh down. Spacing uses the engine 4px scale; gutters and section rhythm are fluid.

**The One Scrub Rule.** The page has exactly one `scrub` act, the Front door. No device family repeats back to back.

**The Sibling Scrim Rule.** Each scrim is a sibling of the copy it protects and is visible only inside that copy's scroll window. No full-frame overlay darkens the film. On phones every scrim becomes a bottom band.

## Elevation & Depth

Depth comes from footage and engine shadows tinted to the canvas hue (`30 45% 3%`). Media, the compare frame and the paper sheet use the large three-layer shadow; the light handle uses the medium one; piece media add a 1px inner top edge. There are no glows or offset hard shadows.

## Shapes

Media and the sheet use 20px corners; the sample note uses 6px; every button, the CTA, the room tag and the skip link are pills. The light handle is a 48px gold circle (40px on phones) with a sun glyph drawn in SVG. Fields on the sheet are underline only, square, with no box.

## Components

### Buttons
- **Primary:** gold pill, dark ink, 48px tall; hover lifts to `gold-hi`; press moves 1px down; disabled shows a wait cursor at 0.7 opacity.
- **Quiet and bar CTA:** ink text, 70% gold outline; hover fills gold. The bar CTA is 44px.
- **On paper:** `paper-ink` fill with `paper-button-gold` text.
- **Label:** every call to action reads "Book a free call" and links to the sheet.

### Navigation
The room list (Front door, The light, Three formats, Sign-in sheet) in Fraunces italic, `ink-soft` at rest. The room in view takes `ink` and a 1px gold underline that scales in from the left. Interior pages show only the mark and CTA.

### Fields
Barlow labels in `paper-soft`, optional fields marked "(optional)". Focus thickens the underline to 2px `paper-gold`. Invalid fields gain a red underline and a linked text message. Checkboxes use the native control in `paper-ink`, 44px rows.

### Signature: door, light handle, rail
- **Door prologue:** plays once on load with no scroll, ends on the scrub clip's first frame, fades in 520ms; any scroll past 8px or a refused autoplay opens it at once.
- **Room tag:** a pill naming the room in view, read from the film's own clock.
- **Light handle:** a range input; scroll carries it until the visitor takes it, then it stays.
- **Sample note:** every showing of the sample work says it is an AI-assisted sample built from a listing's own photos.

### Reduced motion
The door never plays, the room tag hides, the reel never loads, spans shrink (arrival 2, light 1.4, formats 1.3), the light handle rests at 50%, and the rail becomes an ordinary horizontal scroll region.

## Do's and Don'ts

### Do:
- **Do** use the one label "Book a free call" for the one action.
- **Do** label sample work as AI-assisted and built from listing photos.
- **Do** keep the sample listing anonymous: no address, price or agent.
- **Do** keep every scrim tied to its own copy's window.
- **Do** drop gold to `paper-gold` on the paper sheet.

### Don't:
- **Don't** add a second `scrub` act, counters, statistics or any number the business cannot prove.
- **Don't** write em dashes or en dashes in copy.
- **Don't** restyle `scrollcraft.css` device selectors; override tokens and style page markup instead.
- **Don't** set Yellowtail anywhere but the wordmark, or alter its gradient.
- **Don't** add uppercase eyebrows above headings, beyond one per three sections. The home page spends its one on the sign-in sheet; the sample site's flag is a required sample label.
- **Don't** show a face or headshot.
