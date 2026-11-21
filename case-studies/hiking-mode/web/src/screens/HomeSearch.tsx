import { MapCanvas } from '../components/MapCanvas'
import { StatusBar } from '../components/StatusBar'
import { corridor } from '../data/corridor'
import type { Navigate } from '../types'

type Props = { onNavigate: Navigate }

export function HomeSearch({ onNavigate }: Props) {
  return (
    <div className="screen">
      <StatusBar />
      <div className="map-area map-area--tall">
        <MapCanvas variant="home" />
        <div className="search-card">
          <div className="search-card__brand">
            <span aria-hidden="true" style={{ width: 14, height: 2, background: '#5f6368', boxShadow: '0 4px 0 #5f6368, 0 8px 0 #5f6368' }} />
            Google Maps
          </div>
          <button
            type="button"
            className="search-field"
            onClick={() => onNavigate('modes')}
          >
            <span className="dot-blue" />
            Search {corridor.name.toLowerCase().replace(' section', '')}…
          </button>
        </div>
        <div className="home-promo">
          <h2>Hiking Mode</h2>
          <p>
            Trail-first map, multi-day corridor, day plan, and offline pack —
            without leaving Google Maps.
          </p>
          <button
            type="button"
            className="cta"
            onClick={() => onNavigate('modes')}
          >
            Try Hiking mode
          </button>
        </div>
      </div>
    </div>
  )
}
