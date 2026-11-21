# Findings: Google Maps Hiking Mode

Status: **Synthesized / Hypothesis** — invented for this case study. Not real fieldwork.

## Sample (synthesized)
- Survey: n=124 completers (88 backpacker-primary, 36 day/weekend)
- Interviews: n=8 (6 backpacker / long-distance, 2 day/weekend)

## Key findings

### F1 — Maps is the road layer; specialty apps own dirt (RQ1)
Hypothesis: 79% of backpacker-primary respondents used Google Maps and at least one specialty trail app on the same trip. Maps dominated driving and town; specialty apps dominated on-trail navigation and water/camp notes.

Hypothetical interview: “I open Maps until the gravel lot. Then I switch. Every time.”

### F2 — Continuity and exits beat discovery as stress drivers (RQ2)
Hypothesis: Top stress selections among backpackers — wrong junction (61%), offline map gap (54%), dry water (49%), no bailout (47%), elevation surprise (44%). “Finding a new scenic trail” ranked low as a stress theme.

### F3 — Day-commit cluster is clear (RQ3)
Hypothesis: Must-have rates for backpackers — distance 92%, elevation gain 88%, water 85%, bailout 71%, campsite 69%, weather/advisory 66%. Star ratings and social tips trailed far behind.

### F4 — Trust gap on dirt is large (RQ4)
Hypothesis: Mean trust 1–5 — Maps on roads 4.6; Maps on dirt 2.4; primary specialty app on dirt 4.1. Interviews framed the gap as missing trail emphasis, grade, and offline corridor confidence — not dislike of the Maps UI.

### F5 — Secondary users need a subset, not a different product (RQ5)
Hypothesis: Day/weekend hikers shared junction clarity and difficulty/time needs; they rejected multi-day resupply density. 72% still said a simpler Hiking mode in Maps would help vs. road-only view.

### F6 — Consolidation intent supports backpacker-led mode (RQ6)
Hypothesis: 68% of backpacker-primary rated 4–5 likelihood to use a Maps Hiking mode with multi-day plan, elevation, offline pack, and bailouts as primary on-trail map. Interviews conditioned trust on “works without signal” and “shows where I can bail.”

## Affinity clusters (see affinity-clusters.md)
C1 Road vs dirt · C2 Continuity/exits · C3 Day-commit sheet · C4 Dirt-trust gap · C5 Subset not fork · C6 Consolidation intent — each maps to F1–F6.

## Pain points & edge cases
Journey breaks P1–P6 and rugged extremes E1–E7 (clustered into suffering themes T1–T3) are documented in `pain-points-and-edge-cases.md` and rendered in the case-study Research section. Happy paths H1–H3 invert those themes into features that meet the need and appear on the case-study site before Solution.

## Decision implication
**Choose backpacker-led Hiking mode** (trail continuity, multi-day planning, elevation, water/camp/bailouts, offline pack, safety share) with a **lighter experience preset** for day/weekend hikers. Reject day-hike discovery as the primary optimization.

## Biggest assumption still to validate
Whether hikers will grant Maps dirt-trust in the field after one successful offline corridor — or whether specialty-app habit remains sticky even when feature parity is close.
