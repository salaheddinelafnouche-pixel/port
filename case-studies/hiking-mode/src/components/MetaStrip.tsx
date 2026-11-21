import { meta } from '../content'
import { Reveal } from './Reveal'

export function MetaStrip() {
  const items = [
    { label: 'Role', value: meta.role },
    { label: 'Timeline', value: meta.timeline },
    { label: 'Methods', value: meta.methods },
    { label: 'Tools', value: meta.tools },
  ]

  return (
    <section className="meta" aria-label="Project meta">
      <div className="meta__inner">
        {items.map((item, i) => (
          <Reveal key={item.label} className="meta__item" delay={i * 60}>
            <span className="meta__label">{item.label}</span>
            <span className="meta__value">{item.value}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
