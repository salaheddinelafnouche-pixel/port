import React from 'react';
import { Link } from 'react-router-dom';

export const YouScentSaaSPage: React.FC = () => {
  return (
    <div style={{ width: '100%', minHeight: '100dvh', background: '#0F0E0C' }}>
      <div style={{ padding: '12px 16px', background: '#0A0908', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <Link to="/projects" style={{ color: '#F3E8E0', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem' }}>
          ← Back to Projects
        </Link>
        <span style={{ color: '#C64C1B', fontFamily: 'monospace', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          YouScent SaaS Case Study
        </span>
      </div>
      <iframe
        src="/youscent-saas/index.html"
        title="YouScent SaaS Case Study"
        style={{ width: '100%', height: 'calc(100dvh - 49px)', border: 'none' }}
      />
    </div>
  );
};
