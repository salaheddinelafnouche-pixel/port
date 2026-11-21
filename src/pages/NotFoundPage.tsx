import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export const NotFoundPage: React.FC = () => {
  return (
    <main id="main">
      <section className="hero-404" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: 'var(--nav-height)' }}>
        <Reveal className="container">
          <p className="section-label">Target Lost</p>
          <h1 className="hero-404-title" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: 'var(--accent)', marginBottom: 'var(--space-sm)', lineHeight: 1 }}>
            404
          </h1>
          <p className="hero-404-desc" style={{ fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto var(--space-2xl)' }}>
            Military-grade clarity requires knowing when you're off the map. The page you are looking for has been moved, deleted, or never existed.
          </p>
          <div className="cta-actions" style={{ justifyContent: 'center', display: 'flex' }}>
            <Link to="/" className="btn-primary">Return to Base</Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
};
