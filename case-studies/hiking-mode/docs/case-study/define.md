# Define: Google Maps Hiking Mode

## Problem statement
Serious backpackers use Google Maps to reach trailheads and towns, then lose continuous, trustworthy support for multi-day dirt travel — trail continuity, elevation load, water and camp, bailouts, and offline readiness — forcing risky app-switching when attention and battery are scarce. Day and weekend hikers share the need for clear trails and honest difficulty, without thru-hike complexity.

## Jobs to be done
- Primary: When I’m hiking a multi-day section, I want trail-aware day planning and navigation in the map I already use for roads, so I can stay on plan and exit safely with less app juggling.
- Secondary: When I have a day or weekend free, I want an obvious trail and a realistic effort estimate, so I don’t get lost or overcommit.

## How might we
1. HMW carry hikers from highway → trail → town without breaking context?
2. HMW make footpaths, grade, and junctions readable in a Maps-native view?
3. HMW help backpackers commit to tomorrow’s day with distance, elevation, water, camp, and bailouts?
4. HMW make offline corridor confidence visible before signal drops?
5. HMW offer a lighter path for day/weekend hikers without forking into a separate product?

## Success metrics (case study / prototype)
- User can enter Hiking mode from familiar Maps travel modes
- User can select a long corridor and see multi-day segments with elevation
- User can identify water, camp, and bailout waypoints on the route
- User can mark a corridor offline-ready
- User can switch to a Day / Weekend preset that simplifies the sheet
- Case study links each capability to a synthesized finding (F1–F6)

## Design principles
1. **Maps-native, trail-smart** — Keep Google Maps chrome; change what the map prioritizes in Hiking mode.
2. **Backpacker-led, openly usable** — Default depth for long routes; lighter preset for casual hikers.
3. **Day-commit clarity** — Distance, gain, water, camp, bailout before decoration.
4. **Offline is a first-class state** — Visible before departure, not a buried setting.
5. **Safety without drama** — Share progress and nearest exit as calm utilities.

## Scope lock
In: mode entry, trail-first map, long-route planner, elevation sheet, safety strip, offline pack, experience presets.  
Out: social trail feed, full AllTrails replacement catalog, accounts, native mobile binaries, live Google production APIs.
