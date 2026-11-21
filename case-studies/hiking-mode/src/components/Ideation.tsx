import { assetUrl } from "../assetUrl";
import { wireframes } from "../content";
import { Reveal } from "./Reveal";

export function Ideation() {
  return (
    <section className="section" id="ideation">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">Ideation</p>
          <h2>Low-fi as the build brief</h2>
          <p className="lead">
            Hand sketches on paper, not polished screens. Keep Google Maps
            chrome in mind, then pencil the Hiking must-works for H1–H3 before
            any hi-fi. These doodles are the brief the solution and prototype
            build from.
          </p>
        </Reveal>

        <div className="ideation-grid">
          {wireframes.map((frame, i) => {
            const id = frame.file.replace(/\.svg$/, "");
            return (
              <Reveal
                key={frame.file}
                className="ideation-frame"
                delay={(i % 4) * 50}
                as="article"
                id={`wf-${id}`}
              >
                <figure className="sketch-pad">
                  <img
                    src={assetUrl(`wireframes/${frame.file}`)}
                    alt={`Hand sketch wireframe: ${frame.title}`}
                    width={400}
                    height={520}
                    loading="lazy"
                  />
                </figure>
                <div className="ideation-frame__copy">
                  <p className="ideation-frame__id">
                    WF{String(i + 1).padStart(2, "0")} · sketch
                  </p>
                  <h3>{frame.title}</h3>
                  <p className="ideation-frame__job">{frame.job}</p>
                  <p className="ideation-frame__finding">{frame.finding}</p>
                  {frame.happyPaths.length > 0 ? (
                    <div
                      className="ideation-frame__paths"
                      aria-label="Happy paths"
                    >
                      {frame.happyPaths.map((path) => (
                        <span key={path} className="ideation-chip">
                          {path}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="ideation-bridge" delay={120}>
          <p>
            Sketches lock the must-works. Solution productizes them as Google
            Maps Hiking Mode features.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
