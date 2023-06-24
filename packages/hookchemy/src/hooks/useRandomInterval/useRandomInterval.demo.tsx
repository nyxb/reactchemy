import { useCallback } from 'react'
import consolji from 'consolji'
import { useRandomInterval } from '../..'

export default function Component() {
   const callback = useCallback(() => {
      consolji.log('Interval callback executed')
   }, [])

   // Example of use: Starts the interval with a delay between 1000 and 2000 ms.
   useRandomInterval(callback, 1000, 2000)

   return (
      <div>
        <h2>useRandomInterval Demo</h2>
        <p>Check the Developer Tools console for the output history of the interval.</p>
      </div>
   )
}
