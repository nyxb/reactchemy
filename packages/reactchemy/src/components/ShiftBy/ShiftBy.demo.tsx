import type { ReactNode } from 'react'

interface ShiftByProps {
   x?: number
   y?: number
   children: ReactNode
}

export function ShiftBy({ x = 0, y = 0, children }: ShiftByProps) {
   return (
      <div
         style={{
            transform: `translate(${x}px, ${y}px)`,
         }}
      >
         {children}
      </div>
   )
}
