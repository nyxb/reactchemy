import { useStickyState } from '../..'

export default function Component() {
   const [count, setCount] = useStickyState(0, 'count')

   const increment = () => {
      setCount((prevCount: number) => prevCount + 1)
   }

   return (
       <div>
          <h2>useStickyState Demo</h2>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
       </div>
   )
}
