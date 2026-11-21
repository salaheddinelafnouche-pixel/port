import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-logo" style={{ fontSize: '1.5rem', letterSpacing: 'normal', marginBottom: 0 }}>
              Salaheddine Lafnouche
            </p>
            <p className="footer-bio" style={{ fontStyle: 'italic' }}>
              Product Designer &amp; former military educator building inclusive, resilient systems.
            </p>
            <div className="footer-status">
              <span className="status-dot"></span>
              <span>Khemisset, Morocco &middot; open to roles</span>
            </div>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-title">Navigation</p>
            <ul className="footer-nav-list" role="list">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-title">Social</p>
            <ul className="footer-nav-list" role="list">
              <li>
                <a href="https://www.linkedin.com/in/salah-eddine-lafnouche-66881525b" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/salah-elafnouc" target="_blank" rel="noopener noreferrer">
                  Behance
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/salah-elafnouc" target="_blank" rel="noopener noreferrer">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2026 Salaheddine Lafnouche. All rights reserved.
            {' · '}
            <a href="mailto:portfolio@salaheddinelafnouche.com">Email</a>
            {' · '}
            <a href="tel:+212629335434">Phone</a>
            {' · '}
            <Link to="/terms">Terms</Link>
          </p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
