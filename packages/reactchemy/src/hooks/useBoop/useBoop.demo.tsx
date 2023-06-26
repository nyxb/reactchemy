import type { MouseEvent, ReactNode } from 'react'
import { animated } from 'react-spring'

import { useBoop } from '../..'


interface Props {
   children: ReactNode
   [key: string]: any
}

export default function Component({ children, ...boopConfig }: Props) {
   const [style, trigger] = useBoop(boopConfig) as [any, () => void]

   const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      trigger()
   }

   return (
    <animated.span style={style} onMouseEnter={handleMouseEvent}>
      {children}
    </animated.span>
   )
}
