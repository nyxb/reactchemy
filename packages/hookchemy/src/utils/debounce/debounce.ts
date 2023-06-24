export function debounce(callback: (...args: any[]) => void, wait: number): (...args: any[]) => void {
   let timeoutId: number | null = null
   return (...args: any[]): void => {
      if (timeoutId !== null)
         window.clearTimeout(timeoutId)

      timeoutId = window.setTimeout(() => {
         callback.apply(null, args)
      }, wait)
   }
}
