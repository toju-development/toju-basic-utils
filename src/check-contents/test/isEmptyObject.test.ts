import { isEmptyObject } from '@Src/check-contents'
import { describe, expect, it } from 'vitest'

describe('isEmptyObject function', () => {
  it('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true)
  })

  it('should return false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false)
  })

  it('should return false for a string', () => {
    expect(isEmptyObject('abc')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isEmptyObject(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isEmptyObject(true)).toBe(false)
    expect(isEmptyObject(false)).toBe(false)
  })

  it('should return false for an array', () => {
    expect(isEmptyObject([1, 2, 3])).toBe(false)
  })

  it('should return false for null', () => {
    expect(isEmptyObject(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isEmptyObject(undefined)).toBe(false)
  })
})
