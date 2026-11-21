import React from 'react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <main id="main">
      <section className="page-hero section" aria-label="Terms of use">
        <div className="container" style={{ maxWidth: '42rem' }}>
          <p className="section-label">Legal</p>
          <h1 className="page-title">Terms &amp; privacy</h1>
          <p className="page-intro">
            Last updated: 7 November 2026. This page summarizes how this portfolio site may be used and how contact data is handled.
          </p>

          <article style={{ marginTop: '2.5rem', lineHeight: 1.7 }}>
            <h2 className="section-title" style={{ fontSize: '1.35rem' }}>Terms of use</h2>
            <p>
              This website showcases the professional work of Salaheddine Lafnouche. Content, case studies, and visuals are provided for informational and hiring purposes. You may not copy, redistribute, or present this work as your own without prior written permission.
            </p>
            <p>
              Project names, client brands, and third-party marks remain the property of their respective owners and appear here only to document professional experience.
            </p>

            <h2 className="section-title" style={{ fontSize: '1.35rem', marginTop: '2rem' }}>Privacy</h2>
            <p>
              If you use the contact form, your name, email address, message, and optional project scope are transmitted so a reply can be sent. Submissions may be delivered by email and are not sold to third parties.
            </p>
            <p>
              The site may use local browser storage for theme preference only. Analytics or advertising cookies are not intentionally deployed by this portfolio.
            </p>

            <h2 className="section-title" style={{ fontSize: '1.35rem', marginTop: '2rem' }}>Contact</h2>
            <p>
              Questions about these terms:{' '}
              <a href="mailto:portfolio@salaheddinelafnouche.com">portfolio@salaheddinelafnouche.com</a>
              {' · '}
              <Link to="/contact">Contact page</Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};
