# Google Maps — Hiking Mode

UX case study and clickable Hi-Fi mobile prototype: Hiking as a native Maps mode for serious backpackers, open to day/weekend hikers.

**Portfolio route:** `/hiking-mode` (narrative) · `/hiking-mode/prototype/` (Hi-Fi). Source of truth for the live site lives here under `case-studies/hiking-mode/`; production builds land in `public/hiking-mode/`.

## Quick start (case study site)

```bash
npm install
npm run dev
```

Open **http://localhost:5174** for the scrollable narrative (research → happy path → ideation/low-fi → solution → prototype).

## Quick start (Hi-Fi prototype)

```bash
cd web
npm install
npm run dev
```

Open **http://localhost:5173**. Phone-framed clickable screens matching Solution hi-fi:

Home → Mode switcher → Trail map → Corridor → Day plan → Elevation → Offline pack → Safety.

Use **H1 / H2 / H3** chips to jump happy paths (Corridor ready · Trust the fork · Recover).

No Google API key required (static map chrome + sheets).

## Case study

- Narrative site: this repo root (`npm run dev` → port 5174)
- Docs index: [`docs/case-study/README.md`](docs/case-study/README.md)
- Research pack: [`docs/ux-research/google-maps-hiking-mode/`](docs/ux-research/google-maps-hiking-mode/)

## Figma prototype

[Google Maps — Hiking Mode Hi-Fi](https://www.figma.com/design/j4pcwkgYmAAmifmdROaYfQ) — file created for hi-fi frames.

**Sync status:** Figma MCP Starter quota blocked frame writes. React `web/` is the interactive source of truth. Frame + hotspot checklist: [`docs/case-study/figma-hifi-handoff.md`](docs/case-study/figma-hifi-handoff.md). Legacy file: [Bmww8pHm5qviX7781Dj0ul](https://www.figma.com/design/Bmww8pHm5qviX7781Dj0ul).

## Stack

- Docs: Markdown + SVG wireframes / solution mockups
- Case study site: Vite, React, TypeScript
- Hi-Fi prototype: Vite, React, TypeScript (phone-framed clickable screens)
- Design: Figma Design file with prototype reactions (pending MCP sync)
