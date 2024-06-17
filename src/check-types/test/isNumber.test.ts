import { isNumber } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('isNumber function', () => {
  it('should return true for a number', () => {
    expect(isNumber(123)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(-123)).toBe(true)
  })

  it('should return false for NaN', () => {
    expect(isNumber(NaN)).toBe(false)
  })

  it('should return false for a string', () => {
    expect(isNumber('123')).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
  })

  it('should return false for an array', () => {
    expect(isNumber([1, 2, 3])).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isNumber({ a: 1 })).toBe(false)
  })

  it('should return false for null', () => {
    expect(isNumber(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isNumber(undefined)).toBe(false)
  })
})
