import React from 'react';
import { Link } from 'react-router-dom';

export const HikingModePage: React.FC = () => {
  return (
    <div style={{ width: '100%', minHeight: '100dvh', background: '#0f1f18' }}>
      <div style={{ padding: '12px 16px', background: '#0d1a14', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <Link to="/projects" style={{ color: '#c8e6c9', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem' }}>
          ← Back to Projects
        </Link>
        <span style={{ color: '#7cb342', fontFamily: 'monospace', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Google Maps Hiking Mode Case Study
        </span>
      </div>
      <iframe
        src="/hiking-mode/index.html"
        title="Google Maps Hiking Mode Case Study"
        style={{ width: '100%', height: 'calc(100dvh - 49px)', border: 'none' }}
      />
    </div>
  );
};
