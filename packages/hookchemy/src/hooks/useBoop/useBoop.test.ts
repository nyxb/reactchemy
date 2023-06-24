import { act, renderHook } from '@testing-library/react-hooks/dom'
import { useBoop } from './useBoop'

describe('use Boop()', () => {
test('should use Boop be ok', () => {
const { result } = renderHook(() => useBoop())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => useBoop())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
