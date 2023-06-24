import { usePrefersReducedMotion } from '../..'

export default function Component() {
   const prefersReducedMotion = usePrefersReducedMotion()

   return (
     <div>
       <h2>Prefers Reduced Motion Demo</h2>
       {prefersReducedMotion
          ? (
         <p>Reduced motion is preferred.</p>
             )
          : (
         <p>Reduced motion is not preferred.</p>
             )}
     </div>
   )
}
