Function: range

The `range` function generates an array of numbers, starting from a given start value, and ending just before a given end value, incrementing by a specified step.

Parameters:

- `start`: The number from which the array starts. If `end` is not provided, `start` behaves as `end` and the sequence starts from zero.

- `end`: The number before which the array ends (exclusive).

- `step` (optional): The increment step between the numbers in the array. Default value is `1`.

Returns:

- An array of numbers starting from `start` (or `0` if `start` is used as `end`), up to, but not including, `end`, incrementing by `step`.
