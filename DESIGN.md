---
name: SmooveOperator
description: "Night Route: absolute black, Lamborghini gold, compressed capitals and a neon cursive wordmark, with clear operational roles."
colors:
  black: "#000000"
  surface: "#111111"
  raised: "#1a1a1a"
  gold: "#FFC000"
  gold-hi: "#FFCE3E"
  gold-deep: "#917300"
  text: "#F5F5F5"
  muted: "#A8A8A8"
  line: "#262626"
  control: "#6b6b6b"
  error: "#f3b4a8"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontStretch: "62%"
    textTransform: "uppercase"
    fontSize: "clamp(64px, 11.4vw, 184px)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.005em"
  headline-page:
    fontFamily: "Archivo"
    fontStretch: "62%"
    textTransform: "uppercase"
    fontSize: "clamp(56px, 8.2vw, 124px)"
    fontWeight: 500
    lineHeight: 0.95
  headline:
    fontFamily: "Archivo"
    fontStretch: "62%"
    textTransform: "uppercase"
    fontSize: "clamp(42px, 5.4vw, 82px)"
    fontWeight: 500
    lineHeight: 0.95
  title:
    fontFamily: "Archivo"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Archivo"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.14em"
    textTransform: "uppercase"
  wordmark:
    fontFamily: "Yellowtail, cursive"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1.2
rounded:
  square: "0"
spacing:
  gutter: "clamp(22px, 4.6vw, 72px)"
  gutter-mobile: "24px"
  section: "clamp(64px, 7.2vw, 104px)"
  field: "24px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.black}"
    rounded: "{rounded.square}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hi}"
    textColor: "{colors.black}"
  button-ghost:
    borderColor: "#ffffff80"
    textColor: "{colors.text}"
  button-text:
    textColor: "{colors.text}"
    padding: "13px 0"
  input:
    backgroundColor: "{colors.black}"
    textColor: "{colors.text}"
    rounded: "{rounded.square}"
    padding: "12px 14px"
---

# Design System: SmooveOperator

## Overview

**Creative North Star: "Night Route"**

A cinematic business presentation for supplier account managers. True black grounds the page the way a night road does, Lamborghini gold marks the actions and the route, and compressed capitals give headings the confidence of a spec sheet. The protected cursive wordmark glows in neon gold and stays the only script on the page, apart from the Smoove in the locked slogan.

The homepage opens with long-exposure gold light trails behind the slogan, then a spec strip, a route drawn stage by stage as the visitor scrolls, and a partnership outline that becomes the first message of a supplier conversation. Motion is purposeful, pausable and absent under reduced motion.

**Key Characteristics:**

- Absolute black `#000000` with Lamborghini gold `#FFC000` as the single accent.
- Compressed Archivo capitals for headings, Archivo for reading, Yellowtail neon for the protected wordmark.
- Inspectable commerce stages with explicit responsible parties.
- Square controls; uppercase, letter-spaced button and navigation labels.
- Progressive enhancement: content, navigation, disclosures and forms work without JavaScript.

## Colors

The palette is absolute black, neutral charcoal surfaces, Lamborghini gold and near-white text. Frontmatter records the CSS primitives.

### Primary

- **Lamborghini gold** (`gold`, `#FFC000`): primary action backgrounds, the route line, eyebrows, the wordmark and slogan emphasis.
- **Bright gold** (`gold-hi`, `#FFCE3E`): hover state for gold actions, links and focus rings.
- **Deep gold** (`gold-deep`, `#917300`): stage-number borders and quiet gold structure. Not for text.

### Neutral

- **Absolute black** (`black`): page background and field interiors.
- **Charcoal** (`surface`): section bands and the partnership outline cards.
- **Raised charcoal** (`raised`): capability-row hover background.
- **Near-white** (`text`): headings and primary copy.
- **Muted gray** (`muted`, 8:1 on black): explanations, annotations and labels.
- **Structural line** (`line`): quiet dividers.
- **Control gray** (`control`, 3:1 on black): field boundaries and stronger rules.

Error color is reserved for validation and submission failures. Success uses gold with explicit text.

**The Protected Mark Rule.** Keep the Yellowtail wordmark in `#FFC000` with the neon glow (`--neon` in `site.css`). The glow is an identity treatment, reserved for the wordmark and the Smoove in the slogan.

## Typography

Archivo is self-hosted as one variable file (`/fonts/Archivo-var.woff2`, weights 100 to 900, widths 62% to 125%, SIL OFL in `Archivo-OFL.txt`). Headings use it at 62% width, weight 500, uppercase. Body copy, controls and labels use it at normal width. Yellowtail is self-hosted at 400 and reserved for the wordmark and the Smoove in the slogan. All files use font-display swap; only Archivo and Yellowtail are preloaded. The previous Bodoni Moda and Barlow files have been removed.

The frontmatter captures desktop roles. The homepage hero slogan uses `clamp(64px,11.4vw,184px)` at 0.9 line height. Below 760px, section headings use `clamp(40px,10vw,60px)` and page headings `clamp(50px,12vw,80px)`, 52px below 430px. The wordmark becomes 31px below 1100px and 29px below 430px.

Lead copy uses `clamp(18px,1.45vw,21px)` at 1.65. Larger introductory paragraphs use `clamp(22px,2vw,27px)` at 1.5. General reading width is 65ch. Help text is 16px at 1.5. Buttons and navigation use 13 to 14px, weight 600, `0.14em` tracking, uppercase.

**The Two Voices Rule.** Compressed capitals for display hierarchy, normal-width Archivo for reading and controls, Yellowtail neon only for the protected mark.

