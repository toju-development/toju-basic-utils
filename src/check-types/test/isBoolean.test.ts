import { isBoolean } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('isBoolean function', () => {
  it('should return true for a boolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  it('should return false for an array', () => {
    expect(isBoolean([1, 2, 3])).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isBoolean({ a: 1 })).toBe(false)
  })

  it('should return false for a string', () => {
    expect(isBoolean('abc')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isBoolean(123)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isBoolean(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isBoolean(undefined)).toBe(false)
  })
})
