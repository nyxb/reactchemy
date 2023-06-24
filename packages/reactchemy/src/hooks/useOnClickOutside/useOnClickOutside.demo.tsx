import { useRef } from 'react'
import consolji from 'consolji'

import { useOnClickOutside } from '../..'

export default function Component() {
   const ref = useRef(null)

   const handleClickOutside = () => {
      // Your custom logic here
      consolji.log('clicked outside')
   }

   const handleClickInside = () => {
      // Your custom logic here
      consolji.log('clicked inside')
   }

   useOnClickOutside(ref, handleClickOutside)

   return (
    <button
      ref={ref}
      onClick={handleClickInside}
      style={{ width: 200, height: 200, background: 'cyan' }}
    />
   )
}
