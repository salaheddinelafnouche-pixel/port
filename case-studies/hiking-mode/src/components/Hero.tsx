import { links, meta } from "../content";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__atmosphere" aria-hidden="true">
        <svg
          className="hero__topo"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a3d2b" />
              <stop offset="55%" stopColor="#243f32" />
              <stop offset="100%" stopColor="#0f1f18" />
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#sky)" />
          <g
            fill="none"
            stroke="#6b9b72"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          >
            <path d="M-40 560 C120 480, 220 620, 380 540 S620 430, 780 510 S1020 620, 1240 500" />
            <path d="M-40 600 C140 520, 260 660, 420 580 S660 470, 820 550 S1060 660, 1240 540" />
            <path d="M-40 640 C160 560, 300 700, 460 620 S700 510, 860 590 S1100 700, 1240 580" />
            <path d="M-40 680 C180 600, 340 740, 500 660 S740 550, 900 630 S1140 740, 1240 620" />
            <path d="M120 220 C260 180, 340 280, 480 220 S700 120, 860 190 S1040 280, 1180 200" />
            <path d="M80 280 C240 230, 360 330, 500 270 S740 170, 900 250 S1080 340, 1200 260" />
          </g>
          <path
            d="M0 720 L180 520 L320 610 L480 340 L620 480 L780 280 L940 430 L1100 250 L1200 320 L1200 800 L0 800 Z"
            fill="#0d1a14"
            opacity="0.55"
          />
          <path
            d="M0 760 L220 580 L360 650 L520 420 L680 540 L840 360 L1000 500 L1200 380 L1200 800 L0 800 Z"
            fill="#163026"
            opacity="0.7"
          />
          <circle cx="980" cy="160" r="4" fill="#c8e6c9" />
          <path
            d="M200 640 C360 560, 520 600, 700 520 S980 430, 1120 470"
            stroke="#7cb342"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="hero__content">
        <p className="hero__brand">Google Maps Hiking Mode</p>
        <h1 id="hero-title" className="hero__title">
          Trail continuity where Maps already lives
        </h1>
        <p className="hero__lede">
          A backpacker-led travel mode for multi-day dirt travel: day plans,
          elevation, offline packs, and bailouts, with a lighter Day / Weekend
          preset for casual hikers.
        </p>
        <div className="hero__actions">
          <a className="btn btn--light" href="#problem">
            Read case study
          </a>
          <a
            className="btn btn--ghost"
            href={links.prototypeLocal}
            target="_top"
            title="Opens the Hi-Fi prototype — use H1–H3 chips to walk Corridor, Fork, Recover"
          >
            Try H1–H3 prototype
          </a>
        </div>
        <p className="hero__meta">{meta.framing}</p>
      </div>
    </section>
  );
}
