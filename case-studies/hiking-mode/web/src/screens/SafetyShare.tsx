import { useState } from 'react'
import { HikingBadge } from '../components/HikingBadge'
import { MapCanvas } from '../components/MapCanvas'
import { StatusBar } from '../components/StatusBar'
import { corridor } from '../data/corridor'
import type { Navigate } from '../types'

type Props = { onNavigate: Navigate }

export function SafetyShare({ onNavigate }: Props) {
  const [notice, setNotice] = useState('')

  return (
    <div className="screen">
      <StatusBar />
      <div className="map-area map-area--mid">
        <MapCanvas variant="safety" />
        <div className="top-bar">
          <button
            type="button"
            className="pill pill--grow"
            onClick={() => onNavigate('map')}
          >
            <span className="back-chevron" />
            Sierra Crest
          </button>
          <HikingBadge />
        </div>
        <button
          type="button"
          className="callout"
          style={{ top: 60, left: 12, right: 12, width: 'auto' }}
          onClick={() => onNavigate('safety')}
        >
          <p className="callout__title" style={{ fontWeight: 500 }}>
            Share · Bailout {corridor.bailout.distance} · Advisory
          </p>
        </button>
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
        <p className="sheet__eyebrow">Google Maps · Hiking safety</p>
        <h2 className="sheet__title">Safety</h2>
        <p className="sheet__meta sheet__meta--sm">
          Works offline · calm utilities
        </p>
        <div className="list">
          <div
            className="list-item list-item--blue"
            style={{ border: '1px solid #1a73e8' }}
          >
            <span className="list-item__title">Next reliable water</span>
            <span className="list-item__sub">{corridor.water.safety}</span>
          </div>
          <div
            className="list-item list-item--red"
            style={{ border: '1px solid #d93025' }}
          >
            <span className="list-item__title">Nearest bailout</span>
            <span className="list-item__sub">{corridor.bailout.safety}</span>
          </div>
        </div>
        <div className="dual-actions">
          <button
            type="button"
            className="action action--green"
            style={{ height: 44, borderRadius: 12 }}
            onClick={() => setNotice('Share link is preview-only in this prototype.')}
          >
            Share link
          </button>
          <button type="button" className="action action--warn" onClick={() => setNotice(corridor.advisory)}>
            Advisory
          </button>
        </div>
        {notice ? <p className="footnote">{notice}</p> : null}
        <p className="footnote">Stay in Maps · no app switch</p>
        <button
          type="button"
          className="cta cta--sm"
          onClick={() => onNavigate('map')}
        >
          Back to trail map
        </button>
      </div>
    </div>
  )
}
