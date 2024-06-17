import { type AnyFunction } from '@Src/types'

export function throttle<T extends AnyFunction> (fn: T, delay: number): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let timeOutId: NodeJS.Timeout | undefined

  return function thottledFn (...args: Parameters<T>): ReturnType<T> | undefined {
    if (timeOutId !== undefined) {
      return
    }

    timeOutId = setTimeout(() => {
      timeOutId = undefined
    }, delay)

    return fn(...args) as ReturnType<T>
  }
}
