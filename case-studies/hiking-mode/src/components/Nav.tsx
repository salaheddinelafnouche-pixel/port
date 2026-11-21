import { links } from '../content'

const sectionLinks = [
  { href: '#problem', label: 'Problem' },
  { href: '#research', label: 'Research' },
  { href: '#solution', label: 'Solution' },
  { href: '#learnings', label: 'Learnings' },
] as const

export function Nav() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <span className="nav__mark" aria-hidden="true" />
        Hiking Mode
      </a>
      <nav className="nav__links" aria-label="Case study">
        {sectionLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="nav__end">
        <details className="nav__menu">
          <summary className="nav__menu-summary">Sections</summary>
          <div className="nav__menu-panel" role="group" aria-label="Case study sections">
            {sectionLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </details>
        <a
          className="nav__cta"
          href={links.prototypeLocal}
          target="_top"
          title="Opens the Hi-Fi prototype — walk H1–H3 (Corridor, Fork, Recover)"
        >
          Open Prototype
        </a>
      </div>
    </header>
  )
}
