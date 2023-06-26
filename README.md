[![cover][cover-src]][cover-href]
[![npm version][npm-version-src]][npm-version-href] 
[![npm downloads][npm-downloads-src]][npm-downloads-href] 
[![bundle][bundle-src]][bundle-href] [![JSDocs][jsdocs-src]][jsdocs-href]
 [![Discord][discord-src]][discord-href]
[![License][license-src]][license-href]

<br />

<div align="center">
<h1>reactchemy</h1>

<div>🟣 The perfect fusion of React Hooks, Components and reusable Utils to optimize your project.</div>

<br />
  <pre>pnpm add <a href="https://www.npmjs.com/package/reactchemy">reactchemy</a></pre>
  <br />

<div align="center">
  <sub>Created by <a href="https://github.com/nyxb">Dennis ollhoff</a> 💚</sub>
</div>

</div>

<br />

## 📖 Summary

<!-- DATA:START -->

## 🎣 Hooks

- [`useBoolean()`](https://reactchemy/react-hook/use-boolean)
- [`useBoop()`](https://reactchemy/react-hook/use-boop)
- [`useClickAnyWhere()`](https://reactchemy/react-hook/use-click-any-where)
- [`useCopyToClipboard()`](https://reactchemy/react-hook/use-copy-to-clipboard)
- [`useCountdown()`](https://reactchemy/react-hook/use-countdown)
- [`useCounter()`](https://reactchemy/react-hook/use-counter)
- [`useDarkMode()`](https://reactchemy/react-hook/use-dark-mode)
- [`useDebounce()`](https://reactchemy/react-hook/use-debounce)
- [`useDocumentTitle()`](https://reactchemy/react-hook/use-document-title)
- [`useEffectOnce()`](https://reactchemy/react-hook/use-effect-once)
- [`useElementSize()`](https://reactchemy/react-hook/use-element-size)
- [`useEventListener()`](https://reactchemy/react-hook/use-event-listener)
- [`useFetch()`](https://reactchemy/react-hook/use-fetch)
- [`useHasMounted()`](https://reactchemy/react-hook/use-has-mounted)
- [`useHover()`](https://reactchemy/react-hook/use-hover)
- [`useImageOnLoad()`](https://reactchemy/react-hook/use-image-on-load)
- [`useIntersectionObserver()`](https://reactchemy/react-hook/use-intersection-observer)
- [`useInterval()`](https://reactchemy/react-hook/use-interval)
- [`useIsClient()`](https://reactchemy/react-hook/use-is-client)
- [`useIsFirstRender()`](https://reactchemy/react-hook/use-is-first-render)
- [`useIsMounted()`](https://reactchemy/react-hook/use-is-mounted)
- [`useIsomorphicLayoutEffect()`](https://reactchemy/react-hook/use-isomorphic-layout-effect)
- [`useLocalStorage()`](https://reactchemy/react-hook/use-local-storage)
- [`useLockedBody()`](https://reactchemy/react-hook/use-locked-body)
- [`useMap()`](https://reactchemy/react-hook/use-map)
- [`useMediaQuery()`](https://reactchemy/react-hook/use-media-query)
- [`useMousePosition()`](https://reactchemy/react-hook/use-mouse-position)
- [`useOnClickOutside()`](https://reactchemy/react-hook/use-on-click-outside)
- [`usePrefersReducedMotion()`](https://reactchemy/react-hook/use-prefers-reduced-motion)
- [`useRandomInterval()`](https://reactchemy/react-hook/use-random-interval)
- [`useReadLocalStorage()`](https://reactchemy/react-hook/use-read-local-storage)
- [`useRetryUntilResolved()`](https://reactchemy/react-hook/use-retry-until-resolved)
- [`useScreen()`](https://reactchemy/react-hook/use-screen)
- [`useScript()`](https://reactchemy/react-hook/use-script)
- [`useSessionStorage()`](https://reactchemy/react-hook/use-session-storage)
- [`useSsr()`](https://reactchemy/react-hook/use-ssr)
- [`useStep()`](https://reactchemy/react-hook/use-step)
- [`useStickyState()`](https://reactchemy/react-hook/use-sticky-state)
- [`useTernaryDarkMode()`](https://reactchemy/react-hook/use-ternary-dark-mode)
- [`useTimeout()`](https://reactchemy/react-hook/use-timeout)
- [`useToggle()`](https://reactchemy/react-hook/use-toggle)
- [`useUpdateEffect()`](https://reactchemy/react-hook/use-update-effect)
- [`useWindowSize()`](https://reactchemy/react-hook/use-window-size)

## 🧩 Components

- [`ClientOnly()`](https://reactchemy/react-component/-client-only)
- [`InPortal()`](https://reactchemy/react-component/-in-portal)
- [`ShiftBy()`](https://reactchemy/react-component/-shift-by)
- [`VisuallyHidden()`](https://reactchemy/react-component/-visually-hidden)

## 🛠️ Utils

- [`debounce()`](https://reactchemy/react-util/debounce)
- [`random()`](https://reactchemy/react-util/random)
- [`range()`](https://reactchemy/react-util/range)

<!-- DATA:END -->

## 🤝 How to Contribute

Thanks for wanting to contribute! It's more than welcome 🤗

### 🔄 Content changes

Most content changes (like fixing a typo) can be made without cloning the repository.
Simply locate the file you wish to change in the GitHub UI,
and click the little edit icon to make your change directly on the GitHub website.

If you need to make any other substantial changes, then follow the project setup steps below.

### 🍴 Fork to submit a Pull Request (PR)

Fork the repository, clone it and install.

```bash
git clone https://github.com/{your_username}/reactchemy.git
cd reactchemy
pnpm i
```

### 📝 Create or update a new data

```bash
# This command generates boilerplate for new component.
# Skip if updating an existed hook.
pnpm gen-component

# This command generates boilerplate for new hooks.
# Skip if updating an existed hook.
pnpm gen-hook

# This command generates boilerplate for new util.
# Skip if updating an existed hook.
pnpm gen-util

# start working
pnpm dev
# or
pnpm dev --filter=web # next dev

# Develop
pnpm build
pnpm lint
pnpm types-check
pnpm test
```

### ℹ️ How is a data structured?

```bash
📂 ./packages/reactchemy
├── 📂 src
│  ├── 📂 components
│  │  ├── 📂 ComponentName
│  │  │   │── 📄 ComponentName.demo.tsx # working demo
│  │  │   │── 📝 ComponentName.mdx # the documentation content
│  │  │   │── 🧪 ComponentName.test.ts # unit tests
│  │  │   └── 📄 ComponentName.tsx # the component
│  ├── 📂 hooks
│  │  ├── 📂 useHookName
│  │  │   │── 📄 hookName.demo.tsx # working demo
│  │  │   │── 📝 hookName.mdx # the documentation content
│  │  │   │── 🧪 hookName.test.ts # unit tests
│  │  │   └── 📄 hookName.ts # the hook
│  ├── 📂 utils
│  │  ├── 📂 util-name
│  │  │   │── 📄 util-name.demo.tsx # working demo
│  │  │   │── 📝 util-name.mdx # the documentation content
│  │  │   │── 🧪 util-name.test.ts # unit tests
│  │  │   └── 📄 util-name.ts # the util
 
...
```

When the `reactchemy` is compiled, only the necessary files are used.
The other files are copied in the documentation website.

**Note**: The demo is used different way:

- It's displayed on the website to illustrate how to use the hook.
- It's deployed as a CodeSandbox on build to let final users play with.

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification ([emoji key](https://allcontributors.org/docs/en/emoji-key)). Contributions of any kind welcome!

## 🚗 Roadmap

- [ ] Unit-test all hooks
- [ ] Unit-test all components
- [ ] Unit-test all utils
- [ ] Add more components
- [ ] Add more hooks
- [ ] Add more utils


## 📜 License

[MIT](./LICENSE) - Copyright (c) 2023 Dennis Ollhoff

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/reactchemy?style=flat&colorA=18181B&colorB=14F195
[npm-version-href]: https://npmjs.com/package/reactchemy
[npm-downloads-src]: https://img.shields.io/npm/dm/reactchemy?style=flat&colorA=18181B&colorB=14F195
[npm-downloads-href]: https://npmjs.com/package/reactchemy
[bundle-src]: https://img.shields.io/bundlephobia/minzip/reactchemy?style=flat&colorA=18181B&colorB=14F195
[bundle-href]: https://bundlephobia.com/result?p=reactchemy
[jsdocs-src]: https://img.shields.io/badge/jsDocs.io-reference-18181B?style=flat&colorA=18181B&colorB=14F195
[jsdocs-href]: https://www.jsdocs.io/package/reactchemy
[discord-src]: https://img.shields.io/badge/chat-discord-dicord?style=flat&colorA=18181B&colorB=14F195&logo=discord
 [discord-href]: https://www.chat.nyxb.zip
[license-src]: https://img.shields.io/github/license/nyxblabs/reactchemy.svg?style=flat&colorA=18181B&colorB=14F195
[license-href]: https://github.com/nyxblabs/reactchemy/blob/main/LICENSE

<!-- Cover -->
[cover-src]: https://raw.githubusercontent.com/nyxb/reactchemy/main/.github/assets/cover-github.png
[cover-href]: https://reactchemy.com
