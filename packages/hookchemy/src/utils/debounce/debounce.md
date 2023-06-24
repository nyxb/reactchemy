The `debounce` function is a utility that creates a new function, that when invoked, delays the execution of the `callback` function until after a certain number of milliseconds (`wait`) have passed since the last time it was invoked.

Parameters

- `callback: (...args: any[]) => void` - The function to be executed after the `wait` time has passed since its last invocation.
- `wait: number` - The number of milliseconds to delay the execution of the `callback` function.

Returns

- `(...args: any[]) => void` - A new function that delays the execution of the `callback` function.
