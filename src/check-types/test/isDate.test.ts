import { isDate } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('isDate function', () => {
  it('should return true for a Date object', () => {
    expect(isDate(new Date())).toBe(true)
  })

  it('should return false for a string representation of a date', () => {
    expect(isDate('2022-01-01')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isDate(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isDate(true)).toBe(false)
    expect(isDate(false)).toBe(false)
  })

  it('should return false for an array', () => {
    expect(isDate([1, 2, 3])).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isDate({ a: 1 })).toBe(false)
  })

  it('should return false for null', () => {
    expect(isDate(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isDate(undefined)).toBe(false)
  })
})
