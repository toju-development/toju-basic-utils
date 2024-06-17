import { throttle } from '@Src/timing'
import { describe, expect, it, vi } from 'vitest'

describe('throttle function', () => {
  vi.useFakeTimers()

  it('should call the function immediately', async () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 200)

    throttledFn()
    throttledFn()
    throttledFn()

    expect(mockFn).toHaveBeenCalledOnce()

    vi.advanceTimersByTime(300)

    throttledFn()
    throttledFn()

    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})
