import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { Reveal, RevealStagger } from '../components/Reveal';

export const AboutPage: React.FC = () => {
  // Typewriter effect state
  const [roleText, setRoleText] = useState('');

  useEffect(() => {
    const roles = [
      '0-to-1 Product Designer.',
      'Systems Thinker.',
      'Empathy-First Researcher.',
      'Accessibility Advocate.',
      'Military-Trained Discipline.'
    ];
    let currentRole = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeoutId: number;

    const type = () => {
      const currentString = roles[currentRole];
      if (isDeleting) {
        setRoleText(currentString.substring(0, currentChar - 1));
        currentChar--;
      } else {
        setRoleText(currentString.substring(0, currentChar + 1));
        currentChar++;
      }

      let typingDelay = isDeleting ? 45 : 90;

      if (!isDeleting && currentChar === currentString.length) {
        typingDelay = 2200;
        isDeleting = true;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length;
        typingDelay = 400;
      }

      timeoutId = window.setTimeout(type, typingDelay);
    };

    timeoutId = window.setTimeout(type, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Framework State: Interactive Product Execution Engine
  const [activeEnginePhase, setActiveEnginePhase] = useState(0);

  const enginePhases = [
    {
      id: '01',
      badge: 'Phase 01 · Product Strategy',
      shortTitle: '01 · Strategy',
      title: 'Business-to-User Translation',
      subtitle: 'Mapping executive KPIs to human friction before drafting a single UI wireframe.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
      overview: 'Every successful product begins with radical clarity. I align cross-functional stakeholder expectations, conduct deep qualitative interviews, and define North Star KPIs to ensure design decisions directly move business metrics.',
      steps: [
        'Stakeholder alignment & North Star KPI definition',
        'Qualitative 1-on-1 user interviews & empathy mapping',
        'Competitive audits & market positioning matrix',
        'Problem framing & zero-waste feature scoping'
      ],
      deliverables: ['Product Roadmap', 'Empathy Maps', 'North Star KPIs', 'Friction Audit Report'],
      tools: ['Miro', 'Figma', 'Notion', 'User Interviews'],
      metric: '18 qualitative user interviews conducted for YouScent & Tech4U'
    },
    {
      id: '02',
      badge: 'Phase 02 · Experience Architecture',
      shortTitle: '02 · Architecture',
      title: 'Systems & Interaction Design',
      subtitle: 'Structuring intuitive information architecture and accessible design token systems.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      overview: 'Transforming requirements into structured user journeys, WCAG 2.1 AA token variable systems in Figma, and interactive rapid prototypes designed for friction-free navigation.',
      steps: [
        'Information Architecture (IA) & task flow mapping',
        'WCAG 2.1 AA token variable systems in Figma',
        'Low-fidelity to interactive hi-fi prototyping loops',
        'Design system governance & token documentation'
      ],
      deliverables: ['Design Tokens', 'Interactive Hi-Fi Prototypes', 'IA & Flow Diagrams', 'UI Token Spec Sheet'],
      tools: ['Figma Variables', 'ProtoPie', 'Design Tokens', 'Bento Grid System'],
      metric: '81.4 System Usability Scale (SUS) benchmark achieved'
    },
    {
      id: '03',
      badge: 'Phase 03 · Empirical Validation',
      shortTitle: '03 · Validation',
      title: 'User Testing & Accessibility Auditing',
      subtitle: 'Validating prototypes with real users to refine task success and contrast compliance.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      overview: 'Assumptions are tested early and often. I run structured usability sessions with real users, record task success rates, and conduct screen reader audits to guarantee 100% WCAG compliance.',
      steps: [
        'Unmoderated & moderated usability testing loops',
        'Friction heatmaps & task-completion diagnostics',
        'Screen reader ARIA specs & 4.5:1 contrast auditing',
        'Iterative design refinement based on empirical proof'
      ],
      deliverables: ['Usability Audit Reports', 'A11y Package (WCAG 2.1 AA)', 'Friction Heatmaps', 'SUS Scorecards'],
      tools: ['NVDA / VoiceOver', 'UsabilityTesting', 'Stark A11y', 'Figma Prototyping'],
      metric: '100% WCAG 2.1 AA accessibility compliance package delivered'
    },
    {
      id: '04',
      badge: 'Phase 04 · Engineering Hand-Off',
      shortTitle: '04 · Hand-Off',
      title: 'Zero-Loss Code Sync & Delivery',
      subtitle: 'Bridging Figma token specs with production React & CSS code for flawless execution.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      overview: 'As a designer with a military instruction background in programming logic, I communicate seamlessly with developers. I provide Figma Code Connect specs, token variables, and responsive layout guidelines.',
      steps: [
        'Figma Code Connect component documentation',
        'Design token variable export (CSS variables / JSON)',
        'Edge-case & state mapping (empty, error, loading)',
        'Engineering sync & post-launch QA auditing'
      ],
      deliverables: ['Code Connect Specs', 'Design Token Variables', 'State Matrix', 'Developer Hand-off Guide'],
      tools: ['Figma Code Connect', 'React / TypeScript', 'CSS Custom Props', 'Git'],
      metric: '73% First-Time Generation Conversion on YouScent AI'
    }
  ];

  return (
    <main id="main" className="about-redesign-page">
      {/* 1. About Hero Section */}
      <section className="about-hero section" aria-labelledby="page-heading">
        <div className="container">
          <Reveal className="about-hero-glass-card">
            <div className="about-hero-avatar-wrapper">
              <div className="photo-orbit-ring" aria-hidden="true"></div>
              <div className="photo-orbit-ring photo-orbit-ring--delayed" aria-hidden="true"></div>
              <img
                src="/profile.jpg"
                alt="Salaheddine Lafnouche"
                className="about-hero-img"
                loading="eager"
                width="280"
                height="280"
              />
            </div>

            <p className="section-label about-hero-label">Executive Bio &amp; Systems Philosophy</p>
            <h1 id="page-heading" className="about-hero-name">Salaheddine Lafnouche</h1>

            <div className="role-ribbon" aria-label="My roles">
              <span className="role-ribbon-bracket" aria-hidden="true">{'{'}</span>
              <span className="role-ribbon-text" id="role-text">{roleText || 'Systems thinker. Empathy-first. Military-trained.'}</span>
              <span className="role-ribbon-cursor" aria-hidden="true"></span>
              <span className="role-ribbon-bracket" aria-hidden="true">{'}'}</span>
            </div>

            <p className="about-hero-bio-lead" style={{ maxWidth: '720px', margin: '1rem auto 1.5rem auto', fontSize: '1.05rem', lineHeight: '1.65', opacity: 0.9 }}>
              Google-certified Product Designer applying military precision to build accessible, and high-converting products.
            </p>

            <ul className="about-hero-facts" role="list">
              <li className="hero-fact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Khemisset, Morocco
              </li>
              <li className="hero-fact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Google UX Certified
              </li>
              <li className="hero-fact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Arabic &middot; English &middot; French
              </li>
              <li className="hero-fact">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                3 Yrs Military Instructor
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 2. Personal Narrative & Principles Section — Concise & Scannable */}
      <section className="narrative-section section" id="narrative" aria-labelledby="narrative-heading">
        <div className="section-watermark" aria-hidden="true">§ 01</div>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <p className="section-label">Who I Am</p>
            <h2 id="narrative-heading" className="section-title">Overview</h2>
            <p className="section-desc" style={{ maxWidth: '680px' }}>
              I combine structured systems thinking with deep human empathy to craft products that feel effortless and perform at scale.
            </p>
          </div>

          {/* Quick Stats Bar */}
          <Reveal className="who-iam-quick-bar glass-panel-sm">
            <div className="quick-stat-item">
              <span className="quick-stat-num">89%</span>
              <span className="quick-stat-label">EdTech Dropout Solved</span>
            </div>
            <div className="quick-stat-divider" aria-hidden="true"></div>
            <div className="quick-stat-item">
              <span className="quick-stat-num">3 Yrs</span>
              <span className="quick-stat-label">Military Instructor</span>
            </div>
            <div className="quick-stat-divider" aria-hidden="true"></div>
            <div className="quick-stat-item">
              <span className="quick-stat-num">73%</span>
              <span className="quick-stat-label">AI User Conversion</span>
            </div>
            <div className="quick-stat-divider" aria-hidden="true"></div>
            <div className="quick-stat-item">
              <span className="quick-stat-num">79%</span>
              <span className="quick-stat-label">Maps Dirt-Trust Gap</span>
            </div>
            <div className="quick-stat-divider" aria-hidden="true"></div>
            <div className="quick-stat-item">
              <span className="quick-stat-num">WCAG 2.1</span>
              <span className="quick-stat-label">AA Standard</span>
            </div>
          </Reveal>

          {/* 3 Concise Cards */}
          <RevealStagger className="who-iam-brief-grid" style={{ marginTop: '1.5rem' }}>
            <div className="who-iam-brief-card glass-panel-sm" data-reveal>
              <div className="brief-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Military Discipline</h3>
              <p>Taught programming logic for 3 years in a military institution—fostering clarity, high standards, and structured communication under pressure.</p>
            </div>

            <div className="who-iam-brief-card glass-panel-sm" data-reveal>
              <div className="brief-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.95 1.5 4 .77.77 1.24 1.53 1.41 2.5" />
                </svg>
              </div>
              <h3>User-Centred UX</h3>
              <p>Solved shift-worker learning barriers at Tech4U, creating an adaptive path ("Soft Program") that boosted retention by 40%.</p>
            </div>

            <div className="who-iam-brief-card glass-panel-sm" data-reveal>
              <div className="brief-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3>End-to-End Craft</h3>
              <p>From a synthesized research pack (Maps Hiking Mode) to Figma variable tokens, WCAG 2.1 AA audits, and live React prototypes.</p>
            </div>
          </RevealStagger>
          <Reveal className="who-iam-rules-bar glass-panel-sm" style={{ marginTop: '1.5rem' }}>
            <span className="rules-title">Core Principles:</span>
            <div className="rules-pills">
              <span className="rule-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                Clarity Over Cleverness
              </span>
              <span className="rule-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }} aria-hidden="true">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Stress-Test the Happy Path
              </span>
              <span className="rule-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }} aria-hidden="true">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                Evidence Over Opinion
              </span>
            </div>
          </Reveal>

          {/* Beyond the Screen Callout */}
          <Reveal className="beyond-screen-callout glass-panel-sm" style={{ marginTop: '1.5rem', background: 'color-mix(in srgb, var(--surface) 20%, transparent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', fontWeight: 'bold' }}>
                Beyond the Screen
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9 }}>
              I'm an avid reader who collects iconic book editions, drawn as much to their design and typography as to the ideas within, and a designer who continuously reverse-engineers everyday interfaces to make them remarkably more intuitive.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Problem-Solving Approach Section — Interactive 4-Phase Product Execution Engine */}
      <section className="approach-section section" id="approach" aria-labelledby="approach-heading">
        <div className="section-watermark" aria-hidden="true">§ 02</div>
        <div className="container">
          <Reveal className="section-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <p className="section-label">My Design Engine</p>
            <h2 id="approach-heading" className="section-title">The 0-to-1 Product Execution Engine</h2>
            <p className="section-desc">
              A structured 4-phase engineering methodology built to convert ambiguous brief requirements into intuitive, accessible, and high-impact digital products.
            </p>
          </Reveal>

          <Reveal
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(260px, 1fr) minmax(320px, 2fr)',
              gap: '1.75rem',
              alignItems: 'stretch'
            }}
            className="engine-bento-wrapper"
          >
            {/* Left Stepper List */}
            <div
              className="glass-panel"
              style={{
                borderRadius: '24px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                border: '1px solid color-mix(in srgb, var(--border) 50%, transparent)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  letterSpacing: '0.08em',
                  marginBottom: '4px'
                }}
              >
                Engine Workflow Steps
              </span>

              {enginePhases.map((phase, idx) => {
                const isActive = activeEnginePhase === idx;
                return (
                  <div
                    key={phase.id}
                    onClick={() => setActiveEnginePhase(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveEnginePhase(idx);
                      }
                    }}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: isActive
                        ? 'color-mix(in srgb, var(--accent) 15%, transparent)'
                        : 'color-mix(in srgb, var(--surface) 40%, transparent)',
                      border: isActive
                        ? '1px solid color-mix(in srgb, var(--accent) 60%, transparent)'
                        : '1px solid color-mix(in srgb, var(--border) 30%, transparent)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '10px',
                        background: isActive ? 'var(--accent)' : 'color-mix(in srgb, var(--border) 30%, transparent)',
                        color: isActive ? '#000000' : 'var(--text)',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {phase.id}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.92rem',
                          fontWeight: 700,
                          color: 'var(--text)',
                          lineHeight: '1.3'
                        }}
                      >
                        {phase.title}
                      </div>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          opacity: 0.75,
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {phase.badge.split('·')[0].trim()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Active Phase Console */}
            <div
              className="glass-panel"
              style={{
                borderRadius: '24px',
                padding: '2.25rem 2rem',
                border: '1.5px solid color-mix(in srgb, var(--accent) 45%, transparent)',
                boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.25), 0 0 30px color-mix(in srgb, var(--accent) 12%, transparent)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1.25rem',
                    paddingBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'color-mix(in srgb, var(--accent) 18%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--accent) 40%, transparent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {enginePhases[activeEnginePhase].icon}
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          color: 'var(--accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em'
                        }}
                      >
                        {enginePhases[activeEnginePhase].badge}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          margin: '2px 0 0 0',
                          color: 'var(--text)'
                        }}
                      >
                        {enginePhases[activeEnginePhase].title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.96rem', lineHeight: '1.65', opacity: 0.92, margin: '0 0 1.5rem 0' }}>
                  {enginePhases[activeEnginePhase].overview}
                </p>

                {/* Steps Checklist */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      letterSpacing: '0.08em',
                      marginBottom: '10px'
                    }}
                  >
                    Core Phase Workflow:
                  </h4>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '10px'
                    }}
                  >
                    {enginePhases[activeEnginePhase].steps.map((step, sIdx) => (
                      <li
                        key={sIdx}
                        style={{
                          fontSize: '0.88rem',
                          lineHeight: '1.45',
                          opacity: 0.95,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          background: 'color-mix(in srgb, var(--surface) 50%, transparent)',
                          padding: '8px 12px',
                          borderRadius: '10px',
                          border: '1px solid color-mix(in srgb, var(--border) 25%, transparent)'
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          style={{ marginTop: '3px', flexShrink: 0 }}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deliverables & Proof Metric Footer */}
              <div style={{ paddingTop: '1rem', borderTop: '1px dashed color-mix(in srgb, var(--border) 40%, transparent)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.7, marginRight: '8px' }}>Deliverables:</span>
                    {enginePhases[activeEnginePhase].deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="interest-tag" style={{ fontSize: '0.75rem', padding: '3px 10px', marginRight: '4px', marginBottom: '4px', display: 'inline-block' }}>
                        {del}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.85rem',
                    opacity: 0.95,
                    background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1px dashed color-mix(in srgb, var(--accent) 35%, transparent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>⚡</span>
                  <div>
                    <strong>Empirical Impact:</strong> {enginePhases[activeEnginePhase].metric}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 4. Peer Validation Testimonial Banner */}
      <section className="testimonial-section section">
        <div className="section-watermark" aria-hidden="true">§ 03</div>
        <div className="container">
          <Reveal as="blockquote" className="testimonial-glass-card">
            <div className="testimonial-quote-mark" aria-hidden="true">“</div>
            <p className="testimonial-quote">
              "It's really cool, especially with the sketchy style of the fonts and graphics. I also noticed the accessibility features, and they’re clearly well thought out—great job on that."
            </p>
            <footer className="testimonial-author">
              — Velika, UX Designer at Coursera Community —
            </footer>
          </Reveal>
        </div>
      </section>

      {/* 5. Resume & Background Highlights Section */}
      <section className="resume-section section" id="resume" aria-labelledby="resume-heading">
        <div className="section-watermark" aria-hidden="true">§ 04</div>
        <div className="container">
          <div className="resume-header">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <p className="section-label">Background</p>
              <h2 id="resume-heading" className="section-title">Career Highlights &amp; Ecosystem</h2>
            </div>
            <div>
              <Link to="/resume" className="btn-secondary" aria-label="View full resume online">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                View Interactive Resume &rarr;
              </Link>
            </div>
          </div>

          <RevealStagger className="about-bento-grid" style={{ marginTop: 'var(--space-xl)' }}>
            <div className="about-bento-card bento-col-span-1" data-reveal>
              <span className="career-date">Concept sprint · 2026</span>
              <h3 className="bento-card-title">Lead UX Designer @ Google Maps Hiking Mode</h3>
              <p className="bento-card-body">
                Designed a backpacker-led native Maps Hiking mode — multi-day corridor, day plan, offline pack, bailouts — from a synthesized research pack (survey n≈124, interviews n=8).
              </p>
              <div className="interest-tags" style={{ marginTop: 'auto' }}>
                <span className="interest-tag">Concept Case Study</span>
                <span className="interest-tag">Mixed Methods</span>
                <span className="interest-tag">React Prototype</span>
              </div>
            </div>

            <div className="about-bento-card bento-col-span-1" data-reveal>
              <span className="career-date">02/2026 – Present</span>
              <h3 className="bento-card-title">Lead SaaS Designer @ YouScent</h3>
              <p className="bento-card-body">
                Designed the digital perfume atelier: a memory and up to three archetype colors become an exact formula with a verification hash, and a perfumer can claim the brief.
              </p>
              <div className="interest-tags" style={{ marginTop: 'auto' }}>
                <span className="interest-tag">Verification Hash</span>
                <span className="interest-tag">94% Task Completion</span>
                <span className="interest-tag">Five Starter Credits</span>
              </div>
            </div>

            <div className="about-bento-card bento-col-span-1" data-reveal>
              <span className="career-date">06/2025 – 10/2025</span>
              <h3 className="bento-card-title">Founder &amp; Lead UX @ Tech4U</h3>
              <p className="bento-card-body">
                Owned research &amp; UI/UX for an equity-focused e-learning platform, prototyping an adaptive learning path ("Soft Program") that drove a <strong>40% retention increase</strong>.
              </p>
              <div className="interest-tags" style={{ marginTop: 'auto' }}>
                <span className="interest-tag">WCAG 2.1 AA</span>
                <span className="interest-tag">Design Systems</span>
                <span className="interest-tag">EdTech</span>
              </div>
            </div>

            <div className="about-bento-card bento-col-span-1" data-reveal>
              <span className="career-date">2021 – 2024</span>
              <h3 className="bento-card-title">Instructor @ C.I.T &bull; Kenitra</h3>
              <p className="bento-card-body">
                Spent 3 years teaching complex technical systems and fostering structured communication under high-discipline military standards.
              </p>
              <div className="interest-tags" style={{ marginTop: 'auto' }}>
                <span className="interest-tag">Pedagogy</span>
                <span className="interest-tag">Code Logic</span>
                <span className="interest-tag">Clarity</span>
              </div>
            </div>
          </RevealStagger>

          {/* Skills & Tools Ecosystem Matrix */}
          <Reveal className="skills-matrix-wrapper glass-panel-sm" style={{ marginTop: '1.5rem', padding: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--text)' }}>
              Tools &amp; Capabilities Ecosystem
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 'bold' }}>Design &amp; Systems</span>
                <ul className="resume-bullets" style={{ marginTop: '8px' }}>
                  <li>Figma Variables &amp; Tokens</li>
                  <li>Design System Governance</li>
                  <li>Interactive Prototyping</li>
                  <li>Component Libraries</li>
                </ul>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 'bold' }}>UX Research &amp; AI</span>
                <ul className="resume-bullets" style={{ marginTop: '8px' }}>
                  <li>1-on-1 User Interviews</li>
                  <li>Generative AI Prompt UX</li>
                  <li>Affinity &amp; Empathy Mapping</li>
                  <li>SUS Usability Surveys</li>
                </ul>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 'bold' }}>Accessibility &amp; Frontend</span>
                <ul className="resume-bullets" style={{ marginTop: '8px' }}>
                  <li>WCAG 2.1 AA Audits</li>
                  <li>Screen Reader Specs</li>
                  <li>React &amp; TypeScript</li>
                  <li>Vanilla CSS &amp; HTML5</li>
                </ul>
              </div>
            </div>

            {/* Verified Certifications Sub-block */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed color-mix(in srgb, var(--border) 40%, transparent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                  🏆 Verified Professional Certifications
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {/* IBM AI Cert */}
                <div
                  style={{
                    background: 'color-mix(in srgb, var(--surface) 60%, transparent)',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    border: '1px solid color-mix(in srgb, var(--accent) 35%, transparent)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', background: 'color-mix(in srgb, var(--accent) 20%, transparent)', color: 'var(--accent)', padding: '2px 8px', borderRadius: '6px', fontWeight: 'bold' }}>
                      IBM &bull; 2026
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 6px 0' }}>
                    <a
                      href="https://coursera.org/share/c78fd5d739d3dd819d5b34649ce879e2"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                    >
                      Introduction to Artificial Intelligence (AI)
                    </a>
                  </h4>
                  <p style={{ fontSize: '0.84rem', opacity: 0.85, lineHeight: '1.45', margin: 0 }}>
                    Foundational AI concepts, neural networks, machine learning algorithms, and generative AI product workflows.
                  </p>
                </div>

                {/* Google UX Cert */}
                <div
                  style={{
                    background: 'color-mix(in srgb, var(--surface) 40%, transparent)',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    border: '1px solid color-mix(in srgb, var(--border) 30%, transparent)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', background: 'color-mix(in srgb, var(--border) 40%, transparent)', color: 'var(--text)', padding: '2px 8px', borderRadius: '6px', fontWeight: 'bold' }}>
                      Google &bull; 2025
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 6px 0' }}>
                    <a
                      href="https://www.credly.com/badges/aee2e68f-151f-4859-891a-6eafb2865cf8/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                    >
                      Google UX Design Professional Certificate
                    </a>
                  </h4>
                  <p style={{ fontSize: '0.84rem', opacity: 0.85, lineHeight: '1.45', margin: 0 }}>
                    End-to-end UX process: user research, wireframing, prototyping, usability testing, and accessibility.
                  </p>
                </div>

                {/* HCI Cert */}
                <div
                  style={{
                    background: 'color-mix(in srgb, var(--surface) 40%, transparent)',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    border: '1px solid color-mix(in srgb, var(--border) 30%, transparent)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', background: 'color-mix(in srgb, var(--border) 40%, transparent)', color: 'var(--text)', padding: '2px 8px', borderRadius: '6px', fontWeight: 'bold' }}>
                      BITS Pilani &bull; 2026
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 6px 0' }}>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/AT79DM7RUO7V"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                    >
                      Human-Computer Interaction (HCI)
                    </a>
                  </h4>
                  <p style={{ fontSize: '0.84rem', opacity: 0.85, lineHeight: '1.45', margin: 0 }}>
                    Advanced interaction paradigms, user-centered design principles, and cognitive psychology applied to digital interfaces.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. High-Converting Contact Section */}
      <ContactSection
        sectionLabel="Let's Talk"
        title="Got a messy problem and real users?"
        desc="I'm at my best when the brief is unclear, the deadline is real, and the users are waiting."
        sectionId="about-contact"
      />
    </main>
  );
};

export default AboutPage;
