import { HikingBadge } from '../components/HikingBadge'
import { MapCanvas } from '../components/MapCanvas'
import { StatusBar } from '../components/StatusBar'
import { corridor } from '../data/corridor'
import type { Navigate } from '../types'

type Props = { onNavigate: Navigate }

export function DayPlan({ onNavigate }: Props) {
  return (
    <div className="screen">
      <StatusBar />
      <div className="map-area map-area--short">
        <MapCanvas variant="day" />
        <div className="top-bar">
          <button
            type="button"
            className="pill pill--grow"
            onClick={() => onNavigate('corridor')}
          >
            <span className="back-chevron" />
            {corridor.day2.label}
          </button>
          <HikingBadge />
        </div>
      </div>
      <div className="sheet sheet--fill">
        <div className="sheet__handle" />
        <p className="sheet__eyebrow">Google Maps · Hiking day plan</p>
        <h2 className="sheet__title sheet__title--lg">{corridor.day2.title}</h2>
        <p className="sheet__meta">{corridor.day2.summary}</p>
        <div className="row-chips">
          <span className="chip chip--ready">
            <span className="pill__dot" />
            Available offline
          </span>
        </div>
        <div className="list">
          <button
            type="button"
            className="list-item list-item--warn"
            onClick={() => onNavigate('elevation')}
          >
            <span className="list-item__title" style={{ color: '#e37400' }}>
              Steep morning
            </span>
            <span className="list-item__sub">{corridor.day2.steep}</span>
          </button>
          <p
            style={{
              margin: '4px 0 0',
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Stops on this day
          </p>
          <button
            type="button"
            className="list-item list-item--blue"
            onClick={() => onNavigate('safety')}
          >
            <span className="list-item__title">
              Next water · {corridor.water.name}
            </span>
            <span className="list-item__sub">{corridor.water.detail}</span>
          </button>
          <button
            type="button"
            className="list-item list-item--red"
            onClick={() => onNavigate('safety')}
          >
            Bailout · {corridor.bailout.name}
          </button>
          <div className="list-item">{corridor.camp}</div>
        </div>
        <div className="dual-actions">
          <button
            type="button"
            className="action action--blue"
            onClick={() => onNavigate('elevation')}
          >
            Elevation
          </button>
          <button
            type="button"
            className="action action--green"
            onClick={() => onNavigate('offline')}
          >
            Offline pack
          </button>
        </div>
      </div>
    </div>
  )
}
