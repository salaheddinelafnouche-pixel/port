import { useState } from 'react'
import { HappyPathChips } from './components/HappyPathChips'
import { PhoneShell } from './components/PhoneShell'
import { DayPlan } from './screens/DayPlan'
import { Elevation } from './screens/Elevation'
import { HomeSearch } from './screens/HomeSearch'
import { ModeSwitcher } from './screens/ModeSwitcher'
import { MultiDayCorridor } from './screens/MultiDayCorridor'
import { OfflinePack } from './screens/OfflinePack'
import { SafetyShare } from './screens/SafetyShare'
import { TrailFirstMap } from './screens/TrailFirstMap'
import type { ScreenId } from './types'
import './styles/app.css'

const labels: Record<ScreenId, string> = {
  home: '01 Home Search',
  modes: '02 Mode Switcher',
  map: '03 Trail-first Map',
  corridor: '04 Multi-day Corridor',
  'day-plan': '05 Day Plan',
  elevation: '06 Elevation',
  offline: '07 Offline Pack',
  safety: '08 Safety Share',
}

export default function App() {
  const [screen, setScreen] = useState<ScreenId>('home')

  const view = (() => {
    switch (screen) {
      case 'home':
        return <HomeSearch onNavigate={setScreen} />
      case 'modes':
        return <ModeSwitcher onNavigate={setScreen} />
      case 'map':
        return <TrailFirstMap onNavigate={setScreen} />
      case 'corridor':
        return <MultiDayCorridor onNavigate={setScreen} />
      case 'day-plan':
        return <DayPlan onNavigate={setScreen} />
      case 'elevation':
        return <Elevation onNavigate={setScreen} />
      case 'offline':
        return <OfflinePack onNavigate={setScreen} />
      case 'safety':
        return <SafetyShare onNavigate={setScreen} />
    }
  })()

  return (
    <div className="stage">
      <p className="stage__label">{labels[screen]} · Sierra Crest demo</p>
      <HappyPathChips current={screen} onJump={setScreen} />
      <PhoneShell>{view}</PhoneShell>
    </div>
  )
}
