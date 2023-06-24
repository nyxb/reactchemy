import { useState } from 'react'
import { useInterval } from '../..'

export function useRetryUntilResolved<T>(callback: () => T, interval = 100) {
   const [hasResolved, setHasResolved] = useState(false)
   useInterval(
      () => {
         const result = callback()
         if (result)
            setHasResolved(true)
      },
      hasResolved ? null : interval,
   )
   return hasResolved
}
export default useRetryUntilResolved
