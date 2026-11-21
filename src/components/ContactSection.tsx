import React, { useState } from 'react';

interface ScopeOption {
  id: string;
  title: string;
  desc: string;
  iconSvg: React.ReactNode;
}

const SCOPE_OPTIONS: ScopeOption[] = [
  {
    id: '0-to-1 Product Design',
    title: '0-to-1 Product Design',
    desc: 'From ambiguous brief to high-converting MVP.',
    iconSvg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/>
        <circle cx="19" cy="5" r="1.5" fill="currentColor"/>
        <circle cx="5" cy="19" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'Ecosystem & IA Refactor',
    title: 'Ecosystem & IA Refactor',
    desc: 'Streamlining complex workflows & information architecture.',
    iconSvg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/>
        <line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/>
      </svg>
    ),
  },
  {
    id: 'Design Systems & Tokens',
    title: 'Design Systems & Tokens',
    desc: 'WCAG 2.1 AA tokens, Figma variables & component libraries.',
    iconSvg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 12 12 17 22 12"/>
        <polyline points="2 17 12 22 22 17"/>
      </svg>
    ),
  },
  {
    id: 'Prototyping & Motion Specs',
    title: 'Prototyping & Motion Specs',
    desc: 'High-fidelity Figma prototypes, micro-interactions & animations.',
    iconSvg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    id: 'User Research & Usability',
    title: 'User Research & Usability',
    desc: 'Empathy mapping, user interviews, SUS surveys & affinity maps.',
    iconSvg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 'Accessibility & WCAG Audit',
    title: 'Accessibility & WCAG Audit',
    desc: 'A11y audits, screen reader optimization & contrast standards.',
    iconSvg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    id: 'UI Modernization',
    title: 'UI Modernization',
    desc: 'Transforming legacy tools into modern, glassmorphic interfaces.',
    iconSvg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    id: 'Strategic UX Advisory',
    title: 'Strategic UX Advisory',
    desc: 'Conversion optimization, UX audits & product direction.',
    iconSvg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
  },
];

const CONTACT_EMAIL = 'portfolio@salaheddinelafnouche.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SCOPE_ASSESSMENTS = [
  {
    min: 4,
    time: '~2–3 Months Partnership',
    fill: '100%',
    complexity: 'Enterprise Partnership',
    desc: 'Assessment: End-to-end product partnership—from ambiguous brief & strategic UX advisory to complete design system rollout and engineering handoff.',
  },
  {
    min: 3,
    time: '~5–8 Weeks Transformation',
    fill: '75%',
    complexity: 'Multi-Platform Ecosystem',
    desc: 'Assessment: Comprehensive AI ecosystem transformation with scalable design tokens, WCAG 2.1 AA audits, and design system governance.',
  },
  {
    min: 2,
    time: '~3–5 Weeks Build',
    fill: '50%',
    complexity: 'High System Impact',
    desc: 'Assessment: Core 0-to-1 product build combining user research, interaction flows, and high-fi prototyping.',
  },
  {
    min: 1,
    time: '~2–3 Weeks Sprint',
    fill: '25%',
    complexity: 'Focused Sprint',
    desc: 'Assessment: Ideal for targeted UI architecture, rapid wireframing, and core prototype validation.',
  },
];

const EMPTY_ASSESSMENT = {
  time: 'Pending Selection',
  fill: '10%',
  complexity: 'Unassigned',
  desc: 'Select project modules above to run an instant scope assessment and timeline evaluation.',
};

function assessScope(count: number) {
  return SCOPE_ASSESSMENTS.find((item) => count >= item.min) ?? EMPTY_ASSESSMENT;
}

