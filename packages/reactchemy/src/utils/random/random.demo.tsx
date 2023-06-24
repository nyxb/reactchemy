import { random } from '../..'

export default function Component() {
const [two] = random()

return <div>Hello {two}</div>
}
