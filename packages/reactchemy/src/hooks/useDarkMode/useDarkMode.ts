import { useLocalStorage, useMediaQuery, useUpdateEffect } from '../..'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

interface UseDarkModeOutput {
   isDarkMode: boolean
   toggle: () => void
   enable: () => void
   disable: () => void
}

export function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
   const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
   const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
      'reactchemy-dark-mode',
      defaultValue ?? isDarkOS ?? false,
   )

   // Update darkMode if os prefers changes
   useUpdateEffect(() => {
      setDarkMode(isDarkOS)
   }, [isDarkOS])

   return {
      isDarkMode,
      toggle: () => setDarkMode(prev => !prev),
      enable: () => setDarkMode(true),
      disable: () => setDarkMode(false),
   }
}
