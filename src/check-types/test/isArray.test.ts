import { isArray } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('isArray function', () => {
  it('should return true for an array', () => {
    expect(isArray([1, 2, 3])).toBe(true)
  })

  it('should return false for an object', () => {
    expect(isArray({ a: 1 })).toBe(false)
  })

  it('should return false for a string', () => {
    expect(isArray('abc')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isArray(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isArray(true)).toBe(false)
    expect(isArray(false)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isArray(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isArray(undefined)).toBe(false)
  })
})
