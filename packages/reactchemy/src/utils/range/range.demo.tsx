import { range } from '../..'

export default function Component() {
   const numbers = range(1, 10, 2)
   // numbers enthält [1, 3, 5, 7, 9]

   return (
     <div>
       <h1>Numbers:</h1>
       <ul>
         {numbers.map(number => (
           <li key={number}>{number}</li>
         ))}
       </ul>
     </div>
   )
}
