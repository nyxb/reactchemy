Quickly know where your code will be executed;

- In the server (Server-Side-Rendering) or
- In the client, the navigator

This hook doesn't cause an extra render, it just returns the value directly, at the mount time, and it didn't re-trigger if the value changes.

Otherwise, If you want to be notified when the value changes to react to it, you can use [`useIsClient()`]() instead.
