import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export const ResumePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ padding: '20px 0' }}>
      {/* Top screen bar */}
      <nav className="back-bar" aria-label="Page actions">
        <Link to="/">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Portfolio
        </Link>
        <div className="back-bar-actions">
          <button
            className="theme-toggle"
            onClick={(e) => toggleTheme(e)}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode (T)' : 'Switch to dark mode (T)'}
          >
            <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <button className="back-bar-btn back-bar-btn--primary" onClick={handlePrint}>
            Print / Save PDF
          </button>
        </div>
      </nav>

      <div className="sheet">
        <header className="resume-header">
          <h1 className="resume-name" style={{ marginBottom: '4px' }}>Salaheddine Lafnouche</h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Product Designer
          </p>
          <div className="resume-contact">
            <a href="https://salaheddinelafnouche.com/" target="_blank" rel="noopener noreferrer">
              salaheddinelafnouche.com
            </a>
            <span className="sep">&bull;</span>
            <a href="mailto:salaheddinelafnouche@gmail.com">salaheddinelafnouche@gmail.com</a>
            <span className="sep">&bull;</span>
            <a href="tel:+212629335434">+212 629335434</a>
            <span className="sep">&bull;</span>
            <span>Khemisset, Morocco</span>
          </div>
        </header>

        {/* Summary */}
        <section style={{ marginBottom: '14px' }}>
          <p style={{ fontSize: '12.5px', lineHeight: 1.5, fontStyle: 'italic', color: 'var(--ink-soft)' }}>
            <strong>Google-certified Product Designer</strong> &amp; former military educator with a <strong>coding background</strong>. Skilled in turning complex briefs into intuitive, <strong>WCAG 2.1 AA-compliant</strong> digital products driven by <strong>user research</strong> and <strong>rapid prototyping</strong>.
          </p>
        </section>

        <hr className="section-divider" />

        {/* Experience */}
        <section style={{ marginBottom: '14px' }}>
          <h2 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '10px' }}>
            Experience
          </h2>

          <div className="entry">
            <div className="entry-date">Concept sprint · 2026</div>
            <div className="entry-content">
              <div className="entry-title-line">
                <span className="entry-role">Lead UX Designer</span>
                <span className="entry-pipe">|</span>
                <span className="entry-org">Google Maps Hiking Mode</span>
              </div>
              <p className="entry-desc">Concept case study · native Maps travel mode for multi-day trail continuity</p>
              <ul className="entry-bullets">
                <li>Designed a backpacker-led <strong>Hiking travel mode</strong> (trail-first map, multi-day corridor, day plan, offline pack, bailouts) after research showed <strong>79% of backpackers dual-app Maps</strong> with a specialty trail app on the same trip.</li>
                <li>Ran <strong>mixed-methods synthesized research</strong> (survey n≈124, interviews n=8, social listening) ranking on-trail stress: wrong junction <strong>61%</strong>, offline gap <strong>54%</strong>, dry water <strong>49%</strong>.</li>
                <li>Shipped happy paths <strong>H1–H3</strong> (corridor ready, trust the fork, recover) as a clickable <strong>React Hi-Fi prototype</strong> with a lighter <strong>Day/Weekend preset</strong>.</li>
              </ul>
            </div>
          </div>

          <div className="entry">
            <div className="entry-date">02/2026 – Present</div>
            <div className="entry-content">
              <div className="entry-title-line">
                <span className="entry-role">Lead Product Designer (SaaS)</span>
                <span className="entry-pipe">|</span>
                <span className="entry-org">YouScent Digital Perfume Atelier</span>
              </div>
              <p className="entry-desc">Two-sided atelier for memory-led formulas and perfumer briefs</p>
              <ul className="entry-bullets">
                <li>Designed a <strong>two-sided atelier</strong> where a memory and up to three archetype colors become an exact formula sealed with a <strong>verification hash</strong>.</li>
                <li>Shaped the perfumer side so a brief can be claimed and blended by hand. Usability sessions on the compose flow reached a <strong>94% task completion rate</strong>.</li>
                <li>Published plans from Freemium through Perfumery House, with <strong>custom IFRA export</strong> on the House plan. New accounts start with five complimentary credits.</li>
              </ul>
            </div>
          </div>

          <div className="entry">
            <div className="entry-date">11/2025 – 01/2026</div>
            <div className="entry-content">
              <div className="entry-title-line">
                <span className="entry-role">Product Designer</span>
                <span className="entry-pipe">|</span>
                <span className="entry-org">YouScent</span>
              </div>
              <p className="entry-desc">AI Fragrance Discovery Platform (Consumer App)</p>
              <ul className="entry-bullets">
                <li>Engineered an <strong>emotion-driven input model</strong> replacing complex chemical jargon with memory-based prompts, <strong>boosting first-time AI generation conversion to 73%</strong>.</li>
                <li>Conducted <strong>6 group interviews</strong> and <strong>4 competitor audits</strong> to map cognitive friction points in fragrance discovery.</li>
                <li>Validated end-to-end <strong>Figma prototypes</strong> across iterative testing sessions, achieving an <strong>81.4 System Usability Scale (SUS) score</strong>.</li>
              </ul>
            </div>
          </div>

          <div className="entry">
            <div className="entry-date">06/2025 – 10/2025</div>
            <div className="entry-content">
              <div className="entry-title-line">
                <span className="entry-role">Founder &amp; Lead UX Designer</span>
                <span className="entry-pipe">|</span>
                <span className="entry-org">Tech4U</span>
              </div>
              <p className="entry-desc">Adaptive EdTech Platform</p>
              <ul className="entry-bullets">
                <li>Researched shift-worker learning habits to solve an <strong>89% dropout rate</strong> in rigid ed-tech environments.</li>
                <li>Prototyped a <strong>"Soft Program" feature</strong> enabling users to dynamically scale UI density and lesson pacing according to daily cognitive bandwidth.</li>
                <li>Built a <strong>WCAG 2.1 AA-compliant design system</strong>, driving a <strong>40% increase in projected learner retention</strong>.</li>
              </ul>
            </div>
          </div>

          <div className="entry">
            <div className="entry-date">2021 – 2024</div>
            <div className="entry-content">
              <div className="entry-title-line">
                <span className="entry-role">Programming Instructor</span>
                <span className="entry-pipe">|</span>
                <span className="entry-org">C.I.T &bull; Kenitra</span>
              </div>
              <p className="entry-desc">Technical Education &amp; Systems Training</p>
              <ul className="entry-bullets">
                <li>Taught <strong>programming logic</strong>, <strong>hardware concepts</strong>, and <strong>system workflows</strong> to diverse military cohorts under high-discipline standards.</li>
                <li>Developed structured curriculum materials that <strong>translated complex code concepts into accessible learning paths</strong>.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Education & Certification */}
        <section style={{ marginBottom: '14px' }}>
          <h2 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '10px' }}>
            Education &amp; Certification
          </h2>

          <div className="edu-entry">
            <div className="edu-date">2026</div>
            <div>
              <div className="edu-title-line">
                <a
                  href="https://coursera.org/share/c78fd5d739d3dd819d5b34649ce879e2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-degree"
                  style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                >
                  Introduction to Artificial Intelligence (AI)
                </a>
                <span className="entry-pipe">|</span>
                <span className="edu-school">IBM &bull; Coursera</span>
              </div>
              <div className="edu-desc">
                Foundational AI concepts, neural networks, deep learning, machine learning algorithms, and real-world AI applications.
              </div>
            </div>
          </div>

          <div className="edu-entry">
            <div className="edu-date">2026</div>
            <div>
              <div className="edu-title-line">
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/AT79DM7RUO7V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-degree"
                  style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                >
                  Human-Computer Interaction Certificate
                </a>
                <span className="entry-pipe">|</span>
                <span className="edu-school">BITS Pilani &bull; Coursera</span>
              </div>
              <div className="edu-desc">
                Advanced <strong>interaction paradigms</strong>, <strong>user-centered design principles</strong>, and <strong>cognitive psychology</strong> applied to digital interfaces.
              </div>
            </div>
          </div>

          <div className="edu-entry">
            <div className="edu-date">2025</div>
            <div>
              <div className="edu-title-line">
                <a
                  href="https://www.credly.com/badges/aee2e68f-151f-4859-891a-6eafb2865cf8/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-degree"
                  style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                >
                  Google UX Design Professional Certificate
                </a>
                <span className="entry-pipe">|</span>
                <span className="edu-school">Google &bull; Coursera</span>
              </div>
              <div className="edu-desc">
                End-to-end UX process: <strong>user research</strong>, <strong>wireframing</strong>, <strong>prototyping</strong>, <strong>usability testing</strong>, and <strong>accessibility</strong>.
              </div>
            </div>
          </div>

          <div className="edu-entry">
            <div className="edu-date">2018 – 2021</div>
            <div>
              <div className="edu-title-line">
                <span className="edu-degree">Diplôme en Informatique</span>
                <span className="entry-pipe">|</span>
                <span className="edu-school">C.I.T &bull; Kenitra</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Skills */}
        <section>
          <h2 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '10px' }}>
            Skills &amp; Methods
          </h2>

          <div className="skills-grid">
            <div className="skills-cat">Design:</div>
            <div className="skills-list">User Research, Wireframing, Prototyping, Usability Testing, Information Architecture, Design Systems, WCAG 2.1 AA Accessibility.</div>

            <div className="skills-cat">Tools:</div>
            <div className="skills-list">Figma, React, TypeScript, HTML5, CSS3, JavaScript, Git, VS Code.</div>

            <div className="skills-cat">Languages:</div>
            <div className="skills-list">Arabic (Native), English (Professional), French (Professional).</div>
          </div>
        </section>
      </div>
    </div>
  );
};
