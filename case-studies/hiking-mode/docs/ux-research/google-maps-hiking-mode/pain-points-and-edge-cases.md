# Pain points & edge cases: Google Maps Hiking Mode

Status: Provisional hypothesis — aligned to Maya’s journey map

## Pain points (journey breaks)

### P1 — Trailhead handoff abandonment
- Detail: Maps is trusted to the lot, then deliberately abandoned for specialty apps — context and confidence break at the pavement edge.
- Stage: Approach to trailhead

### P2 — Wrong junction / lost trail line
- Detail: Road-centric routing and weak footpath emphasis make unsigned mountain forks high-anxiety moments.
- Stage: First miles on trail

### P3 — Elevation surprise under a full pack
- Detail: Grade and cumulative gain are under-communicated, so day plans blow up mid-climb.
- Stage: First miles on trail · Evening commit

### P4 — Scattered day-commit data
- Detail: Miles, water, camp, and exits live in different apps; evenings burn battery and attention.
- Stage: Evening camp / next-day commit

### P5 — Offline corridor gaps
- Detail: When signal dies on a ridge, incomplete offline packs leave hikers without a trustworthy plan.
- Stage: Remote stretch / no signal

### P6 — Bailout ambiguity
- Detail: Nearest road, trailhead, or exit spur is unclear when weather, injury, or fatigue forces a change of plan.
- Stage: Remote stretch / no signal

## Edge cases (rugged extremes → three suffering themes)

### T1 — Phone & corridor go dark
Suffering: Mid-climb or deep on a multi-day ridge, the phone dies or signal vanishes. The day plan, junction memory, and bailout map lived in that device — and now hikers are left with paper scraps, half-remembered screenshots, and rising panic.

#### E1 — Dead battery mid-climb
Phone dies on a steep, unsigned section; paper notes and prior screenshots become the only backup.

#### E6 — Zero-signal multi-day corridor
Two or more days without coverage; offline pack must include elevation, water, camp, and exits for the full stretch.

### T2 — The trail line lies
Suffering: At an unsigned fork, snow hides the tread, GPX and Maps disagree, or blaze systems feel foreign. Every wrong choice burns miles, water, and daylight — and trust in the map collapses right when continuity matters most.

#### E2 — Snow-obscured junction
Blazes and tread disappear under snow; conflicting apps disagree on which spur is the main trail.

#### E5 — Conflicting GPX vs Maps geometry
Imported track and on-device Maps trail line diverge at a fork; hikers do not know which source is current.

#### E7 — Foreign blaze / language systems
International or regional marking systems do not match hikers’ mental model; map labels alone are insufficient.

### T3 — Crisis when the plan fails
Suffering: A late-season spring marked as reliable is bone dry, or injury hits after dark with no bars. Hikers need the next water or the nearest road exit offline — without it, fatigue and fear compound into a real emergency.

#### E3 — Marked water source is dry
Community or map-marked spring is empty in late season; next reliable water adds miles and gain.

#### E4 — Night medical exit
Injury after dark with no signal; nearest bailout to a road or trailhead must be findable offline.

## Happy paths (features that meet the need)

Each suffering theme inverts into a happy path: the product behavior that meets hikers’ needs when Hiking mode works as designed. These bridge into Solution Maps features (H1 → corridor / day plan / offline, H2 → trail map / elevation, H3 → day plan / safety). On the case-study site (`#happy-path`), each path is visualized with a photoreal relief scene, detail phone mockup, and linked low-fi brief thumbnails. `#ideation` shows WF01–08 as the build brief; `#solution` productizes those behaviors as Google Maps Hiking Mode features with hi-fi phones; H chips mark the mapping.

### H1 — Corridor stays with you
- Addresses: T1 · E1, E6
- Need: Stay on plan when phone or signal fail
- Outcome: Before the ridge goes dark, the full multi-day corridor is packed offline — elevation, water, camp, and exits. When bars drop mid-climb, the day plan still opens.
- Features:
  - Offline pack for the full multi-day corridor (elevation, water, camp, exits)
  - “Corridor ready” status visible before departure
  - Day plan usable fully offline — no signal required

### H2 — Trust the fork
- Addresses: T2 · E2, E5, E7
- Need: Choose the right spur without app-switching
- Outcome: At an unsigned or snow-covered junction, footpaths stay readable, conflicts are labeled, and foreign blaze systems have a legend — one map, one clear recommended line.
- Features:
  - Trail-first footpaths with junction emphasis
  - GPX vs Maps conflict callout with a clear recommended line
  - Blaze / marking legend for foreign or regional systems

### H3 — Recover without drama
- Addresses: T3 · E3, E4
- Need: Get water or exit when the plan breaks
- Outcome: A dry spring or night injury does not strand the hiker. Next reliable water shows distance and gain; nearest bailout to a road or trailhead works offline; share stays calm.
- Features:
  - Next reliable water with distance and gain
  - Offline bailout to nearest road or trailhead
  - Calm safety share and advisory strip on the map
