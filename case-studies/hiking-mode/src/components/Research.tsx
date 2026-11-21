import {
  affinityClusters,
  edgeCases,
  empathyMap,
  findings,
  interviewGuide,
  journeyEmotions,
  journeyMap,
  personas,
  researchMeta,
  sufferingThemes,
  surveyResearch,
} from "../content";
import { Reveal } from "./Reveal";
import {
  EdgeVignette,
  EmpathyIcon,
  JourneyEmotionCurve,
} from "./ResearchVisuals";

function emotionTone(emotion: string) {
  const e = emotion.toLowerCase();
  if (e.includes("frustrat") || e.includes("anxious")) return "low";
  if (e.includes("hope") || e.includes("reliev")) return "high";
  return "mid";
}

function isDipStage(short: string) {
  return short === "On trail" || short === "Camp" || short === "Remote";
}

export function Research() {
  const { maya, jordan } = personas;
  const questionCount =
    interviewGuide.warmups.length +
    interviewGuide.topics.reduce((n, t) => n + t.questions.length, 0);

  return (
    <section className="section section--forest" id="research">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow eyebrow--light">Research</p>
          <h2>Empathize · mixed methods on rugged abandonment</h2>
          <p className="lead lead--light">{researchMeta.goal}</p>
        </Reveal>

        <details className="research-background">
          <summary>
            <span className="research-background__label">
              Research background
            </span>
            <span className="research-background__hint">
              Instruments, affinity clusters, and findings
            </span>
          </summary>

          <Reveal className="research-block">
            <p className="research-kicker">Instrument 01 · Interview guide</p>
            <h3>{questionCount} questions · warm-ups, topics, and probes</h3>
            <p className="research-copy">
              {interviewGuide.format}. Focus: {interviewGuide.focus}.
            </p>
          </Reveal>

          <div className="interview-warmups">
            <Reveal>
              <h4 className="research-subhead">Warm-up</h4>
            </Reveal>
            {interviewGuide.warmups.map((q, i) => (
              <Reveal
                key={q.id}
                className="probe-card"
                delay={i * 40}
                as="article"
              >
                <span className="probe-card__id">{q.id}</span>
                <h5>{q.question}</h5>
                <ul>
                  {q.probes.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="interview-topics">
            {interviewGuide.topics.map((topic, ti) => (
              <Reveal key={topic.topic} className="topic-block" delay={ti * 50}>
                <div className="topic-block__head">
                  <h4>{topic.topic}</h4>
                  <span className="topic-block__rq">{topic.rq}</span>
                </div>
                <div className="topic-block__qs">
                  {topic.questions.map((q) => (
                    <article
                      key={q.id}
                      className="probe-card probe-card--nested"
                    >
                      <span className="probe-card__id">{q.id}</span>
                      <h5>{q.question}</h5>
                      <p className="probe-card__label">Follow-up probes</p>
                      <ul>
                        {q.probes.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="research-close">
            <p className="probe-card__label">Close</p>
            <p className="research-copy">{interviewGuide.close}</p>
          </Reveal>

          <Reveal className="research-block research-block--gap">
            <p className="research-kicker">
              Instrument 02 · Survey & social listening
            </p>
            <h3>Same goals, sized at scale</h3>
            <p className="research-copy">{surveyResearch.purpose}</p>
          </Reveal>

          <Reveal>
            <h4 className="research-subhead">Screening</h4>
            <ul className="research-list">
              {surveyResearch.screening.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>

          <div className="survey-grid">
            {surveyResearch.questions.map((q, i) => (
              <Reveal
                key={q.id}
                className="survey-card"
                delay={i * 35}
                as="article"
              >
                <div className="survey-card__meta">
                  <span className="probe-card__id">{q.id}</span>
                  <span className="survey-card__theme">{q.theme}</span>
                </div>
                <h5>{q.prompt}</h5>
                <p>
                  <span className="survey-card__metric">Metric</span> {q.metric}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="social-panel" as="article">
            <h4>{surveyResearch.socialListening.title}</h4>
            <p className="research-copy">
              {surveyResearch.socialListening.synthesizedYield}
            </p>
            <div className="social-panel__cols">
              <div>
                <p className="probe-card__label">Sources</p>
                <ul className="research-list">
                  {surveyResearch.socialListening.sources.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="probe-card__label">Coding focus</p>
                <ul className="research-list">
                  {surveyResearch.socialListening.codingFocus.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="research-block research-block--gap">
            <p className="research-kicker">Synthesis · UCD clustering</p>
            <h3>Affinity clusters from interview, survey, and social</h3>
            <p className="research-copy">
              Open responses, interview notes, and coded social units were
              affinity-mapped into six research judgments that feed personas,
              empathy, and journey artifacts.
            </p>
          </Reveal>

          <div className="cluster-grid">
            {affinityClusters.map((c, i) => (
              <Reveal
                key={c.id}
                className="cluster-card"
                delay={i * 40}
                as="article"
              >
                <span className="probe-card__id">{c.id}</span>
                <p className="cluster-card__method">{c.method}</p>
                <h4>{c.title}</h4>
                <p>{c.insight}</p>
                <p className="cluster-card__evidence">{c.evidence}</p>
                <p className="cluster-card__impl">
                  <strong>Design:</strong> {c.designImplication}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="research-block research-block--gap">
            <p className="research-kicker">Findings F1–F6</p>
            <h3>Synthesized mixed methods</h3>
          </Reveal>

          <div className="findings">
            {findings.map((f, i) => (
              <Reveal
                key={f.id}
                className="finding"
                delay={i * 50}
                as="article"
              >
                <span className="finding__id">{f.id}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                {"quote" in f && f.quote ? (
                  <blockquote>
                    <p>“{f.quote}”</p>
                    <cite>Hypothesis · hypothetical interview</cite>
                  </blockquote>
                ) : null}
              </Reveal>
            ))}
          </div>
        </details>

        {/* Personas */}
        <Reveal className="research-block research-block--gap">
          <p className="research-kicker">Personas</p>
          <h3>Primary backpacker, open secondary path</h3>
        </Reveal>

        <div className="persona-research">
          {[maya, jordan].map((p, i) => (
            <Reveal
              key={p.name}
              className="persona-full"
              delay={i * 70}
              as="article"
            >
              <div className="persona-full__media">
                <img
                  src={p.image}
                  alt=""
                  width={480}
                  height={640}
                  loading="lazy"
                />
              </div>
              <div className="persona-full__body">
                <p className="persona__role">{p.role}</p>
                <h4>
                  {p.name}
                </h4>
                <p className="research-copy">{p.context}</p>
                <p>
                  <strong>Goal:</strong> {p.goal}
                </p>
                <p>
                  <strong>JTBD:</strong> {p.jtbd}
                </p>
                <blockquote>
                  <p>“{p.quote}”</p>
                  <cite>Hypothesis · provisional</cite>
                </blockquote>
                <div className="persona-full__grid">
                  <div>
                    <p className="probe-card__label">Behaviors</p>
                    <ul className="research-list">
                      {p.behaviors.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="probe-card__label">Pains</p>
                    <ul className="research-list">
                      {p.pains.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className="persona-needs">
                  {p.needs.map((need) => (
                    <li key={need}>{need}</li>
                  ))}
                </ul>
                <p className="persona-full__impl">{p.implication}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Empathy map */}
        <Reveal className="research-block research-block--gap">
          <p className="research-kicker">Empathy map</p>
          <h3>{empathyMap.persona}</h3>
          <p className="research-copy">{empathyMap.framing}</p>
          <p className="empathy-status">{empathyMap.status}</p>
        </Reveal>

        <Reveal className="empathy-canvas" as="article">
          <div className="empathy-canvas__quad">
            <div className="empathy-cell empathy-cell--says">
              <h4>
                <EmpathyIcon name="says" />
                Says
              </h4>
              <ul className="empathy-quotes">
                {empathyMap.says.map((item) => (
                  <li key={item}>“{item}”</li>
                ))}
              </ul>
            </div>
            <div className="empathy-cell empathy-cell--thinks">
              <h4>
                <EmpathyIcon name="thinks" />
                Thinks
              </h4>
              <ul className="empathy-bullets">
                {empathyMap.thinks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="empathy-canvas__center" aria-hidden="true">
              <img
                src={maya.image}
                alt=""
                width={96}
                height={96}
                loading="lazy"
              />
              <span>Maya</span>
            </div>
            <div className="empathy-cell empathy-cell--does">
              <h4>
                <EmpathyIcon name="does" />
                Does
              </h4>
              <ul className="empathy-bullets">
                {empathyMap.does.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="empathy-cell empathy-cell--feels">
              <h4>
                <EmpathyIcon name="feels" />
                Feels
              </h4>
              <ul className="empathy-bullets">
                {empathyMap.feels.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="empathy-canvas__base">
            <div className="empathy-cell empathy-cell--pains">
              <h4>
                <EmpathyIcon name="pains" />
                Pains
              </h4>
              <ul className="empathy-bullets">
                {empathyMap.pains.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="empathy-cell empathy-cell--gains">
              <h4>
                <EmpathyIcon name="gains" />
                Gains
              </h4>
              <ul className="empathy-bullets">
                {empathyMap.gains.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Journey map */}
        <Reveal className="research-block research-block--gap">
          <p className="research-kicker">User journey map</p>
          <h3>Maya · four-day mountain section</h3>
          <p className="research-copy">{journeyMap.scenario}</p>
        </Reveal>

        <Reveal className="journey-board" as="article">
          <div className="journey-board__curve">
            <div className="journey-board__curve-axis" aria-hidden="true">
              <span>High</span>
              <span>Emotion</span>
              <span>Low</span>
            </div>
            <JourneyEmotionCurve
              scores={journeyEmotions.map((e) => e.score)}
              labels={journeyMap.stages.map((s) => s.short)}
            />
          </div>

          <div
            className="journey-stages"
            role="list"
            aria-label="Maya’s six-stage journey with emotion, actions, pains, and opportunities"
          >
            {journeyMap.stages.map((s, i) => {
              const tone = emotionTone(s.emotion);
              return (
                <div
                  key={s.stage}
                  className={`journey-stage${isDipStage(s.short) ? " journey-stage--dip" : ""}`}
                  role="listitem"
                >
                  <div className="journey-stage__head">
                    <span className="journey-stage__n">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="journey-stage__title">{s.short}</h4>
                    <span
                      className={`journey-stage__emotion journey-stage__emotion--${tone}`}
                    >
                      {s.emotion}
                    </span>
                  </div>
                  <dl className="journey-stage__body">
                    <div className="journey-stage__row journey-stage__row--does">
                      <dt>Does</dt>
                      <dd>
                        <span>{s.actions}</span>
                        <span className="journey-stage__thought">
                          {s.thoughts}
                        </span>
                      </dd>
                    </div>
                    <div className="journey-stage__row journey-stage__row--pain">
                      <dt>Pain</dt>
                      <dd>{s.pain}</dd>
                    </div>
                    <div className="journey-stage__row journey-stage__row--opp">
                      <dt>Opportunity</dt>
                      <dd>{s.opportunity}</dd>
                    </div>
                  </dl>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Edge cases · clustered by suffering themes T1–T3 */}
        <Reveal className="research-block research-block--gap">
          <p className="research-kicker">Edge cases</p>
          <h3>Rugged terrain extremes the journey must survive</h3>
          <p className="research-copy">
            Seven extremes cluster into three suffering themes. Jump by icon,
            then open each theme through its image and nested cases.
          </p>
        </Reveal>

        <nav className="edge-jump" aria-label="Edge-case suffering themes">
          {sufferingThemes.map((theme) => (
            <a
              key={theme.id}
              className="edge-jump__item"
              href={`#edge-${theme.id.toLowerCase()}`}
            >
              <EdgeVignette name={theme.vignette} />
              <span className="edge-jump__id">{theme.id}</span>
              <span className="edge-jump__title">{theme.title}</span>
            </a>
          ))}
        </nav>

        <div className="edge-themes">
          {sufferingThemes.map((theme, i) => {
            const cases = edgeCases.filter((e) =>
              theme.edgeIds.includes(e.id),
            );
            return (
              <Reveal
                key={theme.id}
                className="edge-theme"
                delay={i * 50}
                as="article"
                id={`edge-${theme.id.toLowerCase()}`}
              >
                <div className="edge-theme__media">
                  <img
                    src={theme.image}
                    alt=""
                    width={960}
                    height={540}
                    loading="lazy"
                  />
                </div>
                <div className="edge-theme__body">
                  <div className="edge-theme__head">
                    <span className="edge-theme__id">{theme.id}</span>
                    <span className="edge-theme__cases">
                      {theme.edgeIds.join(" · ")}
                    </span>
                  </div>
                  <h4>{theme.title}</h4>
                  <p className="edge-theme__suffering">{theme.suffering}</p>
                  <div className="edge-grid edge-grid--nested">
                    {cases.map((e) => (
                      <article key={e.id} className="edge-card">
                        <EdgeVignette name={e.vignette} />
                        <span className="probe-card__id">{e.id}</span>
                        <h5>{e.title}</h5>
                        <p>{e.detail}</p>
                      </article>
                    ))}
                  </div>
                  <a className="edge-theme__link" href="#happy-path">
                    Inverts to {theme.happyPathId}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
