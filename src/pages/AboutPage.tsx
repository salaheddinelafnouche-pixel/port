import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { Reveal, RevealStagger } from '../components/Reveal';

const SECTION_LINKS = [
  {
    id: 'narrative',
    label: 'Overview',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
  },
  {
    id: 'influences',
    label: 'Influences',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    ),
  },
  {
    id: 'approach',
    label: 'Engine',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    id: 'about-contact',
    label: 'Contact',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
] as const;

const COLOR_ARCHETYPES = [
  { id: 'red', name: 'Red', trait: 'Decisive', design: 'Fast paths, clear CTAs' },
  { id: 'yellow', name: 'Yellow', trait: 'Expressive', design: 'Story & emotion first' },
  { id: 'green', name: 'Green', trait: 'Steady', design: 'Calm, reversible steps' },
  { id: 'blue', name: 'Blue', trait: 'Precise', design: 'Why behind every choice' },
] as const;

export const AboutPage: React.FC = () => {
  const [roleText, setRoleText] = useState('');
  const [activeEnginePhase, setActiveEnginePhase] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('narrative');

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

  useEffect(() => {
    const sectionIds = SECTION_LINKS.map((s) => s.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSectionJump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    setActiveSection(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  const enginePhases = [
    {
      id: '01',
      title: 'Strategy',
      subtitle: 'Map KPIs to human friction before drafting UI.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
      steps: [
        'Stakeholder alignment & North Star KPIs',
        'User interviews & empathy mapping',
        'Competitive audits & positioning',
        'Problem framing & feature scoping'
      ],
      metric: '18 qualitative interviews for YouScent & Tech4U',
      example: {
        src: '/assets/youscent-thumb.png',
        alt: 'YouScent AI fragrance discovery product surface',
        caption: 'Framed shopper jargon friction before any UI interviews first.',
        projectLabel: 'YouScent',
        projectLink: '/youscent',
        fit: 'cover' as const,
      },
    },
    {
      id: '02',
      title: 'Architecture',
      subtitle: 'Structure IA and accessible design token systems.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      steps: [
        'IA & task flow mapping',
        'WCAG 2.1 AA tokens in Figma',
        'Lo-fi to interactive hi-fi loops',
        'Design system & token docs'
      ],
      metric: '81.4 System Usability Scale (SUS) achieved',
      example: {
        src: '/hiking-mode/wireframes/04-route-overview.svg',
        alt: 'Hiking Mode lo-fi wireframe for route overview',
        caption: 'Lo-fi route overview IA before hi-fi pixels.',
        projectLabel: 'Hiking Mode',
        projectLink: '/hiking-mode',
        fit: 'contain' as const,
      },
    },
    {
      id: '03',
      title: 'Validation',
      subtitle: 'Test with real users; prove task success and a11y.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      steps: [
        'Usability testing loops',
        'Friction & task-completion diagnostics',
        'Screen reader & contrast audits',
        'Iterate from empirical proof'
      ],
      metric: '100% WCAG 2.1 AA compliance package delivered',
      example: {
        src: '/assets/youscent-saas-thumb.png',
        alt: 'YouScent SaaS atelier compose flow',
        caption: 'Usability loops against a SUS ≥ 80 bar on the atelier flow.',
        projectLabel: 'YouScent SaaS',
        projectLink: '/youscent-saas',
        fit: 'cover' as const,
      },
    },
    {
      id: '04',
      title: 'Hand-Off',
      subtitle: 'Bridge Figma tokens to production React & CSS.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      steps: [
        'Code Connect component docs',
        'Token export (CSS / JSON)',
        'Edge-case & state mapping',
        'Eng sync & post-launch QA'
      ],
      metric: '73% first-time conversion on YouScent AI',
      example: {
        src: '/assets/tech4u-thumb.png',
        alt: 'Tech4U adaptive learning platform',
        caption: 'WCAG 2.1 AA system tokens handed off for production.',
        projectLabel: 'Tech4U',
        projectLink: '/tech4u',
        fit: 'cover' as const,
      },
    },
  ];

  const activePhase = enginePhases[activeEnginePhase];

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

            <p className="about-hero-bio-lead">
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

      {/* Sticky section jump nav */}
      <nav className="about-section-nav" aria-label="About page sections">
        <div className="about-section-nav-inner">
          {SECTION_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`about-section-nav-link${activeSection === link.id ? ' is-active' : ''}`}
              onClick={(e) => handleSectionJump(e, link.id)}
              aria-current={activeSection === link.id ? 'location' : undefined}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* 2. Personal Narrative & Principles Section */}
      <section className="narrative-section section" id="narrative" aria-labelledby="narrative-heading">
        <div className="section-watermark" aria-hidden="true">§ 01</div>
        <div className="container">
          <Reveal className="section-header who-iam-header">
            <p className="section-label">Who I Am</p>
            <h2 id="narrative-heading" className="section-title">From drills to design</h2>
          </Reveal>

          <RevealStagger as="ol" className="who-iam-arc" aria-label="My path from teaching to product design">
            <li className="who-iam-arc-item" data-reveal>
              <div className="who-iam-arc-meta">
                <span className="who-iam-arc-index" aria-hidden="true">01</span>
                <span className="who-iam-arc-phase">Then</span>
              </div>
              <p className="who-iam-arc-text">
                For three years I taught programming inside a military institution turning hard systems into paths people could follow under pressure.
              </p>
            </li>
            <li className="who-iam-arc-item" data-reveal>
              <div className="who-iam-arc-meta">
                <span className="who-iam-arc-index" aria-hidden="true">02</span>
                <span className="who-iam-arc-phase">Bridge</span>
              </div>
              <p className="who-iam-arc-text">
                That habit never left. I still start with the human friction, then build the product around it.
              </p>
            </li>
            <li className="who-iam-arc-item" data-reveal>
              <div className="who-iam-arc-meta">
                <span className="who-iam-arc-index" aria-hidden="true">03</span>
                <span className="who-iam-arc-phase">Now</span>
              </div>
              <p className="who-iam-arc-text">
                Today I&rsquo;m a Google-certified product designer shipping 0-to-1 work across AI, fragrance discovery, and adaptive learning.
              </p>
            </li>
          </RevealStagger>

          <RevealStagger as="ul" className="who-iam-proof" role="list" aria-label="What that looks like in practice">
            <li className="who-iam-proof-item" data-reveal>
              <span className="who-iam-proof-metric">3 yrs</span>
              <h3 className="who-iam-proof-title">Military Discipline</h3>
              <p className="who-iam-proof-text">Taught programming to military cohorts clarity and calm when stakes are high.</p>
            </li>
            <li className="who-iam-proof-item" data-reveal>
              <span className="who-iam-proof-metric">+40%</span>
              <h3 className="who-iam-proof-title">User-Centred UX</h3>
              <p className="who-iam-proof-text">Tech4U Soft Program for shift workers projected learner retention lift.</p>
            </li>
            <li className="who-iam-proof-item" data-reveal>
              <span className="who-iam-proof-metric">E2E</span>
              <h3 className="who-iam-proof-title">End-to-End Craft</h3>
              <p className="who-iam-proof-text">Research → Figma tokens → WCAG 2.1 AA → live React. What ships is what we tested.</p>
            </li>
          </RevealStagger>
        </div>
      </section>

      {/* 3. Reading Influences & Four-Color Lens */}
      <section className="influences-section section" id="influences" aria-label="What shapes my craft">
        <div className="section-watermark" aria-hidden="true">§ 02</div>
        <div className="container">
          <Reveal className="influences-layout">
            <figure className="influences-media">
              <img
                src="/assets/surrounded-by-idiots.jpg"
                alt="Surrounded by Idiots by Thomas Erikson the four-color communication book"
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="influences-copy">
              <p className="section-label">What Shapes My Craft</p>
              <p className="influences-lede">
                <em>Surrounded by Idiots</em> breaks how people communicate into four colors. That model is
                what I carry into design especially YouScent so each mind type gets a clear path.
              </p>

              <ul className="influences-color-row" aria-label="Four color communication archetypes">
                {COLOR_ARCHETYPES.map((color) => (
                  <li key={color.id} className={`influences-color-chip influences-color-chip--${color.id}`}>
                    <span className="influences-color-swatch" aria-hidden="true" />
                    <span className="influences-color-name">{color.name}</span>
                    <span className="influences-color-trait">{color.trait}</span>
                    <span className="influences-color-design">{color.design}</span>
                  </li>
                ))}
              </ul>

              <Link to="/youscent" className="influences-case-link">
                See how this shows up on YouScent &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Problem-Solving Approach Section */}
      <section className="approach-section section" id="approach" aria-labelledby="approach-heading">
        <div className="section-watermark" aria-hidden="true">§ 03</div>
        <div className="container">
          <Reveal className="section-header approach-section-header">
            <p className="section-label">My Process Engine</p>
            <h2 id="approach-heading" className="section-title">How I ship 0-to-1 products</h2>
            <p className="section-desc">
              Four phases each with a real artifact from shipped work.
            </p>
          </Reveal>

          <Reveal className="engine-bento-wrapper">
            <div className="engine-stepper glass-panel">
              <span className="engine-stepper-label">Phases</span>

              {enginePhases.map((phase, idx) => {
                const isActive = activeEnginePhase === idx;
                return (
                  <button
                    key={phase.id}
                    type="button"
                    className={`engine-step${isActive ? ' is-active' : ''}`}
                    onClick={() => setActiveEnginePhase(idx)}
                    aria-pressed={isActive}
                  >
                    <span className="engine-step-id">{phase.id}</span>
                    <span className="engine-step-icon">{phase.icon}</span>
                    <span className="engine-step-title">{phase.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="engine-console glass-panel">
              <div className="engine-console-header">
                <div className="engine-console-heading">
                  <div className="engine-console-icon">{activePhase.icon}</div>
                  <div>
                    <span className="engine-console-badge">Phase {activePhase.id}</span>
                    <h3 className="engine-console-title">{activePhase.title}</h3>
                  </div>
                </div>
              </div>

              <p className="engine-console-subtitle">{activePhase.subtitle}</p>

              <figure className={`engine-example${activePhase.example.fit === 'contain' ? ' engine-example--contain' : ''}`}>
                <div className="engine-example-media">
                  <img
                    key={activePhase.example.src}
                    src={activePhase.example.src}
                    alt={activePhase.example.alt}
                    className="engine-example-img"
                    loading="lazy"
                    width="640"
                    height="400"
                  />
                </div>
                <figcaption className="engine-example-caption">
                  <span className="engine-example-label">In practice</span>
                  <p className="engine-example-text">{activePhase.example.caption}</p>
                  <Link to={activePhase.example.projectLink} className="engine-example-link">
                    {activePhase.example.projectLabel} case study &rarr;
                  </Link>
                </figcaption>
              </figure>

              <ul className="engine-check-grid">
                {activePhase.steps.map((step, sIdx) => (
                  <li key={sIdx} className="engine-check-item">
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
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <div className="engine-metric">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <div>
                  <strong>Impact:</strong> {activePhase.metric}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Peer Validation Testimonial Banner */}
      <section className="testimonial-section section">
        <div className="section-watermark" aria-hidden="true">§ 04</div>
        <div className="container">
          <Reveal as="blockquote" className="testimonial-glass-card">
            <div className="testimonial-quote-mark" aria-hidden="true">“</div>
            <p className="testimonial-quote">
              "It's really cool, especially with the sketchy style of the fonts and graphics. I also noticed the accessibility features, and they’re clearly well thought out great job on that."
            </p>
            <footer className="testimonial-author">
              Velika, UX Designer at Coursera Community
            </footer>
          </Reveal>
        </div>
      </section>

      {/* 5. High-Converting Contact Section */}
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