## Layout

The centered container is `min(1296px, 100% - gutter * 2)`. Gutter becomes 24px at 760px and below.

The homepage hero is full width, `clamp(620px,90dvh,900px)` tall, with the light-trail canvas behind the copy. The spec strip is four columns, two at 1000px and one at 560px. The route section is 0.9fr / 1.1fr with a sticky heading and stage counter, stacking at 1000px where the counter hides. The partnership outline is 1.2fr / 0.8fr (choices / outline), stacking at 1000px; its choice cards stack below 560px.

Editorial sections are 1fr / 1.07fr with a fluid 40px to 100px gap. Contact is .85fr / 1.15fr. These compositions stack at 760px.

The sticky header bar has minimum height 76px. JavaScript enables collapsed navigation at 1000px and below. Without JavaScript navigation wraps and remains visible.

Breakpoints are 430px, 560px, 760px, 1000px and 1100px. Print removes navigation, footer, action rows and invitations with white paper and dark body text.

## Elevation & Depth

Most surfaces are flat with tonal changes or hairline rules. The homepage hero gets its depth from the light-trail canvas, a faint gold radial wash and a black gradient at the foot. The commerce diagram uses a subtle charcoal gradient and diffuse `0 22px 48px #0006` shadow. The sticky header uses a nearly opaque black background. Page intros carry a faint gold radial wash.

## Shapes

Controls and panels have square corners. Thin borders distinguish fields and the commerce diagram; ruled rows separate lists and facts. Stage numbers occupy 35px squares linked by a 1px vertical gold line. On the homepage route, rotated squares mark each stage and fill gold when the stage is reached. The hero pause control is a hexagon, after the reference brand's motif.

## Components

### Buttons

Primary actions use `#FFC000` with black text, uppercase 14px labels at `0.14em` tracking, square corners and minimum height 52px. The trailing arrow sits in its own darker square that nudges up and right on hover. Hover lightens to `gold-hi`. Ghost buttons are transparent with a 50% white border that turns gold on hover. Text actions keep a bottom rule. Active shifts 1px down. Disabled submission buttons use .65 opacity and a waiting cursor.

Global keyboard focus is a 2px gold outline offset 5px. Fields use a 3px offset.

### Navigation

Navigation is uppercase, 13px, weight 600, near-white at rest and gold on hover or current page; the current page keeps a 1px gold underline. The contact link is gold with a gold outline. Mobile navigation opens as a full-width black sheet; Escape closes it and returns focus to Menu.

### Light trails (homepage hero)

A canvas draws long-exposure gold and white trails converging on a vanishing point. It pauses when offscreen or when the tab is hidden, stops by itself after 30 seconds, and exposes a hexagonal pause and play button. Under reduced motion it renders a single still frame and the button stays hidden. It is decorative and hidden from assistive technology.

### Route (homepage)

Five stages (Source, Evaluate, Prepare, Fulfill, Customer) each show their responsible party. An IntersectionObserver lights each stage as it crosses 55% of the viewport and scales a gold rail to match; the sticky counter shows the current stage. Without JavaScript all stages render lit.

### Commerce pathway (supplier and operations pages)

Five native details elements with responsible parties always visible. Evaluate starts open. Descriptions work without JavaScript.

### Partnership outline

"Tailor the partnership." Radio cards (partner type, channel, cadence) update an outline preview. Submitting is a GET to `/suppliers/#supplier-form`; the suppliers page prefills the inquiry message and channels only from known values, never free text from the URL. Without JavaScript the form still reaches the suppliers page.

### Editorial rows

Capability links are ruled rows with compressed uppercase titles, descriptions and SVG arrows. Principles and profile facts are definition lists.

### Inquiry fields

Fields have full control-gray borders, black interiors, square corners and minimum height 49px. Textareas resize vertically with minimum height 140px. Invalid fields gain an error-color border and a textual message linked through aria-describedby.

Suppliers and contact share one continuous form. Inquiry type, name, email and message are required. Company and phone are optional. Native details contains optional categories, opening-order requirements and sales channels. Messages require at least 15 characters. Status uses a polite live region. Failed or timed-out submission preserves answers; a successful HTTP response resets the form and confirms receipt. Native POST remains available without JavaScript.

### FAQ

Native disclosures use ruled separators, 21px summaries and muted answers.

## Do's and Don'ts

### Do:

- Do preserve the Yellowtail neon wordmark in `#FFC000`.
- Do use absolute black and Lamborghini gold as the only background and accent.
- Do set headings in compressed Archivo capitals and reading text in normal-width Archivo.
- Do identify responsible parties wherever the commerce route appears.
- Do give every perpetual motion a pause control, an offscreen pause and a reduced-motion still state.
- Do retain native navigation, disclosure and form fallbacks.

### Don't:

- Don't add a second accent color or replace gold with a matte or brass gold.
- Don't introduce rounded controls or decorative card grids into established editorial patterns.
- Don't use Yellowtail for anything other than the wordmark and the Smoove in the slogan.
- Don't hide essential content until an animation runs.
- Don't use inline style attributes; the Content Security Policy blocks them.
- Don't write em dashes or en dashes in public copy.

## Locked homepage slogan

The primary headline is exactly: Wholesale, made Smoove. Never replace the wording.

"WHOLESALE, MADE" is set in compressed Archivo capitals (62% width, weight 500, uppercase). "Smoove." is set in the protected Yellowtail 400 wordmark font in `#FFC000` with the neon glow. This treatment was approved by the owner on 2026-09-27 (Night Route, heading option 1) and is live in production.
