useRetryUntilResolved takes a callback. We can perform whatever check we need, to see if “the event” has happened. In the case of waiting for a third-party library, you can check for modifications to the window object. Really, though, you can use this hook for any sort of polling task.

If we return false, the function will be retried. The default interval is 100ms, so it will try this function 10 times per second.

When we return a truthy value, we signal that the condition has been satisfied. The loop will be stopped, and a bit of internal React state will be toggled to true.
