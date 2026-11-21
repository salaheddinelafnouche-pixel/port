import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export interface ProjectCardProps {
  id: string;
  num: string;
  title: string;
  role: string;
  date: string;
  description: string;
  impactMetric?: {
    value: string;
    label: string;
  };
  tags: string[];
  category?: string;
  link: string;
  thumb: string;
  initials: string;
  onQuickView?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  num,
  title,
  role,
  date,
  description,
  impactMetric,
  tags,
  category,
  link,
  thumb,
  initials,
  onQuickView,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef<HTMLLIElement | null>(null);
  const visibleTags = tags.slice(0, 3);

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    if (!cardRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(hover: none)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const mx = (x / rect.width) * 12;
    const my = (y / rect.height) * 12;

    cardRef.current.style.setProperty('--mx', `${mx}px`);
    cardRef.current.style.setProperty('--my', `${my}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--mx', '0px');
    cardRef.current.style.setProperty('--my', '0px');
  };

  return (
    <li
      ref={cardRef}
      className={`project-card ${category ? `category-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''}`}
      data-reveal
      data-project-id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-inner">
        <div className={`project-thumb ${!imgLoaded && !imgError ? 'is-loading' : ''} ${imgError ? 'thumb-fallback' : ''}`}>
          <Link to={link} tabIndex={-1} aria-hidden="true" className="project-thumb-link">
            <img
              src={thumb}
              alt={`${title} project thumbnail`}
              loading="lazy"
              className={imgLoaded ? 'is-loaded' : ''}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          </Link>
          <div className="project-thumb-fallback" aria-hidden="true">
            <span className="thumb-initials">{initials}</span>
          </div>
        </div>

        <div className="project-info">
          <div className="project-header-meta">
            <span className="project-num" aria-hidden="true">{num}</span>
            <div className="project-meta">
              <span className="project-role">{role}</span>
              <span className="project-date">{date}</span>
            </div>
          </div>

          <h3 className="project-title">
            <Link to={link}>{title}</Link>
          </h3>

          <p className="project-desc">{description}</p>

          {impactMetric && (
            <div className="project-metric" aria-label={`Metric: ${impactMetric.value} ${impactMetric.label}`}>
              <strong className="project-metric-value">{impactMetric.value}</strong>
              <span className="project-metric-label">{impactMetric.label}</span>
            </div>
          )}

          <ul className="project-tags" role="list" aria-label="Methods used">
            {visibleTags.map((tag, idx) => (
              <li key={idx} className="tag">{tag}</li>
            ))}
          </ul>

          <div className="project-actions">
            <Link to={link} className="project-primary-btn" aria-label={`Read ${title} case study`}>
              <span>Read Case Study</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            {onQuickView && (
              <button
                type="button"
                className="project-quickview-btn"
                onClick={onQuickView}
                aria-label={`Quick overview of ${title}`}
              >
                Quick Overview
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
