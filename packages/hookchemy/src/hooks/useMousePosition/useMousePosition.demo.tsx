import { useMousePosition } from '../../'

export default function Component() {
   const mousePosition = useMousePosition()

   return (
    <div>
      <h2>Mouse Position</h2>
      <p>The current mouse position is ({mousePosition.x}, {mousePosition.y})</p>
    </div>
   )
}
