import consolji from 'consolji'
import { useIsomorphicLayoutEffect } from '../../'

export default function Component() {
   useIsomorphicLayoutEffect(() => {
      consolji.log(
         'In the browser, I\'m an `useLayoutEffect`, but in SSR, I\'m an `useEffect`.',
      )
   }, [])

   return <p>Hello, world</p>
}
