import { ClientOnly } from './clientOnly'

describe('client only()', () => {
test('should client only be ok', () => {
const { result } = renderHook(() => ClientOnly())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => ClientOnly())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
