# Figma Hi-Fi handoff (MCP sync blocked)

**Target file (new):** [Google Maps — Hiking Mode Hi-Fi](https://www.figma.com/design/j4pcwkgYmAAmifmdROaYfQ)  
**Legacy file:** [Google Maps — Hiking Mode](https://www.figma.com/design/Bmww8pHm5qviX7781Dj0ul)

Figma MCP Starter quota blocked `use_figma` writes after the new file was created empty. Rebuild the frames below from the React prototype at `http://localhost:5173` (source of truth) when quota allows.

## Frames (360×720)

| Frame | React screen | Primary CTA → |
|-------|--------------|---------------|
| 01 Home Search | `home` | Try Hiking mode → 02 |
| 02 Mode Switcher | `modes` | Start in Hiking mode → 03 |
| 03 Trail-first Map | `map` | Steps → 04 · Day plan → 05 · Safety strip → 08 |
| 04 Multi-day Corridor | `corridor` | Corridor ready → 07 · Open Day 2 → 05 |
| 05 Day Plan | `day-plan` | Elevation → 06 · Offline pack → 07 · Water/Bailout → 08 |
| 06 Elevation | `elevation` | Stay on main → 03 · Continue → 07 |
| 07 Offline Pack | `offline` | Manage → 08 |
| 08 Safety Share | `safety` | Back to trail map → 03 |

## Happy-path hotspots (page-level or overlay)

- **H1** → 07 Offline Pack  
- **H2** → 03 Trail-first Map  
- **H3** → 08 Safety Share  

## Prototype setup

1. Present start node: **01 Home Search**
2. Transitions: dissolve ~200ms or slide-in from bottom for sheets
3. Visual reference: [`public/solution/*.svg`](../../public/solution/) + running `web/` app

## Resume command (agent)

When MCP quota resets: `create_session` on `j4pcwkgYmAAmifmdROaYfQ` → `use_figma` build 8 editable frames → `setReactionsAsync` for hotspots above → set `prototypeStartNode` to 01.
