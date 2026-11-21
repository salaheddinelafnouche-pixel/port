import { HikingBadge } from '../components/HikingBadge'
import { StatusBar } from '../components/StatusBar'
import { corridor } from '../data/corridor'
import type { Navigate } from '../types'

type Props = { onNavigate: Navigate }

export function OfflinePack({ onNavigate }: Props) {
  return (
    <div className="screen" style={{ background: '#fff' }}>
      <StatusBar />
      <div className="header-bar">
        <button type="button" aria-label="Back" onClick={() => onNavigate('elevation')}>
          <span className="back-chevron" />
        </button>
        <h1>Offline maps</h1>
        <HikingBadge />
      </div>
      <div className="map-area map-area--band">
        <div className="pack-preview">
          <svg
            className="map-svg"
            viewBox="0 0 360 128"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <rect width="360" height="128" fill="#e8eee6" />
            <path
              d="M40 110 Q120 50 190 42 T330 20"
              fill="none"
              stroke="#34a853"
              strokeWidth="4"
            />
          </svg>
          <div
            className="pill"
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              height: 26,
              fontSize: 11,
              color: '#5f6368',
            }}
          >
            Google Maps download area
          </div>
        </div>
      </div>
      <div className="sheet sheet--fill" style={{ borderRadius: 0, boxShadow: 'none' }}>
        <p className="sheet__eyebrow">Hiking corridor pack</p>
        <h2 className="sheet__title">Offline pack</h2>
        <p className="sheet__meta sheet__meta--sm">
          Ready before you leave cell coverage
        </p>
        <div className="pack-card">
          <h3>{corridor.name}</h3>
          <p>{corridor.pack.size}</p>
          <div className="pack-ready">
            <span className="chip__check" style={{ width: 20, height: 20 }} />
            Corridor ready
          </div>
          <p style={{ marginTop: 10 }}>{corridor.pack.note}</p>
        </div>
        <p
          style={{
            margin: '18px 0 8px',
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          Included from Maps
        </p>
        <div className="list">
          <div className="list-item">Elevation profile · steep flags</div>
          <div className="list-item">Water · camp · exits · bailouts</div>
        </div>
        <button
          type="button"
          className="cta cta--sm"
          onClick={() => onNavigate('safety')}
        >
          Manage in Google Maps
        </button>
      </div>
    </div>
  )
}
