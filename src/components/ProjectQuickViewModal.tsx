import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

interface ProjectQuickViewModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectQuickViewModal: React.FC<ProjectQuickViewModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    dialogRef.current?.querySelector<HTMLElement>('button, a[href]')?.focus();

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="pv-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pv-modal-title"
    >
      <div className="pv-modal-content" ref={dialogRef} onClick={(e) => e.stopPropagation()}>
        <button className="pv-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="pv-modal-header">
          <div className="pv-modal-badge-row">
            <span className="pv-modal-num">{project.num}</span>
            <span className="pv-modal-category">{project.category}</span>
            <span className="pv-modal-role">{project.role}</span>
          </div>
          <h2 id="pv-modal-title" className="pv-modal-title">{project.title}</h2>
          <p className="pv-modal-subtitle">{project.subtitle}</p>
        </div>

        <div className="pv-modal-metric-card">
          <div className="pv-metric-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <div className="pv-metric-info">
            <span className="pv-metric-val">{project.impactMetric.value}</span>
            <span className="pv-metric-lbl">{project.impactMetric.label}</span>
          </div>
        </div>

        <div className="pv-modal-body">
          <div className="pv-modal-grid">
            <div className="pv-modal-box">
              <h3 className="pv-box-title">
                <span className="pv-box-icon" aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </span> Core Problem
              </h3>
              <p>{project.problem}</p>
            </div>
            <div className="pv-modal-box">
              <h3 className="pv-box-title">
                <span className="pv-box-icon" aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path>
                    <line x1="9" y1="21" x2="15" y2="21"></line>
                  </svg>
                </span> Design Solution
              </h3>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="pv-modal-section">
            <h3 className="pv-section-title">Key Outcomes &amp; Impact</h3>
            <ul className="pv-results-list">
              {project.keyResults.map((result, idx) => (
                <li key={idx} className="pv-result-item">
                  <span className="pv-check" aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pv-modal-section">
            <h3 className="pv-section-title">Key Deliverables</h3>
            <div className="pv-tags-flex">
              {project.deliverables.map((item, idx) => (
                <span key={idx} className="pv-deliv-tag">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="pv-modal-footer">
          <button className="pv-btn-secondary" onClick={onClose}>
            Close Preview
          </button>
          <Link to={project.link} className="pv-btn-primary" onClick={onClose}>
            Read Full Case Study →
          </Link>
        </div>
      </div>
    </div>
  );
};
