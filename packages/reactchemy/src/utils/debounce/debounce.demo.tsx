import { debounce } from '../..'

export default function Component() {
const [two] = debounce()

return <div>Hello {two}</div>
}
