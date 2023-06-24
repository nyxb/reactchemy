The useHasMounted hook is used to determine whether a component has mounted or not in a React application. It provides a simple way to track the mounting state of a component.

Usage
The useHasMounted hook does not require any parameters. It returns a boolean value indicating whether the component has mounted or not.

**Note** that this hook is useful for telling if the app has mounted, not whether the app is mounted. Having an _isMounted is often considered an antipattern. In the cases where it is required (for example, when using not-cancellable promises), a ref works better than this hook.
