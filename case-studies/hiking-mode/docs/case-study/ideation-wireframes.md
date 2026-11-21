# Ideation & wireframes: Google Maps Hiking Mode

## Ideation summary
We keep Google Maps structure (search, map canvas, travel modes, bottom sheets) and add Hiking as a first-class mode. New ideas sit on that chrome rather than inventing a separate hiking brand.

| Idea | Maps chrome kept | Hiking addition | Finding |
|------|------------------|-----------------|--------|
| Mode entry | Travel mode row | Hiking icon beside Walk/Bike | F1, F6 |
| Trail-first map | Basemap + blue dot | Emphasize footpaths; mute highways; difficulty tint | F2, F4 |
| Long-route planner | Directions sheet pattern | Multi-day segments, daily miles/gain, stop types | F3, F6 |
| Elevation sheet | Bottom sheet | Grade profile; steep flags | F2, F3 |
| Safety strip | Compact map overlay | Share + nearest bailout + advisory | F2, F3 |
| Offline pack | Download affordance | Corridor select + Ready offline state | F2, F4 |
| Experience preset | Settings / chip | Backpacker (default) vs Day/Weekend | F5 |

## Live on the case-study site

Narrative scroll: **Happy path → Ideation (`#ideation`) → Solution**.

- `#happy-path` defines H1–H3 must-works and links to hand-sketch thumbnail briefs.
- `#ideation` renders WF01–08 as **hand-drawn pencil sketches on paper** (not phone screens) — the build brief (job, finding, H chips).
- `#solution` productizes those behaviors as hi-fi Google Maps Hiking Mode features.

Site assets: [`../../case-study/public/wireframes/`](../../case-study/public/wireframes/). Figma low-fi page (LF01–LF08) should mirror these when MCP quota allows — see [`figma.md`](figma.md).

## Final solution on the case-study site

`#solution` presents **hi-fi Google Maps Hiking Mode features** (not the low-fi wireframe index). H1–H3 happy-path behaviors are productized as Maps features:

| Maps feature | Happy path | Job |
|--------------|------------|-----|
| Hiking travel mode | — | Mode row entry beside Drive / Walk / Bike |
| Trail-first map | H2 | Recommended line, GPX vs Maps, blaze legend |
| Multi-day corridor | H1 | Overview + Corridor ready + Backpacker preset |
| Day plan | H1 · H3 | Offline day sheet with water, bailout, camp |
| Elevation | H2 | Grade profile, steep zone, junction trust |
| Offline pack | H1 | Corridor ready pack before signal drops |
| Safety strip | H3 | Next water, offline bailout, calm share + advisory |

Hi-fi phone SVGs: [`../../case-study/public/solution/`](../../case-study/public/solution/).

## Happy paths in the low-fi flow
H1–H3 behaviors are also embedded in ideation wireframes WF03–08:

| Happy path | Wireframes | Features in frames |
|------------|------------|--------------------|
| H1 Corridor stays with you | WF04, WF05, WF07 | Corridor ready chip; day plan available offline; packed elevation / water / camp / exits |
| H2 Trust the fork | WF03, WF06 | Recommended line; GPX vs Maps resolved; blaze legend; junction grade callout |
| H3 Recover without drama | WF05, WF08 | Next water with mi + gain; offline bailout; calm share + advisory |

## Wireframe index (ideation / low-fi)
Low-fi SVG frames in [`wireframes/`](wireframes/) — research & ideation artifacts; the narrative site `#ideation` shows them; `#solution` uses hi-fi Maps feature mockups instead.

1. [`01-home-search.svg`](wireframes/01-home-search.svg) — Maps home + search + Hiking promo
2. [`02-mode-switcher.svg`](wireframes/02-mode-switcher.svg) — Modes including Hiking
3. [`03-hiking-map.svg`](wireframes/03-hiking-map.svg) — Trail-first map + trust fork (H2) + safety strip
4. [`04-route-overview.svg`](wireframes/04-route-overview.svg) — Corridor overview + Corridor ready (H1)
5. [`05-day-plan.svg`](wireframes/05-day-plan.svg) — Day plan with next water + bailout (H1, H3)
6. [`06-elevation.svg`](wireframes/06-elevation.svg) — Elevation, steep flag, junction trust (H2)
7. [`07-offline-pack.svg`](wireframes/07-offline-pack.svg) — Corridor ready offline pack (H1)
8. [`08-safety-share.svg`](wireframes/08-safety-share.svg) — Next water, offline bailout, calm share (H3)

## Flow
Home → Directions modes → Hiking → Select corridor → Route overview → Day plan ↔ Elevation → Offline pack → Safety share (available throughout Hiking).

## Web handoff
The ready tool under [`../../web`](../../web) implements H1–H3 from these briefs: Corridor ready + offline day plan (H1), junction / GPX / blaze trust (H2), next water mi+gain + offline bailout (H3).
