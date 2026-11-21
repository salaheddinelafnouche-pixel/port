import { personas } from "../content";
import { Reveal } from "./Reveal";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type GapIconName = "continuity" | "elevation" | "water" | "bailout" | "offline";

const gaps: { icon: GapIconName; label: string }[] = [
  { icon: "continuity", label: "Trail continuity" },
  { icon: "elevation", label: "Elevation load" },
  { icon: "water", label: "Water and camp" },
  { icon: "bailout", label: "Bailouts" },
  { icon: "offline", label: "Offline readiness" },
];

function GapIcon({ name }: { name: GapIconName }) {
  const common = {
    className: "problem-gap__icon",
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "continuity":
      return (
        <svg {...common}>
          <path {...stroke} d="M3 12h7" />
          <path {...stroke} d="M14 12h7" strokeDasharray="2.5 2.5" />
          <circle cx="11.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <path {...stroke} d="M10 9.5l3 2.5-3 2.5" opacity="0.55" />
        </svg>
      );
    case "elevation":
      return (
        <svg {...common}>
          <path {...stroke} d="M3 18l5.5-8 4 5 3.5-6L21 18" />
          <path {...stroke} d="M3 18h18" opacity="0.35" />
        </svg>
      );
    case "water":
      return (
        <svg {...common}>
          <path
            {...stroke}
            d="M12 4c-3.2 4.2-5 7-5 9.2a5 5 0 0010 0C17 11 15.2 8.2 12 4z"
          />
          <path
            {...stroke}
            d="M10 14.5c.6 1.2 1.4 1.8 2.5 1.8"
            opacity="0.55"
          />
        </svg>
      );
    case "bailout":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" {...stroke} />
          <path {...stroke} d="M12 7.5v5.5l3.5 2" />
        </svg>
      );
    case "offline":
      return (
        <svg {...common}>
          <path {...stroke} d="M8.2 16.2a5.2 5.2 0 017.6 0" />
          <path {...stroke} d="M5.2 13.2a9.2 9.2 0 0113.6 0" />
          <circle cx="12" cy="19.2" r="1.1" fill="currentColor" stroke="none" />
          <path {...stroke} d="M5 5l14 14" />
        </svg>
      );
  }
}

