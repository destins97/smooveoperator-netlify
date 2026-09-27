---
name: SmooveOperator
description: "Considered commerce: an editorial black and gold system with clear operational roles."
colors:
  black: "#0a0a0a"
  surface: "#111210"
  raised: "#191a16"
  gold: "#C5A028"
  gold-hi: "#D4AF37"
  gold-light: "#e5c974"
  text: "#f0eee7"
  muted: "#b0afa4"
  line: "#34352b"
  control: "#77796b"
  error: "#f3b4a8"
typography:
  display:
    fontFamily: "Bodoni, Georgia, serif"
    fontSize: "clamp(60px, 7vw, 96px)"
    fontWeight: 400
    lineHeight: 1.035
    letterSpacing: "-0.025em"
  headline-page:
    fontFamily: "Bodoni, Georgia, serif"
    fontSize: "clamp(48px, 6.4vw, 92px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bodoni, Georgia, serif"
    fontSize: "clamp(36px, 4.1vw, 59px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
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
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.black}"
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

**Creative North Star: "Considered Commerce"**

An editorial business presentation built around open columns, readable explanations and an inspectable product journey. Near-black grounds the page, matte gold identifies actions, and warm text carries the business explanation. The protected cursive wordmark remains distinct from the serif headlines.

The composition uses thin rules and measured spacing to separate responsibilities. Interaction reveals useful information through native controls. Motion briefly reinforces the route and never runs perpetually.

**Key Characteristics:**

- Open editorial columns and structural rules.
- Bodoni Moda headings, Barlow reading text and a protected Yellowtail wordmark.
- Inspectable commerce stages with explicit responsible parties.
- Square controls and restrained gold emphasis.
- Progressive enhancement with visible content and native fallbacks.

## Colors

The palette is warm black, muted olive charcoal, matte gold and warm off-white. Frontmatter records reusable CSS primitives; special gradients live in the sidecar.

### Primary

- **Matte gold** (`gold`): primary action backgrounds and the commerce route.
- **Bright gold** (`gold-hi`): a stop in the protected wordmark gradient.
- **Light gold** (`gold-light`): headline emphasis, links, focus rings and open-stage emphasis.

### Neutral

- **Near-black** (`black`): page background and field interiors.
- **Charcoal** (`surface`): section bands and stage-number interiors.
- **Raised charcoal** (`raised`): capability-row hover background.
- **Warm text** (`text`): headings and primary copy.
- **Muted warm gray** (`muted`): explanations, annotations and secondary navigation.
- **Structural line** (`line`): quiet dividers.
- **Control gray** (`control`): field boundaries and stronger rules.

Error color is reserved for validation and submission failures. Success uses light gold with explicit text.

**The Protected Mark Rule.** Keep the Yellowtail gold wordmark. Its multistop gradient is an identity treatment, not a body-text treatment.

## Typography

Bodoni Moda is registered locally under the CSS family name `Bodoni`. Barlow has local 400, 500 and 600 files. Yellowtail is locally hosted at 400 and reserved for the wordmark. All files use font-display swap.

The frontmatter captures desktop roles. Below 760px the hero uses `clamp(58px,11.9vw,86px)` at 1.06 line height; below 430px it is 61px. Page headings become 46px below 430px. The wordmark becomes 31px below 1100px and 29px below 430px.

Lead copy uses `clamp(18px,1.45vw,21px)` at 1.65. Larger introductory paragraphs use `clamp(22px,2vw,27px)` at 1.5. General reading width is 65ch, standard leads 58ch and the home lead 45ch. Help text is 16px at 1.5.

**The Separate Voices Rule.** Use Bodoni for display hierarchy, Barlow for reading and controls, and Yellowtail for the protected wordmark.

## Layout

The centered container is `min(1296px, 100% - gutter * 2)`. Gutter becomes 24px at 760px and below. Section spacing follows the frontmatter's fluid section value.

Desktop hero columns are 1.1fr / 1fr. Editorial sections are 1fr / 1.07fr with a fluid 40px to 100px gap. Supplier features use equal columns, invitations 1.15fr / 1fr, and contact .85fr / 1.15fr. These compositions stack at 760px. Capability rows become a title-and-arrow row with description beneath.

The sticky header bar has minimum height 91px, becoming 78px at 1000px. JavaScript enables collapsed navigation at 1000px and below. Without JavaScript navigation wraps and remains visible. Paired form fields stack below 1000px, return to two columns when contact stacks at 760px, then stack below 430px.

