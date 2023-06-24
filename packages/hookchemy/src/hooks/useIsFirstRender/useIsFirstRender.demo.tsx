import { useEffect, useState } from 'react'
import consolji from 'consolji'

import { useIsFirstRender } from '../../'

export default function Component() {
   const isFirst = useIsFirstRender()
   const [data, setData] = useState<number>(0)

   useEffect(() => {
      consolji.log('Normal useEffect', { data })
   }, [data])

   return (
    <div>
      <p>Open your console</p>
      <p>Is first render: {isFirst ? 'yes' : 'no'}</p>
      <button onClick={() => setData(Date.now())}>Update data</button>
    </div>
   )
}
