import { journeyHighlights, personas } from "../content";
import { Reveal } from "./Reveal";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type DirectionIconName = "handoff" | "dayCommit" | "offline";

const stepIcons: DirectionIconName[] = ["handoff", "dayCommit", "offline"];

function DirectionIcon({
  name,
  className = "",
}: {
  name: DirectionIconName;
  className?: string;
}) {
  const common = {
    className: `direction-icon ${className}`.trim(),
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "handoff":
      return (
        <svg {...common}>
          <path {...stroke} d="M3 12h8" />
          <path {...stroke} d="M11 12c2.5-4 5-5.5 10-5.5" />
          <path {...stroke} d="M11 12c2.5 4 5 5.5 10 5.5" />
          <circle cx="11" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "dayCommit":
      return (
        <svg {...common}>
          <rect x="5" y="3.5" width="14" height="17" rx="2" {...stroke} />
          <path {...stroke} d="M8.5 9h7M8.5 13h7M8.5 17h4" />
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

export function Direction() {
  const { maya, jordan } = personas;

  return (
    <section className="section" id="direction">
      <div className="section__inner">
        <div className="direction-intro">
          <Reveal>
            <p className="eyebrow">Direction</p>
            <h2>Backpacker-led Hiking mode</h2>
            <p className="lead">
              Ship Hiking inside Google Maps: trail continuity from highway to
              tent, not a discovery feed or a separate hiking brand.
            </p>
          </Reveal>

          <Reveal className="direction-who" delay={50}>
            <div className="direction-who__person">
              <img
                src={maya.image}
                alt=""
                width={40}
                height={40}
                loading="lazy"
              />
              <p>
                <span className="direction-who__label">Primary</span>{' '}
                <strong>{maya.name}</strong> · thru-section backpacker
              </p>
            </div>
            <div className="direction-who__person">
              <img
                src={jordan.image}
                alt=""
                width={40}
                height={40}
                loading="lazy"
              />
              <p>
                <span className="direction-who__label">Secondary</span>{' '}
                <strong>{jordan.name}</strong> · Day / Weekend preset
              </p>
            </div>
          </Reveal>
        </div>

        <ol className="direction-spine" aria-label="Journey pressure spine">
          {journeyHighlights.map((j, i) => (
            <Reveal
              key={j.stage}
              className="direction-spine__step"
              as="li"
              delay={80 + i * 60}
            >
              <div className="direction-spine__icon-row">
                <span className="direction-spine__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <DirectionIcon name={stepIcons[i]} />
              </div>
              <h3 className="direction-spine__title">{j.stage}</h3>
              <p className="direction-spine__opportunity">{j.opportunity}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="direction-bridge" delay={200}>
          <p>These three pressures define the Happy Path that follows.</p>
        </Reveal>
      </div>
    </section>
  );
}
