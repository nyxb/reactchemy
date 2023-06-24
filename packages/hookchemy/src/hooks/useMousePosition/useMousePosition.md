Tracks the position of the mouse cursor on the screen. This hook can be useful for creating interactive UI elements that respond to mouse movements.

The hook returns an object with the `x` and `y` coordinates of the mouse cursor. These values get updated every time the mouse moves.

**Side notes:**

- Note that this hook adds an event listener to the `window` object. If the `window` object is not present (such as in SSR), `useMousePosition()` will return `null` for the `x` and `y` values.
- Don't forget to remove the hook on cleanup to avoid performance issues.
- That said, you do still need to be a bit careful where you use this hook. It shouldn't be used in a top-level component like App or Homepage, since that will cause a huge chunk of your React tree to re-render very often. Use this hook in the small “leaf node” components near the bottom of the tree.

Related hooks:

- [`useEventListener()`](/react-hook/use-event-listener)
