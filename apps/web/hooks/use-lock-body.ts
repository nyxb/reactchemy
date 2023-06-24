import * as React from 'react'

// @see https://reactchemy.nyxb.zip/useLockBodyScroll.
export function useLockBody() {
   React.useLayoutEffect((): (() => void) => {
      const originalStyle: string = window.getComputedStyle(
         document.body,
      ).overflow
      document.body.style.overflow = 'hidden'
      return () => (document.body.style.overflow = originalStyle)
   }, [])
}
