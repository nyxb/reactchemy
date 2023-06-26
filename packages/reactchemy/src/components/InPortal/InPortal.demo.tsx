import type { ReactElement, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface InPortalProps {
   id: string
   children: ReactNode
}

export function InPortal({ id, children }: InPortalProps): ReactElement | null {
   const [hasMounted, setHasMounted] = useState(false)
   useEffect(() => {
      setHasMounted(true)
   }, [])
   if (!hasMounted)
      return null

   const element = document.querySelector(`#${id}`)

   if (!element)
      throw new Error(`No element with id "${id}" found in the document`)

   return ReactDOM.createPortal(
      children,
      element,
   )
}
