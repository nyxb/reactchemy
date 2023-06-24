import { useHasMounted } from '../..'

export default function Component() {
   const hasMounted = useHasMounted()
   if (!hasMounted)
      return null

   return <div>Client only!</div>
}
