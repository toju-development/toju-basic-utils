import { toArray } from '@Src/convert-types'
import { describe, expect, it } from 'vitest'

describe('toArray function', () => {
  it('should return the same array if the value is an array', () => {
    const arr = [1, 2, 3]
    const result = toArray(arr)
    expect(result).toBe(arr)
  })

  it('should convert a string to an array of characters', () => {
    const str = 'abc'
    const result = toArray(str)
    expect(result).toEqual(['a', 'b', 'c'])
  })

  it('should convert a plain object to an array of its values', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result = toArray(obj)
    expect(result).toEqual([1, 2, 3])
  })

  it('should convert a non-null, non-undefined value to an array containing that value', () => {
    const value = 42
    const result = toArray(value)
    expect(result).toEqual([42])
  })

  it('should return an empty array if the value is null or undefined', () => {
    expect(toArray(null)).toEqual([])
    expect(toArray(undefined)).toEqual([])
  })
})
