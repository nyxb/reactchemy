import { useEffect, useState } from 'react'
import consolji from 'consolji'

import { useUpdateEffect } from '../../'

export default function Component() {
   const [data, setData] = useState<number>(0)
   useEffect(() => {
      consolji.log('Normal useEffect', { data })
   }, [data])

   useUpdateEffect(() => {
      consolji.log('Update useEffect only', { data })
   }, [data])

   return (
    <div>
      <p>Open your console</p>
      <button onClick={() => setData(Date.now())}>Update data</button>
    </div>
   )
}
