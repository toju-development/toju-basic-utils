import { isEmptyString } from '@Src/check-contents'
import { describe, expect, it } from 'vitest'

describe('isEmptyString function', () => {
  it('should return true for an empty string', () => {
    expect(isEmptyString('')).toBe(true)
  })

  it('should return true for a string with only spaces', () => {
    expect(isEmptyString('   ')).toBe(true)
  })

  it('should return false for a non-empty string', () => {
    expect(isEmptyString('abc')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isEmptyString(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isEmptyString(true)).toBe(false)
    expect(isEmptyString(false)).toBe(false)
  })

  it('should return false for an array', () => {
    expect(isEmptyString([1, 2, 3])).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isEmptyString({ a: 1 })).toBe(false)
  })

  it('should return false for null', () => {
    expect(isEmptyString(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isEmptyString(undefined)).toBe(false)
  })
})
