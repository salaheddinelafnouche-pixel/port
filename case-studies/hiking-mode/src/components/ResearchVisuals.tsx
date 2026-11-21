type IconProps = { className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function EdgeVignette({
  name,
  className = '',
}: {
  name: 'battery' | 'snow' | 'dry' | 'night' | 'gpx' | 'zerosignal' | 'blaze'
  className?: string
}) {
  const common = {
    className: `edge-vignette ${className}`.trim(),
    viewBox: '0 0 120 72',
    'aria-hidden': true as const,
  }

  switch (name) {
    case 'battery':
      return (
        <svg {...common}>
          <rect x="8" y="8" width="104" height="56" rx="4" fill="rgba(107,155,114,0.08)" stroke="none" />
          <path d="M0 58 C20 40, 40 50, 60 32 S100 18, 120 28" fill="none" stroke="currentColor" strokeOpacity="0.25" />
          <rect x="44" y="22" width="28" height="18" rx="2" {...stroke} />
          <rect x="72" y="27" width="4" height="8" rx="1" fill="currentColor" />
          <path {...stroke} d="M50 40l8-12 4 6 8-10" opacity="0.7" />
          <path {...stroke} d="M52 28l16 12M68 28L52 40" strokeWidth="1.4" />
        </svg>
      )
    case 'snow':
      return (
        <svg {...common}>
          <rect x="8" y="8" width="104" height="56" rx="4" fill="rgba(107,155,114,0.08)" stroke="none" />
          <path d="M20 50 L40 28 L60 46 L80 20 L100 42" fill="none" stroke="currentColor" strokeOpacity="0.3" />
          <path {...stroke} d="M60 54V34M60 34L48 22M60 34L72 22" />
          <circle cx="36" cy="18" r="1.5" fill="currentColor" opacity="0.5" />
          <circle cx="52" cy="14" r="1.2" fill="currentColor" opacity="0.45" />
          <circle cx="78" cy="16" r="1.4" fill="currentColor" opacity="0.5" />
          <circle cx="90" cy="24" r="1.1" fill="currentColor" opacity="0.4" />
        </svg>
      )
    case 'dry':
      return (
        <svg {...common}>
          <rect x="8" y="8" width="104" height="56" rx="4" fill="rgba(107,155,114,0.08)" stroke="none" />
          <ellipse cx="60" cy="44" rx="22" ry="8" {...stroke} opacity="0.45" />
          <path {...stroke} d="M48 44c4-14 20-14 24 0" opacity="0.35" />
          <path {...stroke} d="M60 22v10M55 27h10" />
          <circle cx="60" cy="18" r="5" {...stroke} />
          <path {...stroke} d="M54 18h12" strokeDasharray="2 2" />
        </svg>
      )
    case 'night':
      return (
        <svg {...common}>
          <rect x="8" y="8" width="104" height="56" rx="4" fill="rgba(20,40,31,0.35)" stroke="none" />
          <path d="M16 54 L36 34 L52 48 L72 22 L104 50" fill="none" stroke="currentColor" strokeOpacity="0.35" />
          <circle cx="92" cy="20" r="6" fill="currentColor" opacity="0.55" />
          <path {...stroke} d="M40 50l8-6 6 4 10-12" stroke="#b8a07a" />
          <circle cx="40" cy="50" r="2.5" fill="#b8a07a" stroke="none" />
        </svg>
      )
    case 'gpx':
      return (
        <svg {...common}>
          <rect x="8" y="8" width="104" height="56" rx="4" fill="rgba(107,155,114,0.08)" stroke="none" />
          <path d="M24 48 C36 36, 44 40, 56 28 S80 18, 96 30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3" />
          <path d="M24 44 C40 40, 48 28, 60 34 S84 42, 96 24" fill="none" stroke="#b8a07a" strokeWidth="1.8" />
          <circle cx="56" cy="32" r="3" fill="currentColor" stroke="none" />
          <path {...stroke} d="M52 28l8 8M64 28l-8 8" strokeWidth="1.3" opacity="0.7" />
        </svg>
      )
    case 'zerosignal':
      return (
        <svg {...common}>
          <rect x="8" y="8" width="104" height="56" rx="4" fill="rgba(107,155,114,0.08)" stroke="none" />
          <path d="M10 50 C30 30, 50 44, 70 26 S100 18, 114 34" fill="none" stroke="currentColor" strokeOpacity="0.28" />
          <path {...stroke} d="M48 40c6-8 18-8 24 0M52 44c4-5 12-5 16 0" opacity="0.45" />
          <circle cx="60" cy="50" r="2" fill="currentColor" />
          <path {...stroke} d="M54 28l12 12M66 28L54 40" />
        </svg>
      )
    case 'blaze':
      return (
        <svg {...common}>
          <rect x="8" y="8" width="104" height="56" rx="4" fill="rgba(107,155,114,0.08)" stroke="none" />
          <rect x="28" y="16" width="10" height="40" rx="2" {...stroke} />
          <rect x="54" y="16" width="10" height="40" rx="2" {...stroke} />
          <rect x="80" y="16" width="10" height="40" rx="2" {...stroke} />
          <rect x="30" y="22" width="6" height="8" fill="#b8a07a" stroke="none" />
          <path d="M56 24h6M56 34h6" stroke="currentColor" strokeWidth="2" />
          <circle cx="85" cy="28" r="3" fill="currentColor" opacity="0.55" />
          <path {...stroke} d="M40 52h48" opacity="0.35" />
        </svg>
      )
  }
}

export function EmpathyIcon({
  name,
  className = '',
}: {
  name: 'says' | 'thinks' | 'does' | 'feels' | 'pains' | 'gains'
  className?: string
}) {
  const common = {
    className: `empathy-icon ${className}`.trim(),
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
  }

  switch (name) {
    case 'says':
      return (
        <svg {...common}>
          <path {...stroke} d="M5 7h10a3 3 0 013 3v3a3 3 0 01-3 3H10l-4 3v-3H5a3 3 0 01-3-3v-3a3 3 0 013-3z" />
        </svg>
      )
    case 'thinks':
      return (
        <svg {...common}>
          <circle cx="12" cy="10" r="5.5" {...stroke} />
          <path {...stroke} d="M9.5 18.5h5M10.5 21h3" />
        </svg>
      )
    case 'does':
      return (
        <svg {...common}>
          <path {...stroke} d="M12 4v10" />
          <path {...stroke} d="M8 10l4 4 4-4" />
          <path {...stroke} d="M5 20h14" />
        </svg>
      )
    case 'feels':
      return (
        <svg {...common}>
          <path
            {...stroke}
            d="M12 20s-6.5-4.2-6.5-9A3.5 3.5 0 0112 8.2 3.5 3.5 0 0118.5 11c0 4.8-6.5 9-6.5 9z"
          />
        </svg>
      )
    case 'pains':
      return (
        <svg {...common}>
          <path {...stroke} d="M12 4v4M12 16v4M4 12h4M16 12h4" />
          <path {...stroke} d="M7.5 7.5l2.5 2.5M14 14l2.5 2.5M16.5 7.5L14 10M10 14l-2.5 2.5" />
        </svg>
      )
    case 'gains':
      return (
        <svg {...common}>
          <path {...stroke} d="M5 16l4-5 3 3 5-7" />
          <path {...stroke} d="M14 7h4v4" />
        </svg>
      )
  }
}

export function JourneyEmotionCurve({
  scores,
  labels = [],
  className = '',
}: {
  scores: number[]
  labels?: string[]
  className?: string
}) {
  const w = 720
  const h = labels.length ? 108 : 72
  const padX = 36
  const padY = 16
  const chartH = labels.length ? 68 : h
  const n = scores.length
  const pts = scores.map((s, i) => {
    const x = padX + (i * (w - padX * 2)) / Math.max(n - 1, 1)
    const y = padY + (1 - s) * (chartH - padY * 2)
    return { x, y, s }
  })

  const d =
    pts.length < 2
      ? ''
      : pts
          .map((p, i) => {
            if (i === 0) return `M${p.x.toFixed(1)} ${p.y.toFixed(1)}`
            const prev = pts[i - 1]
            const cx = ((prev.x + p.x) / 2).toFixed(1)
            return `C${cx} ${prev.y.toFixed(1)}, ${cx} ${p.y.toFixed(1)}, ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
          })
          .join(' ')

  const area = `${d} L${pts[pts.length - 1]?.x ?? padX} ${chartH - padY} L${padX} ${chartH - padY} Z`

  return (
    <svg
      className={`journey-curve ${className}`.trim()}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      role="img"
      aria-label="Emotion curve across journey stages"
    >
      <path d={area} fill="currentColor" fillOpacity="0.1" />
      <path
        d={`M${padX} ${chartH - padY} H${w - padX}`}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <path
        className="journey-curve__path"
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {pts.map((p, i) => (
        <g key={i} className="journey-curve__mark">
          <circle
            className="journey-curve__dot"
            cx={p.x}
            cy={p.y}
            r="5.5"
            fill="currentColor"
            stroke="rgba(20, 40, 31, 0.85)"
            strokeWidth="2"
          />
          {labels[i] ? (
            <text
              x={p.x}
              y={h - 8}
              textAnchor="middle"
              className="journey-curve__label"
            >
              {labels[i]}
            </text>
          ) : null}
        </g>
      ))}
    </svg>
  )
}

export function TopoStrip({ className = '' }: IconProps) {
  return (
    <svg className={`topo-strip ${className}`.trim()} viewBox="0 0 800 48" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 30 C80 18, 140 38, 220 24 S360 8, 440 22 S600 40, 800 16" fill="none" stroke="currentColor" strokeOpacity="0.28" />
      <path d="M0 38 C100 28, 180 44, 280 32 S460 14, 560 28 S700 42, 800 26" fill="none" stroke="currentColor" strokeOpacity="0.18" />
    </svg>
  )
}
