import type { ReactNode } from 'react'

type PhoneShellProps = {
  children: ReactNode
}

export function PhoneShell({ children }: PhoneShellProps) {
  return (
    <div className="phone">
      <div className="phone__bezel">
        <div className="phone__notch" aria-hidden="true" />
        {children}
      </div>
    </div>
  )
}
