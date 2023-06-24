The `ClientOnly` component is a React component that ensures its children are only rendered on the client-side. This is particularly useful for parts of your application that rely on `window`, `document`, or other browser-specific APIs, which would otherwise cause errors during server-side rendering.

Props

- `children: ReactNode` - Any valid React child or children. This will be what's rendered on the client-side.
- `...delegated` - Any additional properties passed to the `ClientOnly` component will be spread onto the containing `div`.
