import { arraylable } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('arraylable function', () => {
  it('should return the same array if the value is an array', () => {
    const arr = [1, 2, 3]
    const result = arraylable(arr)
    expect(result).toBe(arr)
  })

  it('should return an empty array if the value is null', () => {
    const result = arraylable(null)
    expect(result).toEqual([])
  })

  it('should return an empty array if the value is not an array', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = arraylable(42)
    expect(result).toEqual([])
  })
})
