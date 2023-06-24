import { ShiftBy } from './shiftBy'

describe('ShiftBy()', () => {
test('should ShiftBy be ok', () => {
const { result } = renderHook(() => ShiftBy())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => ShiftBy())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
