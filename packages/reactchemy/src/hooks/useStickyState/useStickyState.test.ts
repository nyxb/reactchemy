import { act, renderHook } from '@testing-library/react-hooks/dom'
import { useStickyState } from './useStickyState'

describe('use StickyState()', () => {
test('should use StickyState be ok', () => {
const { result } = renderHook(() => useStickyState())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => useStickyState())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
