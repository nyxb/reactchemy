import { VisuallyHidden } from './visuallyHidden'

describe('Visually Hidden()', () => {
test('should Visually Hidden be ok', () => {
const { result } = renderHook(() => VisuallyHidden())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => VisuallyHidden())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
