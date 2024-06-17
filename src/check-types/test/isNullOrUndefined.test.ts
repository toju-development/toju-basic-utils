import { isNullOrUndefined } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('isNullOrUndefined function', () => {
  it('should return true for null', () => {
    expect(isNullOrUndefined(null)).toBe(true)
  })

  it('should return true for undefined', () => {
    expect(isNullOrUndefined(undefined)).toBe(true)
  })

  it('should return false for an empty object', () => {
    expect(isNullOrUndefined({})).toBe(false)
  })

  it('should return false for an object with properties', () => {
    expect(isNullOrUndefined({ a: 1 })).toBe(false)
  })

  it('should return false for an empty array', () => {
    expect(isNullOrUndefined([])).toBe(false)
  })

  it('should return false for an array with elements', () => {
    expect(isNullOrUndefined([1, 2, 3])).toBe(false)
  })

  it('should return false for an empty string', () => {
    expect(isNullOrUndefined('')).toBe(false)
  })

  it('should return false for a non-empty string', () => {
    expect(isNullOrUndefined('abc')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isNullOrUndefined(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isNullOrUndefined(true)).toBe(false)
    expect(isNullOrUndefined(false)).toBe(false)
  })
})
