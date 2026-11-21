import { HikingBadge } from '../components/HikingBadge'
import { MapCanvas } from '../components/MapCanvas'
import { StatusBar } from '../components/StatusBar'
import { corridor } from '../data/corridor'
import type { Navigate } from '../types'

type Props = { onNavigate: Navigate }

export function TrailFirstMap({ onNavigate }: Props) {
  return (
    <div className="screen">
      <StatusBar />
      <div className="map-area">
        <MapCanvas variant="fork" />
        <div className="top-bar">
          <button
            type="button"
            className="pill pill--grow"
            onClick={() => onNavigate('modes')}
          >
            <span className="back-chevron" />
            Sierra Crest
          </button>
          <HikingBadge />
        </div>
        <div className="callout callout--gpx">
          <p className="callout__title callout__title--green">
            GPX vs Maps resolved
          </p>
          <p className="callout__sub">Using Maps trail line</p>
        </div>
        <div className="callout callout--legend">
          <p className="callout__title">Blaze legend</p>
          <div className="legend-row">
            <span className="legend-swatch" style={{ background: '#d93025' }} />
            Red main
          </div>
          <div className="legend-row">
            <span className="legend-swatch" style={{ background: '#1a73e8' }} />
            Blue spur
          </div>
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
      <div className="sheet">
        <div className="sheet__handle" />
        <h2 className="sheet__title sheet__title--green">
          {corridor.day2.hikeTime}
        </h2>
        <p className="sheet__meta sheet__meta--sm">{corridor.day2.hikeMeta}</p>
        <button
          type="button"
          className="safety-strip"
          onClick={() => onNavigate('safety')}
        >
          Share · Bailout {corridor.bailout.distance} · {corridor.advisory}
        </button>
        <div className="dual-actions">
          <button
            type="button"
            className="action action--blue"
            onClick={() => onNavigate('corridor')}
          >
            Steps
          </button>
          <button
            type="button"
            className="action action--green"
            onClick={() => onNavigate('day-plan')}
          >
            Day plan
          </button>
        </div>
      </div>
    </div>
  )
}
