import React from 'react';
import { Link } from 'react-router-dom';

export const Tech4UPage: React.FC = () => {
  return (
    <div style={{ width: '100%', minHeight: '100dvh', background: '#FAFAF8' }}>
      <div style={{ padding: '12px 16px', background: '#FFFFFF', borderBottom: '1px solid #E2DDD6', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <Link to="/projects" style={{ color: '#1A1A1A', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem' }}>
          ← Back to Projects
        </Link>
        <span style={{ color: '#A54228', fontFamily: 'monospace', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Tech4U Case Study
        </span>
      </div>
      <iframe
        src="/tech4u/tech4u-cs.html"
        title="Tech4U Case Study"
        style={{ width: '100%', height: 'calc(100dvh - 49px)', border: 'none' }}
      />
    </div>
  );
};

