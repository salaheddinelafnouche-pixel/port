import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { Reveal, RevealStagger } from '../components/Reveal';
import { PROJECTS } from '../data/projects';

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
    id: 'resume',
    label: 'Background',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
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

const CAREER_HIGHLIGHTS: Array<{
  projectId: string;
  title: string;
}> = [
  {
    projectId: 'hiking-mode',
    title: 'Lead UX Designer @ Google Maps Hiking Mode',
  },
  {
    projectId: 'youscent-saas',
    title: 'Lead SaaS Designer @ YouScent',
  },
  {
    projectId: 'tech4u',
    title: 'Founder & Lead UX @ Tech4U',
  },
];

const SKILL_GROUPS = [
  {
    title: 'Design & Systems',
    items: [
      'Figma Variables & Tokens',
      'Design System Governance',
      'Interactive Prototyping',
      'Component Libraries',
    ],
  },
  {
    title: 'UX Research & AI',
    items: [
      '1-on-1 User Interviews',
      'Generative AI Prompt UX',
      'Affinity & Empathy Mapping',
      'SUS Usability Surveys',
    ],
  },
  {
    title: 'Accessibility & Frontend',
    items: [
      'WCAG 2.1 AA Audits',
      'Screen Reader Specs',
      'React & TypeScript',
      'Vanilla CSS & HTML5',
    ],
  },
];

const CERTS = [
  {
    issuer: 'IBM',
    year: '2026',
    title: 'Generative AI: The Future of UX UI Design',
    href: 'https://coursera.org/share/3e428eac6b9a8dffbbc192115696b097',
  },
  {
    issuer: 'IBM',
    year: '2026',
    title: 'Introduction to Artificial Intelligence (AI)',
    href: 'https://coursera.org/share/c78fd5d739d3dd819d5b34649ce879e2',
  },
  {
    issuer: 'Google',
    year: '2025',
    title: 'Google UX Design Professional Certificate',
    href: 'https://www.credly.com/badges/aee2e68f-151f-4859-891a-6eafb2865cf8/public_url',
  },
  {
    issuer: 'BITS Pilani',
    year: '2026',
    title: 'Human-Computer Interaction (HCI)',
    href: 'https://www.coursera.org/account/accomplishments/verify/AT79DM7RUO7V',
  },
];

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
      metric: '18 qualitative interviews for YouScent & Tech4U'
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
      metric: '81.4 System Usability Scale (SUS) achieved'
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
      metric: '100% WCAG 2.1 AA compliance package delivered'
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
      metric: '73% first-time conversion on YouScent AI'
    }
  ];

  const careerProjects = CAREER_HIGHLIGHTS.map((highlight) => {
    const project = PROJECTS.find((p) => p.id === highlight.projectId);
    if (!project) return null;
    return {
      ...highlight,
      date: project.date,
      link: project.link,
    };
  }).filter((item): item is NonNullable<typeof item> => Boolean(item));

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
            <h2 id="narrative-heading" className="section-title">Overview</h2>
            <p className="section-desc">
              Systems thinking with human empathy—products that feel effortless and perform at scale.
            </p>
          </Reveal>

          <RevealStagger className="who-iam-pillars">
            <div className="who-iam-pillar" data-reveal>
              <div className="who-iam-pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Military Discipline</h3>
              <p>Taught programming for 3 years in a military institution—clarity, high standards, structured communication under pressure.</p>
            </div>

            <div className="who-iam-pillar" data-reveal>
              <div className="who-iam-pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.95 1.5 4 .77.77 1.24 1.53 1.41 2.5" />
                </svg>
              </div>
              <h3>User-Centred UX</h3>
              <p>At Tech4U, built an adaptive &ldquo;Soft Program&rdquo; for shift workers that boosted retention by 40%.</p>
            </div>

            <div className="who-iam-pillar" data-reveal>
              <div className="who-iam-pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3>End-to-End Craft</h3>
              <p>Research packs to Figma tokens, WCAG 2.1 AA audits, and live React prototypes—end to end.</p>
            </div>
          </RevealStagger>

          <Reveal className="who-iam-principles">
            <span className="who-iam-principles-label">Principles</span>
            <ul className="who-iam-principles-list">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                Clarity over cleverness
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Stress-test the happy path
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                Evidence over opinion
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 3. Problem-Solving Approach Section */}
      <section className="approach-section section" id="approach" aria-labelledby="approach-heading">
        <div className="section-watermark" aria-hidden="true">§ 02</div>
        <div className="container">
          <Reveal className="section-header approach-section-header">
            <p className="section-label">My Process Engine</p>
            <h2 id="approach-heading" className="section-title">How I ship 0-to-1 products</h2>
            <p className="section-desc">
              Four phases from ambiguous brief to accessible, high-impact digital products.
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
          <div className="about-brief-header">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <p className="section-label">Background</p>
              <h2 id="resume-heading" className="section-title">Selected work &amp; credentials</h2>
            </div>
            <Link to="/resume" className="btn-secondary" aria-label="View full resume online">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View Interactive Resume &rarr;
            </Link>
          </div>

          <Reveal className="about-brief-panel">
            <div className="about-brief-block">
              <span className="about-brief-label">Work</span>
              <ul className="about-brief-work">
                {careerProjects.map((project) => (
                  <li key={project.projectId}>
                    <Link to={project.link} className="about-brief-row">
                      <span className="about-brief-date">{project.date}</span>
                      <span className="about-brief-title">{project.title}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <div className="about-brief-row about-brief-row--static">
                    <span className="about-brief-date">2021 – 2024</span>
                    <span className="about-brief-title">Instructor @ C.I.T &bull; Kenitra</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="about-brief-block">
              <span className="about-brief-label">Skills</span>
              <div className="about-brief-skills">
                {SKILL_GROUPS.flatMap((group) => group.items).map((item) => (
                  <span key={item} className="about-brief-chip">{item}</span>
                ))}
              </div>
            </div>

            <div className="about-brief-block">
              <span className="about-brief-label">Certifications</span>
              <ul className="about-brief-certs">
                {CERTS.map((cert) => (
                  <li key={cert.href}>
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-brief-row"
                    >
                      <span className="about-brief-date">
                        {cert.issuer} &middot; {cert.year}
                      </span>
                      <span className="about-brief-title">{cert.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
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
