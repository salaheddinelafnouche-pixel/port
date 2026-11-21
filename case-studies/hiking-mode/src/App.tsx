import { Direction } from './components/Direction'
import { HappyPath } from './components/HappyPath'
import { Hero } from './components/Hero'
import { Ideation } from './components/Ideation'
import { MetaStrip } from './components/MetaStrip'
import { Nav } from './components/Nav'
import { Problem } from './components/Problem'
import { Research } from './components/Research'
import { Solution } from './components/Solution'
import { Learnings } from './components/Learnings'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#problem">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <MetaStrip />
        <Problem />
        <Research />
        <Direction />
        <Ideation />
        <HappyPath />
        <Solution />
        <Learnings />
      </main>
    </>
  )
}
