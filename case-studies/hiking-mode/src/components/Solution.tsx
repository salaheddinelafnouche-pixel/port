import { solutionFeatures } from "../content";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";

export function Solution() {
  return (
    <section className="section section--forest" id="solution">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow eyebrow--light">Solution</p>
          <h2>Google Maps, with Hiking Mode on</h2>
          <p className="lead lead--light">
            Same app, same directions chrome, search, sheets, and offline maps.
            Hiking Mode adds trail-first map, multi-day corridor, day plan,
            elevation, corridor pack, and calm safety without leaving Google
            Maps.
          </p>
          <p className="solution-bridge">
            H1 → Corridor · Day plan · Offline · H2 → Trail map · Elevation · H3
            → Day plan · Safety
          </p>
        </Reveal>

        <div className="solution-features">
          {solutionFeatures.map((feature, i) => (
            <Reveal
              key={feature.id}
              className="solution-feature"
              delay={(i % 4) * 60}
              as="article"
            >
              <PhoneFrame src={feature.mockup} alt={feature.mockupAlt} />
              <div className="solution-feature__copy">
                <p className="solution-feature__label">{feature.mapsLabel}</p>
                <h3>{feature.title}</h3>
                <p className="solution-feature__job">{feature.job}</p>
                <ul className="solution-feature__list">
                  {feature.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {feature.happyPaths.length > 0 ? (
                  <div
                    className="solution-feature__paths"
                    aria-label="Happy paths"
                  >
                    {feature.happyPaths.map((id) => (
                      <span key={id} className="solution-chip">
                        {id}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
