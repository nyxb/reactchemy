import { act, renderHook } from '@testing-library/react-hooks/dom'
import { useHasMounted } from './useHasMounted'

describe('use HasMounted()', () => {
test('should use HasMounted be ok', () => {
const { result } = renderHook(() => useHasMounted())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => useHasMounted())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