export interface ContactSectionProps {
  sectionLabel?: string;
  title?: string;
  desc?: string;
  sectionId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  sectionLabel = "Let's Connect",
  title = "Have a project in mind?",
  desc = "I'd love to hear about it. Whether you're starting from scratch or improving what you have, let's talk and see how I can help.",
  sectionId = "contact",
}) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Status
  const [statusText, setStatusText] = useState('');
  const [statusType, setStatusType] = useState<'error' | 'success' | ''>('');
  const [isSending, setIsSending] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const toggleScope = (id: string) => {
    setSelectedScopes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const count = selectedScopes.length;
  const assessment = assessScope(count);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSelectedScopes([]);
  };

  const markSent = () => {
    setStatusType('success');
    setStatusText("Thanks! I'll be in touch within 24 hours.");
    resetForm();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusType('error');
      setStatusText('Please fill out all required fields.');
      return;
    }

    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatusType('error');
      setStatusText('Please enter a valid email address.');
      return;
    }

    setIsSending(true);
    setStatusText('');
    setStatusType('');
    let delivered = false;

    try {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            message,
            scope: selectedScopes,
          }),
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok && data.success) {
          markSent();
          delivered = true;
        } else if (response.status === 400 || response.status === 429) {
          setStatusType('error');
          setStatusText(data.error || 'Please check the form and try again.');
          delivered = true;
        }
      } catch (err) {
        console.warn('Backend API endpoint unavailable, attempting FormSubmit fallback...', err);
      }

      if (!delivered) {
        const fallbackResponse = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
            selected_scope: selectedScopes.join(', ') || 'General Inquiry',
            _subject: `New portfolio inquiry from ${name}`,
          }),
        });

        const fallbackData = await fallbackResponse.json();

        if (fallbackResponse.ok && (fallbackData.success === 'true' || fallbackData.success === true)) {
          markSent();
        } else {
          setStatusType('error');
          setStatusText('Something went wrong sending your message. Please try again or email directly.');
        }
      }
    } catch (fallbackErr) {
      console.error('FormSubmit fallback error:', fallbackErr);
      setStatusType('error');
      setStatusText('Unable to send message right now. Please email directly.');
    } finally {
      setIsSending(false);
    }
  };

  const handleCopyEmail = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    }).catch(() => {
      setEmailCopied(false);
    });
  };

  return (
    <section className="cta-section section" id={sectionId} aria-labelledby={`${sectionId}-heading`}>
      <div className="section-watermark" aria-hidden="true">§ 02</div>
      <div className="container">
        <div className="cta-inner">
          <p className="section-label">{sectionLabel}</p>
          <h2 id={`${sectionId}-heading`} className="cta-title">{title}</h2>
          <p className="cta-desc">{desc}</p>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`${sectionId}-name`} className="form-label">Your Name</label>
                  <input
                    type="text"
                    id={`${sectionId}-name`}
                    name="name"
                    className="form-input"
                    placeholder="Sarah Connor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`${sectionId}-email`} className="form-label">Email Address</label>
                  <input
                    type="email"
                    id={`${sectionId}-email`}
                    name="email"
                    className="form-input"
                    placeholder="sarah@cyberdyne.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  What are we building?{' '}
                  <span style={{ opacity: 0.5, fontWeight: 'normal', fontSize: '0.8em' }}>
                    (Optional)
                  </span>
                </label>
                <div className="scope-picker">
                  <button
                    type="button"
                    className={`scope-picker-trigger ${isPickerOpen ? 'is-active' : ''}`}
                    aria-expanded={isPickerOpen}
                    onClick={() => setIsPickerOpen((prev) => !prev)}
                  >
                    <span className="scope-picker-label">
                      <span className="scope-picker-icon">
                        {selectedScopes.length > 0 ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        ) : (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        )}
                      </span>
                      <span className={`scope-picker-text ${selectedScopes.length > 0 ? 'has-selection' : ''}`}>
                        {selectedScopes.length === 0
                          ? 'Select project scope & modules...'
                          : selectedScopes.length === 1
                          ? SCOPE_OPTIONS.find((s) => s.id === selectedScopes[0])?.title || selectedScopes[0]
                          : `${selectedScopes.length} modules selected`}
                      </span>
                    </span>
                    <span className="scope-picker-arrow">▾</span>
                  </button>

                  <div className={`scope-picker-content ${isPickerOpen ? 'is-open' : ''}`}>
                    <div className="scope-picker-inner">
                      <div className="scope-matrix" role="group" aria-label="Project Scope Modules">
                        {SCOPE_OPTIONS.map((opt) => {
                          const isChecked = selectedScopes.includes(opt.id);
                          return (
                            <label key={opt.id} className="scope-card">
                              <input
                                type="checkbox"
                                name="scope[]"
                                value={opt.id}
                                checked={isChecked}
                                onChange={() => toggleScope(opt.id)}
                              />
                              <div className="scope-card-inner">
                                <div className="scope-card-header">
                                  <span className="scope-icon" aria-hidden="true">
                                    {opt.iconSvg}
                                  </span>
                                  <span className="scope-check" aria-hidden="true" />
                                </div>
                                <strong className="scope-title">{opt.title}</strong>
                                <span className="scope-desc">{opt.desc}</span>
                              </div>
                            </label>
                          );
                        })}
                      </div>

                      <div className="scope-meter scope-assessment-card" aria-live="polite">
                        <div className="scope-meter-header">
                          <span className="scope-meter-title">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                            </svg>
                            Scope Assessment
                          </span>
                          <span className="scope-meter-time">{assessment.time}</span>
                        </div>

                        <div className="scope-meter-bar">
                          <div className="scope-meter-fill" style={{ width: assessment.fill }} />
                        </div>

                        {count > 0 && (
                          <div className="scope-assessment-summary">
                            <div className="assessment-meta">
                              <span>Rating: <strong>{assessment.complexity}</strong></span>
                              <span>Selected: <strong>{count} of 8 Modules</strong></span>
                            </div>
                            <ul className="assessment-deliverable-list">
                              {selectedScopes.map((scopeId) => {
                                const matchedOpt = SCOPE_OPTIONS.find((s) => s.id === scopeId);
                                return (
                                  <li key={scopeId} className="assessment-deliverable-item">
                                    <span className="deliverable-check">✓</span>
                                    <span>{matchedOpt?.title || scopeId}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}

                        <p className="scope-meter-desc">{assessment.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor={`${sectionId}-message`} className="form-label">Project Vision &amp; Timeline</label>
                <textarea
                  id={`${sectionId}-message`}
                  name="message"
                  className="form-textarea"
                  rows={4}
                  placeholder="Tell me about the messy problem, your users, and what success looks like..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className="form-footer">
                <button
                  type="submit"
                  className={`btn-primary btn-submit ${isSending ? 'is-sending' : ''} ${statusType === 'success' ? 'is-success' : ''}`}
                  disabled={isSending}
                >
                  <span className="btn-text">
                    {isSending ? 'Sending...' : statusType === 'success' ? '✓ Message Sent!' : 'Send Message'}
                  </span>
                  <span className="btn-icon">
                    {isSending ? '⏳' : statusType === 'success' ? '' : '→'}
                  </span>
                </button>

                {statusText && (
                  <div className={`form-status ${statusType}`} aria-live="polite">
                    {statusText}
                  </div>
                )}
              </div>
            </form>
          </div>

          <p className="cta-email-fallback">
            or reach me directly at{' '}
            <button className="email-copy" onClick={handleCopyEmail} aria-live="polite">
              {emailCopied ? 'Copied' : CONTACT_EMAIL}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