function TrustCliff() {
  return (
    <figure className="problem-cliff">
      <p className="sr-only">
        Maps owns pavement at trust 4.6, then drops at the trailhead and is
        abandoned on dirt at 2.4. Hikers switch (79% dual-app) to specialty apps
        that hold dirt trust at 4.1.
      </p>
      <div className="problem-cliff__meta" aria-hidden="true">
        <p className="problem-cliff__kicker">Trust cliff, then app switch</p>
        <div className="problem-cliff__legend">
          <span className="problem-cliff__legend-item">
            <span className="problem-cliff__swatch problem-cliff__swatch--maps" />
            Maps
          </span>
          <span className="problem-cliff__legend-item">
            <span className="problem-cliff__swatch problem-cliff__swatch--specialty" />
            Specialty apps
          </span>
        </div>
      </div>
      <svg
        className="problem-cliff__svg"
        viewBox="0 0 736 280"
        role="img"
        aria-label="Maps owns pavement at 4.6, cliffs at the trailhead and fades to abandoned 2.4 on dirt; specialty apps take over at 4.1 after the switch"
      >
        <defs>
          <marker
            id="problem-cliff-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 0 L 10 5 L 0 10 z"
              fill="currentColor"
              opacity="0.45"
            />
          </marker>
        </defs>

        <line
          x1="48"
          y1="48"
          x2="48"
          y2="210"
          className="problem-cliff__axis"
        />
        <text className="problem-cliff__tick" x="36" y="58" textAnchor="end">
          5
        </text>
        <text className="problem-cliff__tick" x="36" y="128" textAnchor="end">
          3
        </text>
        <text className="problem-cliff__tick" x="36" y="198" textAnchor="end">
          1
        </text>
        <text
          className="problem-cliff__tick"
          x="20"
          y="118"
          textAnchor="middle"
          transform="rotate(-90 20 118)"
        >
          Trust
        </text>

        <line
          x1="48"
          y1="210"
          x2="700"
          y2="210"
          className="problem-cliff__axis"
        />

        <rect
          x="56"
          y="56"
          width="200"
          height="154"
          className="problem-cliff__zone"
        />
        <rect
          x="256"
          y="56"
          width="28"
          height="154"
          className="problem-cliff__zone problem-cliff__zone--handoff"
        />
        <rect
          x="284"
          y="56"
          width="416"
          height="154"
          className="problem-cliff__zone problem-cliff__zone--dirt"
        />

        <text
          className="problem-cliff__zone-label"
          x="156"
          y="78"
          textAnchor="middle"
        >
          Pavement
        </text>
        <text
          className="problem-cliff__zone-label problem-cliff__zone-label--strong"
          x="270"
          y="78"
          textAnchor="middle"
        >
          Trailhead
        </text>
        <text
          className="problem-cliff__zone-label"
          x="492"
          y="78"
          textAnchor="middle"
        >
          Dirt
        </text>

        {/* Maps owns pavement, then cliffs at handoff */}
        <path
          d="M 72 70 L 248 70 L 270 70 L 270 168"
          className="problem-cliff__line problem-cliff__line--maps"
        />
        <circle
          cx="120"
          cy="70"
          r="5"
          className="problem-cliff__dot problem-cliff__dot--maps"
        />
        <circle
          cx="248"
          cy="70"
          r="5"
          className="problem-cliff__dot problem-cliff__dot--maps"
        />
        <circle
          cx="270"
          cy="70"
          r="5"
          className="problem-cliff__dot problem-cliff__dot--maps"
        />
        <circle
          cx="270"
          cy="168"
          r="6"
          className="problem-cliff__dot problem-cliff__dot--maps problem-cliff__dot--cliff"
        />

        <text
          className="problem-cliff__score"
          x="120"
          y="58"
          textAnchor="middle"
        >
          4.6
        </text>

        {/* Short faded stub: abandoned on dirt, not still navigating */}
        <path
          d="M 270 168 L 340 176"
          className="problem-cliff__line problem-cliff__line--maps-stub"
        />
        <circle
          cx="340"
          cy="176"
          r="4.5"
          className="problem-cliff__dot problem-cliff__dot--maps-stub"
        />
        <text
          className="problem-cliff__score problem-cliff__score--stub"
          x="340"
          y="198"
          textAnchor="middle"
        >
          2.4
        </text>
        <text
          className="problem-cliff__tick"
          x="368"
          y="176"
          textAnchor="start"
        >
          Abandoned
        </text>

        {/* Specialty owns dirt only */}
        <path
          d="M 300 96 L 420 90 L 640 88"
          className="problem-cliff__line problem-cliff__line--specialty"
        />
        <circle
          cx="300"
          cy="96"
          r="5"
          className="problem-cliff__dot problem-cliff__dot--specialty"
        />
        <circle
          cx="640"
          cy="88"
          r="5"
          className="problem-cliff__dot problem-cliff__dot--specialty"
        />
        <text
          className="problem-cliff__score"
          x="640"
          y="76"
          textAnchor="middle"
        >
          4.1
        </text>

        <line
          x1="270"
          y1="168"
          x2="300"
          y2="96"
          className="problem-cliff__switch"
          markerEnd="url(#problem-cliff-arrow)"
        />
        <text
          className="problem-cliff__tick"
          x="318"
          y="128"
          textAnchor="middle"
        >
          Switch
        </text>
        <text
          className="problem-cliff__tick"
          x="318"
          y="142"
          textAnchor="middle"
        >
          79% dual-app
        </text>

        <text
          className="problem-cliff__tick"
          x="156"
          y="236"
          textAnchor="middle"
        >
          Drive + towns
        </text>
        <text
          className="problem-cliff__zone-label problem-cliff__zone-label--strong"
          x="270"
          y="236"
          textAnchor="middle"
        >
          Handoff
        </text>
        <text
          className="problem-cliff__tick"
          x="492"
          y="236"
          textAnchor="middle"
        >
          On-trail plan
        </text>
        <text
          className="problem-cliff__footnote"
          x="368"
          y="262"
          textAnchor="middle"
        >
          Mean trust 1–5 · hypothesis
        </text>
      </svg>
    </figure>
  );
}

export function Problem() {
  const { maya, jordan } = personas;

  return (
    <section className="section" id="problem">
      <div className="section__inner">
        <Reveal className="problem-intro">
          <p className="eyebrow">Problem</p>
          <h2>Road confidence ends at the trailhead</h2>
          <p className="lead">
            Maps holds trust on pavement, then drops on dirt. Hikers switch apps
            at the handoff when attention and battery are already scarce.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <TrustCliff />
        </Reveal>

        <Reveal className="problem-gaps-wrap" delay={100}>
          <p className="problem-subhead">What breaks after the handoff</p>
          <ul className="problem-gaps" aria-label="Five dirt-support gaps">
            {gaps.map((gap) => (
              <li key={gap.label} className="problem-gap">
                <GapIcon name={gap.icon} />
                <span>{gap.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="problem-who" delay={140}>
          <p className="problem-subhead">Who feels it</p>
          <div className="problem-who__grid">
            <div className="problem-who__person">
              <img
                src={maya.image}
                alt=""
                width={40}
                height={40}
                loading="lazy"
              />
              <p>
                <span className="problem-who__label">Primary · multi-day</span>
                <strong>{maya.name}</strong>
                <span className="problem-who__job">
                  Day plan · safe exit · one map
                </span>
              </p>
            </div>
            <div className="problem-who__person">
              <img
                src={jordan.image}
                alt=""
                width={40}
                height={40}
                loading="lazy"
              />
              <p>
                <span className="problem-who__label">
                  Secondary · day / weekend
                </span>
                <strong>{jordan.name}</strong>
                <span className="problem-who__job">
                  Clear trail · honest effort
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
