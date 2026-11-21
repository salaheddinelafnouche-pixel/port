import {
  learningAssumption,
  learningInvite,
  learnings,
  links,
} from "../content";
import { Reveal } from "./Reveal";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type LearningIconName = "handoff" | "stress" | "offline" | "preset";

const learningIcons: Record<string, LearningIconName> = {
  L1: "handoff",
  L2: "stress",
  L3: "offline",
  L4: "preset",
};

function LearningIcon({
  name,
  className = "",
}: {
  name: LearningIconName;
  className?: string;
}) {
  const common = {
    className: `learning__icon ${className}`.trim(),
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "handoff":
      return (
        <svg {...common}>
          <path {...stroke} d="M3 12h7" />
          <path {...stroke} d="M14 12h7" strokeDasharray="2.5 2.5" />
          <circle cx="11.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <path {...stroke} d="M10 9.5l3 2.5-3 2.5" opacity="0.55" />
        </svg>
      );
    case "stress":
      return (
        <svg {...common}>
          <path {...stroke} d="M5 18V10" />
          <path {...stroke} d="M10 18V7" />
          <path {...stroke} d="M15 18V12" opacity="0.55" />
          <path {...stroke} d="M20 18V15" opacity="0.35" />
          <path {...stroke} d="M4 18h17" opacity="0.35" />
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
    case "preset":
      return (
        <svg {...common}>
          <path {...stroke} d="M4 12h8" />
          <path {...stroke} d="M12 12c2.2-3.2 4.2-4.5 8-4.5" />
          <path {...stroke} d="M12 12c1.6 2.4 3.2 3.5 5.5 3.8" opacity="0.55" />
          <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

function AssumptionMark() {
  return (
    <svg
      className="assumption__mark"
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="4 3.5"
        opacity="0.55"
      />
      <path
        d="M16.2 16.5c.6-1.8 2.1-2.9 3.9-2.9 2.2 0 3.7 1.4 3.7 3.4 0 1.5-.7 2.4-2.2 3.3-.9.5-1.3 1-1.3 1.9v.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="27.5" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Learnings() {
  return (
    <section className="section" id="learnings">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">Learnings</p>
          <h2>What this work taught me</h2>
          <p className="lead">
            Patterns other designers and engineers can lift into their own work.
          </p>
        </Reveal>

        <ol className="learnings" aria-label="Craft learnings">
          {learnings.map((item, i) => (
            <Reveal
              key={item.id}
              as="li"
              className="learning"
              delay={i * 50}
            >
              <div className="learning__head">
                <span className="learning__id">{item.id}</span>
                <LearningIcon name={learningIcons[item.id]} />
                <p className="learning__audience">{item.audience}</p>
              </div>
              <h3>{item.title}</h3>
              <p className="learning__body">{item.body}</p>
              <p className="learning__steal">
                <span>Steal this</span>
                {item.stealThis}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="assumption" delay={120}>
          <AssumptionMark />
          <div className="assumption__copy">
            <h3>{learningAssumption.title}</h3>
            <p>{learningAssumption.body}</p>
          </div>
        </Reveal>

        <Reveal className="learning-invite" delay={160}>
          <h3>{learningInvite.title}</h3>
          <p>{learningInvite.body}</p>
          <div className="learning-invite__links">
            <a
              className="btn btn--solid"
              href={links.figma}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Figma
            </a>
            <a
              className="btn btn--outline"
              href={links.prototypeLocal}
              target="_top"
              title="Opens the Hi-Fi prototype — use H1–H3 chips to walk Corridor, Fork, Recover"
            >
              Walk H1–H3 in prototype
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
