import { type AnyFunction } from '@Src/types'

export function debounce<T extends AnyFunction> (fn: T, delay: number): (...args: Parameters<T>) => void {
  let timeOutId: NodeJS.Timeout | undefined

  return function debouncedFn (...args: Parameters<T>): void {
    if (timeOutId !== undefined) {
      clearTimeout(timeOutId)
    }

    timeOutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
