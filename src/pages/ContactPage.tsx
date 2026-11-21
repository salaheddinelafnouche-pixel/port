import React from 'react';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <main id="main">
      <section className="page-hero section" aria-label="Contact">
        <div className="container">
          <p className="section-label">Contact</p>
          <h1 className="page-title">Get in touch</h1>
          <p className="page-intro">
            Available for product design roles and 0-to-1 product work. Reach out by email, phone, or the form below.
          </p>
          <p className="page-intro" style={{ marginTop: '1rem' }}>
            <a href="mailto:portfolio@salaheddinelafnouche.com">portfolio@salaheddinelafnouche.com</a>
            {' · '}
            <a href="tel:+212629335434">+212 629 335 434</a>
          </p>
        </div>
      </section>

      <ContactSection sectionId="contact-form" />
    </main>
  );
};
