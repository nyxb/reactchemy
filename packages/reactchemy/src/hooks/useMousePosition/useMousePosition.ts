import { useEffect, useState } from 'react'

export interface MouseEvent {
   clientX: number
   clientY: number
}

export interface MousePosition {
   x: number | null
   y: number | null
}

export function useMousePosition() {
   const [
      mousePosition,
      setMousePosition,
   ] = useState<MousePosition>({ x: null, y: null })
   useEffect(() => {
      const updateMousePosition = (ev: MouseEvent) => {
         setMousePosition({ x: ev.clientX, y: ev.clientY })
      }
      window.addEventListener('mousemove', updateMousePosition)
      return () => {
         window.removeEventListener('mousemove', updateMousePosition)
      }
   }, [])
   return mousePosition
}
export default useMousePosition
