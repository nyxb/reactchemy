import { useRetryUntilResolved } from '../..'

export default function Component() {
   const isResolved = useRetryUntilResolved(() =>
      typeof window.DataTransfer !== 'undefined',
   )
   return (
    <div>
      Third-party library status: {
        isResolved ? 'Loaded' : 'Not loaded'
      }
    </div>
   )
}
