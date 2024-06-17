import { sleep } from '@Src/timing'
import { describe, expect, it } from 'vitest'

describe('sleep function', () => {
  it('should pause execution for specified time', async () => {
    const before = Date.now()
    await sleep(1000) // sleep for 1 second
    const after = Date.now()

    // Check if the difference in time is approximately 1 second
    // Use toBeGreaterThanOrEqual and toBeLessThan to account for slight variations in timing
    expect(after - before).toBeGreaterThanOrEqual(1000)
    expect(after - before).toBeLessThan(1010)
  })
})
