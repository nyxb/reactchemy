import { act, renderHook } from '@testing-library/react-hooks/dom'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

describe('use PrefersReducedMotion()', () => {
test('should use PrefersReducedMotion be ok', () => {
const { result } = renderHook(() => usePrefersReducedMotion())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => usePrefersReducedMotion())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