Breakpoints are 430px, 760px, 1000px, 1100px and a 1600px minimum-width enhancement. Print removes navigation, footer, action rows and invitations with white paper and dark body text.

## Elevation & Depth

Most surfaces are flat with tonal changes or hairline rules. The commerce diagram uses a subtle charcoal gradient and diffuse `0 22px 48px #0004` shadow. The sticky header uses a nearly opaque background. Hero and page-intro radial washes provide atmosphere without photographs.

## Shapes

Controls and panels have square corners. Thin borders distinguish fields and the commerce diagram; ruled rows separate lists and facts. Stage numbers occupy 35px squares linked by a 1px vertical gold line. Small rotated squares mark the hero's supporting principles.

## Components

### Buttons

Primary actions use matte gold with black text and light-gold hover. Text actions have warm text and a bottom rule, changing to light gold on hover. Buttons have minimum height 50px, 17px Barlow medium text, 18px gap and a 24px inline SVG arrow. Hover shifts the arrow 3px right; active shifts the button 1px down. Disabled submission buttons use .65 opacity and a waiting cursor. Transitions last 220ms on the shared easing curve.

Global keyboard focus is a 2px light-gold outline offset 5px. Fields use a 3px offset instead.

### Navigation

Navigation is sentence case, 16px and muted at rest. Hover/current links become light gold; the current page gains a 1px gold inset underline. The contact link has a control-gray outline. Mobile navigation opens as a full-width dark sheet. Escape closes it and returns focus to Menu. Link selection and breakpoint changes also close it.

### Commerce pathway

Five native details elements show Source, Evaluate, Prepare, Fulfill and Customer with responsible parties always visible. Evaluate starts open. Multiple stages may remain open. Open stages fill their number square gold and emphasize their title. Descriptions work without JavaScript.

When 20% of the diagram enters the viewport, one stage-number entrance sequence runs for 850ms with 100ms stagger. Content is visible before animation. Reduced motion disables animations, transitions and smooth scrolling. There is no route car or perpetual animation.

### Editorial rows

Capability links are ruled title, description and SVG-arrow rows with a raised-charcoal hover surface. Principles and profile facts are definition lists. These patterns use open rows rather than rounded cards or numerical sales examples.

### Inquiry fields

Fields have full control-gray borders, black interiors, square corners and minimum height 49px. Textareas resize vertically with minimum height 140px. Invalid fields gain an error-color border and a textual message linked through aria-describedby.

Suppliers and contact share one continuous form, not a mandatory step sequence. Inquiry type, name, email and message are required. Company and phone are optional. Native details contains optional categories, opening-order requirements and sales channels. Messages require at least 15 characters. Status uses a polite live region. Failed or timed-out submission preserves answers; a successful HTTP response resets the form and confirms receipt. Native POST remains available without JavaScript.

### FAQ

Native disclosures use ruled separators, 21px summaries and muted answers. Keep questions visible while collapsed and preserve browser keyboard behavior.

## Do's and Don'ts

### Do:

- Do preserve the Yellowtail gold wordmark.
- Do use Bodoni headings and Barlow reading text with the recorded hierarchy.
- Do separate content through open columns, thin rules and readable measures.
- Do identify responsible parties wherever the commerce pathway appears.
- Do retain native navigation, disclosure and form fallbacks.
- Do keep animation brief, once-only and disabled under reduced motion.

### Don't:

- Don't restore departures boards, flap digits, condensed uppercase headlines or a mandatory multistep form.
- Don't introduce rounded controls or decorative card grids into established editorial patterns.
- Don't use Yellowtail as a general headline or reading font.
- Don't hide essential content until an animation runs.
- Don't use error color without an explicit text explanation.
- Don't write em dashes or en dashes in public copy.

## Locked homepage slogan
The primary headline is exactly: Wholesale, made Smoove. Never replace the wording.

**Approved treatment (owner decision, 2026-09-27):** set "WHOLESALE, MADE" in compressed all caps (Archivo at 62% width, weight 500, uppercase, tight line height) and "Smoove." in the protected Yellowtail 400 wordmark font in gold with the neon glow. Other headings follow the same compressed all caps system. Reference implementation: `concepts/night-route.html` (heading option 1).

**Status:** production still renders the previous treatment (Barlow 600 for Wholesale, made; Bodoni Moda editorial headings) until the Night Route redesign ships. Update `src/` and this note together when it does.

