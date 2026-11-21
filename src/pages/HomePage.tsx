import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ParticleCanvas } from '../components/ParticleCanvas';
import { ProjectCard } from '../components/ProjectCard';
import { RevealStagger } from '../components/Reveal';
import { ContactSection } from '../components/ContactSection';
import { PROJECTS } from '../data/projects';

export const HomePage: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectsSectionRef = useRef<HTMLElement | null>(null);
  const hasNavigatedRef = useRef(false);
  const navigate = useNavigate();

  const canAutoNavigateRef = useRef(false);

  const handleSmoothNavigate = () => {
    if (hasNavigatedRef.current || !canAutoNavigateRef.current) return;
    hasNavigatedRef.current = true;
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/projects');
    }, 300);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    hasNavigatedRef.current = false;
    canAutoNavigateRef.current = false;

    // Only enable auto-navigation trigger after user is on Home and explicitly scrolls down
    const timer = setTimeout(() => {
      canAutoNavigateRef.current = true;
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const target = projectsSectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            canAutoNavigateRef.current &&
            window.scrollY > 250 &&
            !hasNavigatedRef.current
          ) {
            handleSmoothNavigate();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main id="main" className={isTransitioning ? 'page-exit-anim' : ''}>
      {isTransitioning && (
        <div className="page-transition-overlay active" aria-live="polite" aria-label="Navigating to projects page">
          <div className="page-transition-spinner" aria-hidden="true"></div>
          <span className="page-transition-text">Opening Case Studies...</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-mystical" aria-label="Introduction">
        <div className="hero-bg-mystical" aria-hidden="true">
          <ParticleCanvas />
          <div className="mystical-glow"></div>
        </div>

        <div className="container hero-mystical-inner">
          <div className="hero-glass-card">
            <div className="glass-light-reflection" aria-hidden="true"></div>

            <h1 className="hero-title-editorial">
              Salaheddine Lafnouche — Product Designer
            </h1>

            <p className="hero-sub-editorial">
              Crafting seamless, <strong>0-to-1 high-converting interfaces</strong> for complex AI and UX ecosystems.
            </p>

            <div className="hero-stat-card glass-stat-card" role="region" aria-label="Key Achievement: 73% First-Time User Conversion Rate">
              <div className="hero-stat-icon" aria-hidden="true">
                <span className="hero-stat-dot"></span>
              </div>
              <div className="hero-stat-number">73%</div>
              <div className="hero-stat-details">
                <strong>First-Time User Conversion Rate</strong>
                <span>YouScent Generative AI System</span>
              </div>
            </div>

            <div className="hero-mystical-actions">
              <button
                type="button"
                onClick={handleSmoothNavigate}
                className="btn-primary glass-btn-primary"
                style={{ cursor: 'pointer', border: 'none' }}
              >
                View My Work
              </button>
              <Link to="/contact" className="btn-ghost-mystical glass-btn-ghost">Get in Touch</Link>
            </div>
            <p className="hero-sub-editorial" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
              <a href="mailto:portfolio@salaheddinelafnouche.com">portfolio@salaheddinelafnouche.com</a>
              {' · '}
              <a href="tel:+212629335434">+212 629 335 434</a>
              {' · '}
              <Link to="/about">About</Link>
              {' · '}
              <Link to="/terms">Terms</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section
        className="projects-section section"
        id="projects"
        aria-label="Project case studies"
        ref={projectsSectionRef}
      >
        <div className="section-watermark" aria-hidden="true">§ 01</div>
        <div className="container">
          <div className="section-header">
            <p className="section-label">Featured Work</p>
            <h2 className="section-title">Case Studies</h2>
          </div>
          <RevealStagger as="ul" className="projects-grid" role="list">
            {PROJECTS.map((proj) => (
              <ProjectCard key={proj.id} {...proj} />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
};

