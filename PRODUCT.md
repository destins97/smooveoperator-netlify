# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary (confirmed 2026-09-24): brands, manufacturers, authorized wholesalers and distributors who receive a wholesale account application or intro email from SmooveOperator and open the website to decide whether this reseller is legitimate, organized, and safe to sell to. They are reviewing quickly, often from an account-application queue, looking for signs of a real, careful business and a way to reply.

Secondary: the owner (Destin) using the site as the link he sends in supplier outreach.

## Product Purpose
A credibility and first-contact site for an early-stage, independent marketplace resale business that uses the wholesale model (buying existing brands from authorized sources and reselling them online, fulfilled through third-party prep and marketplace fulfillment). Success = a supplier who lands here believes the operator is careful and legitimate, and sends an inquiry that actually arrives.

## Positioning
Honest discipline over hype: a new operator who shows exactly how he evaluates, documents, and moves product, and who says openly what is developing versus established. A larger reseller could claim scale; it could not truthfully copy this transparency.

## Operating Context
- Suppliers typically check: legitimacy, resale certificate / seller's permit, where products will be sold, whether channel rules and MAP will be respected, how orders and prep are handled.
- Physical prep and fulfillment are handled by independent third parties; SmooveOperator makes the sourcing and purchasing decisions.
- The owner screens products with written buy rules (auto-reject when the marketplace itself sells the item, or when fewer than 3 fulfillment sellers are on the listing) and tracks days-to-sell-out.

## Capabilities and Constraints
- Static site on Netlify, built by a small Node script (`src/pages.mjs`, `src/components.mjs`). No paid services may be added without asking.
- Contact form uses Netlify Forms (currently NOT enabled on the project; must be enabled for inquiries to arrive).
- Production currently serves a deploy-preview build, so it is noindexed; production deploys require the owner's explicit "yes, ship it".
- No production deploy, no new subscriptions, without explicit approval.

## Brand Commitments
- Name: SmooveOperator (wordmark "Smoove Operator"). Existing identity: black and gold with a cursive/neon wordmark (Yellowtail), original gold #C5A028, blue #00aaff as a minor accent.
- Voice: specific, mature, clear; "developing / intended / planned" where true.
- No em dashes or en dashes in site copy.
- No marketplace logos or trademarks, and no wording that implies affiliation with or endorsement by the marketplace or any brand resold.

## Evidence on Hand
- Confirmed publishable fact: holds a California seller's permit (number never shown).
- NOT approved for public display: legal entity type, city/region, social accounts, personal name.
- No testimonials, customer names, sales numbers, reviews, partner logos, or credentials exist. Never invent them.
- The old ATM/vending site's "50+ venues" counter and hello@smooveoperator.com email are not verified facts for this business.

## Product Principles
1. Prove carefulness by showing the process, not by claiming scale.
2. Say what is developing as plainly as what is done.
3. Every inquiry must arrive; a contact path that silently fails is the worst possible bug.
4. Respect the supplier's rules (channels, pricing, documentation) visibly and early.

## Accessibility & Inclusion
WCAG 2.2 AA contrast and keyboard access; reduced-motion respected.
