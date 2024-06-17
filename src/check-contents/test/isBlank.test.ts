import { isBlank } from '@Src/check-contents'
import { describe, expect, it } from 'vitest'

describe('isBlank function', () => {
  it('should return true for null', () => {
    expect(isBlank(null)).toBe(true)
  })

  it('should return true for undefined', () => {
    expect(isBlank(undefined)).toBe(true)
  })

  it('should return true for an empty string', () => {
    expect(isBlank('')).toBe(true)
  })

  it('should return true for a string with only spaces', () => {
    expect(isBlank('   ')).toBe(true)
  })

  it('should return false for a non-empty string', () => {
    expect(isBlank('abc')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isBlank(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isBlank(true)).toBe(false)
    expect(isBlank(false)).toBe(false)
  })

  it('should return false for an array', () => {
    expect(isBlank([1, 2, 3])).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isBlank({ a: 1 })).toBe(false)
  })
})
