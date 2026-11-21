import { HikingBadge } from '../components/HikingBadge'
import { MapCanvas } from '../components/MapCanvas'
import { StatusBar } from '../components/StatusBar'
import { corridor } from '../data/corridor'
import type { Navigate } from '../types'

type Props = { onNavigate: Navigate }

export function Elevation({ onNavigate }: Props) {
  return (
    <div className="screen">
      <StatusBar />
      <div className="map-area map-area--mid">
        <MapCanvas variant="elevation" />
        <div className="top-bar">
          <button
            type="button"
            className="pill pill--grow"
            onClick={() => onNavigate('day-plan')}
          >
            <span className="back-chevron" />
            Elevation
          </button>
          <HikingBadge />
        </div>
        <div className="fab-col">
          <button type="button" className="fab" aria-label="Zoom">
            +
          </button>
          <button type="button" className="fab" aria-label="Locate">
            <span className="dot-blue" />
          </button>
        </div>
      </div>
      <div className="sheet sheet--fill">
        <div className="sheet__handle" />
        <p className="sheet__eyebrow">Google Maps · Hiking</p>
        <h2 className="sheet__title">Elevation and grade</h2>
        <p className="sheet__meta">{corridor.day2.elevation}</p>
        <div className="elev-chart">
          <div className="elev-chart__steep" />
          <svg viewBox="0 0 280 110" aria-hidden="true">
            <polyline
              points="8,95 50,70 90,28 130,8 170,58 210,38 250,48 272,40"
              fill="none"
              stroke="#34a853"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="8" y1="100" x2="272" y2="100" stroke="#e8eaed" />
          </svg>
        </div>
        <p className="elev-label">steep zone</p>
        <button
          type="button"
          className="list-item"
          style={{
            marginTop: 12,
            background: '#e6f4ea',
          }}
          onClick={() => onNavigate('map')}
        >
          <span className="list-item__title" style={{ color: '#137333' }}>
            At fork · stay on main grade
          </span>
          <span className="list-item__sub" style={{ color: '#188038' }}>
            Recommended line matches Maps trail
          </span>
        </button>
        <button
          type="button"
          className="cta cta--sm"
          onClick={() => onNavigate('offline')}
        >
          Continue to offline pack
        </button>
      </div>
    </div>
  )
}
