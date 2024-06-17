import { uniqueArray } from '@Src/convert-types'
import { describe, expect, it } from 'vitest'

describe('uniqueArray function', () => {
  it('should remove duplicate values from an array', () => {
    const arr = [1, 2, 2, 3, 3, 3]
    const result = uniqueArray(arr)
    expect(result).toEqual([1, 2, 3])
  })

  it('should return the same array if there are no duplicates', () => {
    const arr = [1, 2, 3]
    const result = uniqueArray(arr)
    expect(result).toEqual([1, 2, 3])
  })

  it('should return an empty array if the input is an empty array', () => {
    const arr: number[] = []
    const result = uniqueArray(arr)
    expect(result).toEqual([])
  })

  it('should handle arrays of strings', () => {
    const arr = ['a', 'b', 'b', 'c', 'c', 'c']
    const result = uniqueArray(arr)
    expect(result).toEqual(['a', 'b', 'c'])
  })

  it('should handle arrays of objects based on reference equality', () => {
    const obj = { a: 1 }
    const arr = [obj, obj, { a: 1 }]
    const result = uniqueArray(arr)
    expect(result).toEqual([obj, { a: 1 }])
  })
})
