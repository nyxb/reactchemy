import { useEffect, useState } from 'react'
import consolji from 'consolji'

import { useEffectOnce } from '../../'

export default function Component() {
   const [data, setData] = useState<number>(0)
   useEffect(() => {
      consolji.log('Normal useEffect', { data })
   }, [data])

   useEffectOnce(() => {
      consolji.log('Triggered only once, on mount', { data })
   })

   return (
    <div>
      <p>Open your console</p>
      <button onClick={() => setData(Date.now())}>Update data</button>
    </div>
   )
}
