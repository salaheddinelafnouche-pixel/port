import type { ScreenId } from '../types'

type HappyPathChipsProps = {
  current: ScreenId
  onJump: (screen: ScreenId) => void
}

const jumps: { id: 'H1' | 'H2' | 'H3'; screen: ScreenId; activeOn: ScreenId[] }[] =
  [
    { id: 'H1', screen: 'offline', activeOn: ['offline', 'corridor', 'day-plan'] },
    { id: 'H2', screen: 'map', activeOn: ['map', 'elevation'] },
    { id: 'H3', screen: 'safety', activeOn: ['safety'] },
  ]

export function HappyPathChips({ current, onJump }: HappyPathChipsProps) {
  return (
    <div className="stage__chips" aria-label="Happy path jumps">
      {jumps.map((jump) => (
        <button
          key={jump.id}
          type="button"
          className={`hp-chip${jump.activeOn.includes(current) ? ' is-active' : ''}`}
          onClick={() => onJump(jump.screen)}
        >
          {jump.id}
        </button>
      ))}
    </div>
  )
}
