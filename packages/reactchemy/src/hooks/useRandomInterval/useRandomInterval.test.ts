import { act, renderHook } from '@testing-library/react-hooks/dom'
import { useRandomInterval } from './useRandomInterval'

describe('use RandomInterval()', () => {
test('should use RandomInterval be ok', () => {
const { result } = renderHook(() => useRandomInterval())
const [value, method] = result.current

expect(value).toBe(2)
expect(typeof method).toBe('function')
})

test('should method returns 2', () => {
const { result } = renderHook(() => useRandomInterval())
const [, method] = result.current

let value = 0

act(() => { value = method() })

expect(value).toBe(2)
})
})
