import { happyPaths } from "../content";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";

export function HappyPath() {
  return (
    <section className="section section--mist" id="happy-path">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">Happy path</p>
          <h2>What must work when extremes hit</h2>
          <p className="lead">
            Each edge-case theme flips into a happy path: the behaviors hikers
            need so power loss, lying trail lines, and broken plans stay
            recoverable. Ideation pencils those must-works as hand sketches;
            Solution ships them as Google Maps Hiking Mode features.
          </p>
        </Reveal>

        <div className="happy-themes">
          {happyPaths.map((path, i) => (
            <Reveal
              key={path.id}
              className="happy-theme"
              delay={i * 60}
              as="article"
            >
              <div className="happy-theme__media">
                <img
                  src={path.image}
                  alt=""
                  width={960}
                  height={540}
                  loading="lazy"
                />
              </div>
              <div className="happy-theme__body">
                <div className="happy-path__head">
                  <span className="happy-path__id">{path.id}</span>
                  <span className="happy-path__theme">
                    Addresses {path.theme}
                  </span>
                </div>
                <h3>{path.title}</h3>
                <p className="happy-path__need">
                  <span>Need</span> {path.need}
                </p>
                <p className="happy-path__outcome">{path.outcome}</p>
                <p className="happy-path__behaviors-label">
                  Must-work behaviors
                </p>
                <ul
                  className="happy-path__features"
                  aria-label="Must-work behaviors"
                >
                  {path.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="happy-path__meta">
                  {path.addresses.join(" · ")}
                  <span aria-hidden="true"> → </span>
                  From Ideation sketches
                </p>
                <div className="happy-theme__phone">
                  <PhoneFrame src={path.mockup} alt={path.mockupAlt} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
