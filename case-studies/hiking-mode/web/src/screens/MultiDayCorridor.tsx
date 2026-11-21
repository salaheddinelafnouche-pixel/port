import { HikingBadge } from '../components/HikingBadge'
import { MapCanvas } from '../components/MapCanvas'
import { StatusBar } from '../components/StatusBar'
import { corridor } from '../data/corridor'
import type { Navigate } from '../types'

type Props = { onNavigate: Navigate }

export function MultiDayCorridor({ onNavigate }: Props) {
  return (
    <div className="screen">
      <StatusBar />
      <div className="map-area map-area--mid">
        <MapCanvas variant="corridor" />
        <div className="top-bar">
          <button
            type="button"
            className="pill pill--grow"
            onClick={() => onNavigate('map')}
          >
            <span className="back-chevron" />
            Directions
          </button>
          <HikingBadge />
        </div>
      </div>
      <div className="sheet sheet--fill">
        <div className="sheet__handle" />
        <p className="sheet__eyebrow">Google Maps · Hiking</p>
        <h2 className="sheet__title">{corridor.name}</h2>
        <p className="sheet__meta">
          {corridor.totalMiles} · {corridor.days} days · {corridor.gain}
        </p>
        <div className="row-chips">
          <button
            type="button"
            className="chip chip--ready"
            onClick={() => onNavigate('offline')}
          >
            <span className="chip__check" />
            Corridor ready
          </button>
          <span className="chip chip--muted">{corridor.preset}</span>
        </div>
        <div className="list">
          {corridor.daysList.map((day) => (
            <button
              key={day}
              type="button"
              className="list-item"
              onClick={() => onNavigate('day-plan')}
            >
              {day}
            </button>
          ))}
        </div>
        <p className="footnote footnote--left">
          Offline pack covers elevation, water, camp, exits
        </p>
        <button
          type="button"
          className="cta cta--sm"
          onClick={() => onNavigate('day-plan')}
        >
          Open Day 2 plan
        </button>
      </div>
    </div>
  )
}
