type MapVariant = 'home' | 'modes' | 'fork' | 'corridor' | 'day' | 'elevation' | 'safety'

type MapCanvasProps = {
  variant: MapVariant
}

export function MapCanvas({ variant }: MapCanvasProps) {
  return (
    <svg className="map-svg" viewBox="0 0 360 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path
        d="M-20 340 Q80 280 180 320 T400 260"
        fill="none"
        stroke="#cfd5d8"
        strokeWidth="14"
      />
      <path
        d="M20 60 L90 140 L60 230 L140 290"
        fill="none"
        stroke="#d7dce0"
        strokeWidth="8"
      />

      {(variant === 'home' || variant === 'modes') && (
        <>
          <path
            d="M50 340 Q130 250 180 210 T320 120"
            fill="none"
            stroke="#34a853"
            strokeWidth="5"
          />
          <circle cx="180" cy="220" r="10" fill="#1a73e8" stroke="#fff" strokeWidth="3" />
          <circle cx="180" cy="220" r="22" fill="#1a73e8" opacity="0.15" />
        </>
      )}

      {variant === 'fork' && (
        <>
          <path
            d="M0 360 Q100 300 190 330 T380 280"
            fill="none"
            stroke="#9aa0a6"
            strokeWidth="10"
            opacity="0.45"
          />
          <path
            d="M140 250 Q80 170 40 90"
            fill="none"
            stroke="#80868b"
            strokeWidth="3"
          />
          <path
            d="M60 370 Q120 280 140 250 T210 150"
            fill="none"
            stroke="#80868b"
            strokeWidth="3"
            strokeDasharray="5 5"
            opacity="0.65"
          />
          <path
            d="M140 250 Q210 180 280 90"
            fill="none"
            stroke="#34a853"
            strokeWidth="6"
          />
          <circle cx="140" cy="250" r="10" fill="#fff" stroke="#34a853" strokeWidth="3" />
          <text x="156" y="236" className="map-label map-label--rec" fill="#137333" fontSize="11" fontWeight="700" fontFamily="Roboto, sans-serif">
            Recommended
          </text>
          <circle cx="170" cy="290" r="9" fill="#1a73e8" stroke="#fff" strokeWidth="2.5" />
          <circle cx="220" cy="190" r="5" fill="#1a73e8" />
          <text x="228" y="194" fill="#174ea6" fontSize="10" fontFamily="Roboto, sans-serif">
            water
          </text>
          <circle cx="168" cy="272" r="5" fill="#795548" />
          <text x="176" y="276" fill="#5d4037" fontSize="10" fontFamily="Roboto, sans-serif">
            camp
          </text>
          <circle cx="270" cy="120" r="5" fill="#d93025" />
          <text x="278" y="124" fill="#c5221f" fontSize="10" fontFamily="Roboto, sans-serif">
            exit
          </text>
        </>
      )}

      {variant === 'corridor' && (
        <>
          <path
            d="M30 300 Q110 220 180 180 T320 90"
            fill="none"
            stroke="#34a853"
            strokeWidth="5"
          />
          <circle cx="60" cy="280" r="5" fill="#fff" stroke="#34a853" strokeWidth="2" />
          <circle cx="170" cy="185" r="5" fill="#fff" stroke="#34a853" strokeWidth="2" />
          <circle cx="250" cy="130" r="5" fill="#fff" stroke="#34a853" strokeWidth="2" />
          <circle cx="310" cy="100" r="7" fill="#1a73e8" stroke="#fff" strokeWidth="2" />
        </>
      )}

      {variant === 'day' && (
        <>
          <path
            d="M40 260 Q120 180 200 150 T330 110"
            fill="none"
            stroke="#34a853"
            strokeWidth="4"
          />
          <circle cx="150" cy="190" r="8" fill="#1a73e8" stroke="#fff" strokeWidth="2" />
        </>
      )}

      {variant === 'elevation' && (
        <>
          <path
            d="M45 310 Q120 230 170 180 T260 110"
            fill="none"
            stroke="#34a853"
            strokeWidth="5"
          />
          <circle cx="170" cy="200" r="9" fill="#fff" stroke="#34a853" strokeWidth="2.5" />
          <text x="184" y="186" fill="#137333" fontSize="10" fontWeight="600" fontFamily="Roboto, sans-serif">
            junction
          </text>
          <circle cx="120" cy="250" r="8" fill="#1a73e8" stroke="#fff" strokeWidth="2" />
        </>
      )}

      {variant === 'safety' && (
        <>
          <path
            d="M45 320 Q130 250 200 210 T320 150"
            fill="none"
            stroke="#34a853"
            strokeWidth="5"
          />
          <circle cx="160" cy="245" r="9" fill="#1a73e8" stroke="#fff" strokeWidth="2.5" />
          <circle cx="230" cy="190" r="5" fill="#1a73e8" />
          <text x="238" y="194" fill="#174ea6" fontSize="10" fontFamily="Roboto, sans-serif">
            water
          </text>
          <circle cx="275" cy="165" r="5" fill="#d93025" />
          <text x="283" y="169" fill="#c5221f" fontSize="10" fontFamily="Roboto, sans-serif">
            exit
          </text>
        </>
      )}
    </svg>
  )
}
