# Analysis: Google Maps Hiking Mode

## Problem
Serious backpackers and long-distance hikers already use Google Maps to reach trailheads and towns, then lose a reliable navigation and planning partner once they leave paved roads. Trail continuity, multi-day pacing, elevation load, water and resupply, bailouts, and offline confidence live in fragmented apps, notes, and paper. Day and weekend hikers feel a lighter version of the same gap.

## Primary user
Serious backpackers and long-distance hikers planning and executing multi-day or thru-hike style travel, often with heavy packs, variable weather, and stretches without cell service. They still open Google Maps for roads, lodging, and resupply towns.

## Not for
- Pure road travelers who never leave pavement
- Technical alpinists whose primary need is mountaineering topos and rope systems
- People seeking a brand-new hiking-only social network

## Context of use
- Pre-trip: kitchen table, hostel, or motel Wi‑Fi — planning days, miles, and bailouts
- On trail: phone in hand or pocket, gloves, sun glare, low battery, intermittent signal
- Near towns: switching between dirt corridor and driving/walking into resupply

## User goal
Complete each hiking day safely and on plan — know where the trail goes, how hard the next miles are, where water and camp land, and how to exit if something goes wrong — without leaving the map tool they already trust for the paved world.

## Business goal
Assumption: Grow Maps engagement and differentiation in outdoor travel by keeping hikers inside Google Maps for the full journey (approach + trail + town), reducing handoff to specialty apps for core navigation and day planning.

## Constraints
- Hiking mode must feel native to Google Maps (not a separate app brand)
- Invented research for this case study (no live recruitment in this project)
- Web-ready tool without depending on production Google APIs / API keys
- Open to secondary day and weekend hikers without diluting the primary backpacker job

## Decision this research must inform
Whether Hiking mode should optimize first for **multi-day trail continuity and safety planning** (backpacker-led) while remaining usable for shorter hikes, versus optimizing first for **simple day-hike discovery** and treating long routes as advanced.

## Assumptions
- Assumption: Hikers already open Google Maps for trailheads and towns more often than dedicated apps for those road segments.
- Assumption: Fragmentation across AllTrails / Gaia / FarOut / GPX files is a major pain for long-distance hikers.
- Assumption: Offline confidence and bailout awareness matter as much as “pretty trail cards.”
- Assumption: A Maps-native mode will be adopted if it reduces app switching without forcing a new mental model.

## Unknowns
- How hikers currently sequence tools across pre-trip, on-trail, and town days
- Which failures on trail (wrong fork, surprise elevation, dry water, no exit plan) are most common and most feared
- What “good enough” day planning looks like in miles, elevation, and stop types
- How much day/weekend hikers need of the same system without feeling overwhelmed
- Trust barriers to relying on Maps for dirt navigation versus specialty apps

## Risks of designing without answers
- Shipping a day-hike gallery that serious backpackers dismiss as shallow
- Overloading casual hikers with thru-hike controls and driving them away
- Missing safety/offline needs and losing trust on the first real trip
- Solving discovery instead of continuity, leaving the trailhead-to-camp gap intact
