import { act, renderHook } from '@testing-library/react-hooks/dom'
import { useRetryUntilResolved } from './useRetryUntilResolved'

describe('use RetryUntilResolved()', () => {
test('should use RetryUntilResolved be ok', () => {
const { result } = renderHook(() => useRetryUntilResolved())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => useRetryUntilResolved())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
