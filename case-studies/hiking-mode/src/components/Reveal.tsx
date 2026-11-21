import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'li' | 'nav'
  delay?: number
  id?: string
  'aria-label'?: string
}

export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  id,
  'aria-label': ariaLabel,
}: RevealProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref as never}
      id={id}
      aria-label={ariaLabel}
      className={`reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
