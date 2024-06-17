import { cloneDeep } from '@Src/convert-types'
import { describe, expect, it } from 'vitest'

describe('cloneDeep function', () => {
  it('should create a deep clone of a simple object', () => {
    const obj = { a: 1, b: 2 }
    const clone = cloneDeep(obj)
    expect(clone).toEqual(obj)
    expect(clone).not.toBe(obj)
  })

  it('should create a deep clone of a nested object', () => {
    const obj = { a: 1, b: { c: 2 } }
    const clone = cloneDeep(obj)
    expect(clone).toEqual(obj)
    expect(clone).not.toBe(obj)
    expect(clone.b).not.toBe(obj.b)
  })

  it('should create a deep clone of an array', () => {
    const arr = [1, 2, { a: 3 }]
    const clone = cloneDeep(arr)
    expect(clone).toEqual(arr)
    expect(clone).not.toBe(arr)
    expect(clone[2]).not.toBe(arr[2])
  })

  it('should handle null and undefined', () => {
    expect(cloneDeep(null)).toBeNull()
  })
})
