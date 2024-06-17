import { debounce, sleep } from '@Src/timing'
import { describe, expect, it, vi } from 'vitest'

describe('debounce function', () => {
  it('should call the function after the specified delay', async () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 1000) // debounce for 1 second

    debouncedFn()
    expect(mockFn).not.toHaveBeenCalled() // should not have been called yet

    // Wait for 1 second
    await sleep(1000)

    expect(mockFn).toHaveBeenCalled() // should have been called now
  })

  it('should only call the function once after multiple calls', async () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 1000) // debounce for 1 second

    debouncedFn()
    expect(mockFn).not.toHaveBeenCalled()
    await sleep(250)

    debouncedFn()
    expect(mockFn).not.toHaveBeenCalled()
    await sleep(250)

    debouncedFn()
    expect(mockFn).not.toHaveBeenCalled()
    await sleep(250)

    // Wait for 1 second
    await sleep(1000)

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should clear the timeout if the function is called again before the delay', async () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 500)

    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout')

    debouncedFn()
    expect(mockFn).not.toHaveBeenCalled()
    await sleep(250)

    debouncedFn()
    expect(mockFn).not.toHaveBeenCalled()
    await sleep(500)

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1)

    clearTimeoutSpy.mockRestore()
  })
})
