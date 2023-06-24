import { InPortal } from './inPortal'

describe('InPortal()', () => {
test('should InPortal be ok', () => {
const { result } = renderHook(() => InPortal())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => InPortal())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
