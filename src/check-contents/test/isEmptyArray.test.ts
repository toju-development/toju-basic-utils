import { isEmptyArray } from '@Src/check-contents'
import { describe, expect, it } from 'vitest'

describe('isEmptyArray function', () => {
  it('should return true for an empty array', () => {
    expect(isEmptyArray([])).toBe(true)
  })

  it('should return false for a non-empty array', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false)
  })

  it('should return false for a string', () => {
    expect(isEmptyArray('abc')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isEmptyArray(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isEmptyArray(true)).toBe(false)
    expect(isEmptyArray(false)).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isEmptyArray({ a: 1 })).toBe(false)
  })

  it('should return false for null', () => {
    expect(isEmptyArray(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isEmptyArray(undefined)).toBe(false)
  })
})
