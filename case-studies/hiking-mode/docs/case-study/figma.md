# Figma prototype

**Hi-Fi file (current):** [Google Maps — Hiking Mode Hi-Fi](https://www.figma.com/design/j4pcwkgYmAAmifmdROaYfQ)  
**Legacy file:** [Google Maps — Hiking Mode](https://www.figma.com/design/Bmww8pHm5qviX7781Dj0ul)

**Flow start:** `01 Home Search`  
**Interactive source of truth today:** [`web/`](../../web/) at `http://localhost:5173`

## Low-fi / Ideation (build briefs)

Narrative site `#ideation` renders low-fi WF01–08 as **hand-drawn paper sketches** from [`wireframes/`](wireframes/) and [`../../public/wireframes/`](../../public/wireframes/).

| Frame | Job | Happy path |
|-------|-----|------------|
| LF01 / WF01 Home Search | Familiar Maps surface + Hiking promo | — |
| LF02 / WF02 Mode Switcher | Hike beside Drive / Walk / Bike | — |
| LF03 / WF03 Hiking Map | Recommended trail, GPX vs Maps, blaze legend, safety strip | H2 |
| LF04 / WF04 Route Overview | Multi-day corridor + Corridor ready | H1 |
| LF05 / WF05 Day Plan | Next water (mi + gain), bailout, camp; offline | H1 · H3 |
| LF06 / WF06 Elevation | Grade profile, steep zone, junction stay-on-main | H2 |
| LF07 / WF07 Offline Pack | Corridor ready pack (elevation / water / camp / exits) | H1 |
| LF08 / WF08 Safety Share | Next water, offline bailout, calm share + advisory | H3 |

**Flow:** Home → Modes → Hiking map → Overview → Day plan ↔ Elevation → Offline → Safety.

## Main flow (hi-fi)

Home → Mode switcher → Hiking map → Route overview → Day plan → Elevation → Offline pack → Safety share (loops back to Hiking map)

| Frame | Job | Happy path |
|-------|-----|------------|
| 01 Home Search | Familiar Maps surface + Hiking promo CTA | — |
| 02 Mode Switcher | Hike beside Drive / Transit / Walk / Bike | — |
| 03 Hiking Map | Recommended trail at fork, GPX vs Maps resolved, blaze legend, safety strip | H2 |
| 04 Route Overview | Multi-day corridor + **Corridor ready** chip + Backpacker / Day·Weekend preset | H1 |
| 05 Day Plan | Next water (mi + gain), bailout, camp; available offline | H1 · H3 |
| 06 Elevation | Grade profile, steep zone, junction stay-on-main-grade callout | H2 |
| 07 Offline Pack | **Corridor ready** packed state (elevation / water / camp / exits) | H1 |
| 08 Safety Share | Next water, offline bailout, calm share + advisory | H3 |

**Case-study site `#solution`:** hi-fi Maps feature showcase in [`../../public/solution/`](../../public/solution/).

## Happy-path detail states (H1–H3)

| Frame | Inverts | Job |
|-------|---------|-----|
| H1 Corridor ready | T1 | Offline pack ready + day plan works offline |
| H2 Trust the fork | T2 | Recommended trail vs GPX conflict + blaze legend |
| H3 Recover | T3 | Next water, offline bailout, calm share/advisory |

Prototype hotspots: Offline → H1, Hiking map → H2, Safety → H3.

## Sync note (Hi-fi)

**2026-11-17:** Created [j4pcwkgYmAAmifmdROaYfQ](https://www.figma.com/design/j4pcwkgYmAAmifmdROaYfQ) for editable hi-fi frames. **Figma MCP Starter quota blocked `use_figma` writes** before frames could be populated. React clickable prototype in [`web/`](../../web/) is the working interactive deliverable. Frame list + reactions: [`figma-hifi-handoff.md`](figma-hifi-handoff.md). Re-run MCP sync when quota allows; Present from **01 Home Search**.

**Handoff:** Run the Hi-Fi prototype under `web/` (`npm run dev` → port 5173).
