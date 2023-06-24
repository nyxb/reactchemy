import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

interface Props {
   children: ReactNode
   [x: string]: any
}

export function ClientOnly({ children, ...delegated }: Props) {
   const [hasMounted, setHasMounted] = useState(false)
   useEffect(() => {
      setHasMounted(true)
   }, [])
   if (!hasMounted)
      return null

   return (
      <div {...delegated}>
         {children}
      </div>
   )
}
