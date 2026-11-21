import { MapCanvas } from '../components/MapCanvas'
import { StatusBar } from '../components/StatusBar'
import { corridor } from '../data/corridor'
import type { Navigate } from '../types'

type Props = { onNavigate: Navigate }

export function ModeSwitcher({ onNavigate }: Props) {
  return (
    <div className="screen">
      <StatusBar />
      <div className="map-area">
        <MapCanvas variant="modes" />
        <div className="search-card">
          <div className="search-card__brand">
            <button type="button" aria-label="Back" onClick={() => onNavigate('home')}>
              <span className="back-chevron" />
            </button>
            Google Maps
          </div>
          <div className="search-field">
            <span className="dot-blue" />
            Your location
          </div>
          <div className="search-field">
            <span className="pin-red" />
            {corridor.trailhead}
          </div>
        </div>
      </div>
      <div className="sheet">
        <div className="sheet__handle" />
        <h2 className="sheet__title" style={{ fontSize: 15 }}>
          Choose how to get there
        </h2>
        <div className="modes" role="group" aria-label="Travel modes">
          <button type="button" className="mode" aria-disabled="true">
            <span className="mode__icon" aria-hidden="true">
              ▦
            </span>
            Drive
          </button>
          <button type="button" className="mode" aria-disabled="true">
            <span className="mode__icon" aria-hidden="true">
              ▤
            </span>
            Transit
          </button>
          <button type="button" className="mode" aria-disabled="true">
            <span className="mode__icon" aria-hidden="true">
              ○
            </span>
            Walk
          </button>
          <button type="button" className="mode" aria-disabled="true">
            <span className="mode__icon" aria-hidden="true">
              ◎
            </span>
            Bike
          </button>
          <button
            type="button"
            className="mode is-active"
            aria-current="true"
            onClick={() => onNavigate('map')}
          >
            <span className="mode__icon" aria-hidden="true">
              ▲
            </span>
            Hike
          </button>
        </div>
        <button
          type="button"
          className="cta"
          onClick={() => onNavigate('map')}
        >
          Start in Hiking mode
        </button>
        <p className="footnote">{corridor.toTrailhead}</p>
      </div>
    </div>
  )
}
