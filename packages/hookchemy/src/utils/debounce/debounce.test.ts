import { debounce } from './debounce'

describe('debounce()', () => {
test('should debounce be ok', () => {
const { result } = renderHook(() => debounce())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => debounce())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
