# Case study: Google Maps Hiking Mode

Senior UX case study + ready web tool. Hiking mode lives **inside** Google Maps patterns for serious backpackers / long-distance hikers, and stays open to day & weekend hikers via a lighter preset.

**Narrative site:** [`../../case-study`](../../case-study) — `cd case-study && npm run dev` (port 5174).

> Research in this case study is **synthesized** for portfolio/product storytelling. Quotes and stats are labeled Hypothesis — not live fieldwork.

## Story arc

1. **Empathize** — Mixed survey + interviews (invented instruments & findings)  
2. **Define** — Backpacker-led problem: trail continuity, day-commit clarity, offline & bailouts  
3. **Happy path** — H1–H3 must-works inverted from edge themes T1–T3 (`#happy-path`)  
4. **Ideation (low-fi)** — WF01–08 as the build brief on Maps chrome (`#ideation`)  
5. **Solution** — H1–H3 ship as Google Maps Hiking Mode features (hi-fi on `#solution`)  
6. **Prototype** — Figma flow + working web tool implementing the same briefs  

## Decision

Optimize Hiking mode for **multi-day trail continuity and safety planning**, with a **Day / Weekend preset** — not a separate day-hike discovery product.

Linked findings: F1 tool-switching, F2 stress on junctions/offline/water/bailouts, F3 day-commit must-haves, F4 dirt-trust gap, F5 secondary subset needs, F6 consolidation intent → see [`../ux-research/google-maps-hiking-mode/findings.md`](../ux-research/google-maps-hiking-mode/findings.md).

## Document map

### Empathize
| File | Purpose |
|------|---------|
| [analysis.md](../ux-research/google-maps-hiking-mode/analysis.md) | Problem, users, decision |
| [research-plan.md](../ux-research/google-maps-hiking-mode/research-plan.md) | Mixed methods plan |
| [survey-instrument.md](../ux-research/google-maps-hiking-mode/survey-instrument.md) | Survey questions |
| [interview-guide.md](../ux-research/google-maps-hiking-mode/interview-guide.md) | Interview themes |
| [findings.md](../ux-research/google-maps-hiking-mode/findings.md) | Synthesized results |
| [empathy-map.md](../ux-research/google-maps-hiking-mode/empathy-map.md) | Maya (primary) |
| [personas.md](../ux-research/google-maps-hiking-mode/personas.md) | Maya + Jordan |
| [journey-map.md](../ux-research/google-maps-hiking-mode/journey-map.md) | Four-day section journey |

### Define, happy path & wireframes
| File | Purpose |
|------|---------|
| [define.md](define.md) | Problem statement, HMW, principles |
| [../ux-research/google-maps-hiking-mode/pain-points-and-edge-cases.md](../ux-research/google-maps-hiking-mode/pain-points-and-edge-cases.md) | Edge themes T1–T3 and happy paths H1–H3 (before Ideation / Solution) |
| [ideation-wireframes.md](ideation-wireframes.md) | Ideas on Maps chrome; low-fi WF index for live `#ideation` + Solution map |
| [wireframes/](wireframes/) | Low-fi SVG frames WF01–WF08 (shown on `#ideation`) |
| [`../../case-study/public/wireframes/`](../../case-study/public/wireframes/) | Served low-fi assets for the narrative site |
| [`../../case-study/public/solution/`](../../case-study/public/solution/) | Hi-fi Maps feature phones used by `#solution` |

### Prototypes
| Deliverable | Link |
|-------------|------|
| Narrative case study site | [`../../case-study`](../../case-study) |
| Figma hi-fi + prototype | [Google Maps — Hiking Mode Hi-Fi](https://www.figma.com/design/j4pcwkgYmAAmifmdROaYfQ) — frames pending MCP sync; see [figma-hifi-handoff.md](figma-hifi-handoff.md) |
| Clickable Hi-Fi prototype | [`../../web`](../../web) — `npm run dev` → port 5173 |

## Product capabilities (mapped to research)

| Capability | Finding |
|------------|---------|
| Hiking travel mode | F1, F6 |
| Trail-first map + waypoints | F2, F4 |
| Multi-day overview & day plan | F3, F6 |
| Elevation & steep flags | F2, F3 |
| Safety strip (share / bailout / advisory) | F2, F3 |
| Offline pack | F2, F4 |
| Backpacker vs Day/Weekend preset | F5 |

## How to present

Open the [case study site](../../case-study) and scroll **Happy path → Ideation → Solution** to show low-fi as the build brief → click through Figma starting at **01 Home Search** (low-fi LF page when synced) → run the web app and enter **Hike** mode on the Sierra Crest demo corridor to verify H1–H3. Docs in this folder remain the research/spec source of truth.
