import { isEmpty } from '@Src/check-contents'
import { describe, expect, it } from 'vitest'

describe('isEmpty function', () => {
  it('should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })

  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })

  it('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true)
  })

  it('should return false for an object with properties', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('should return false for an array with elements', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  it('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true)
  })

  it('should return true for a non-empty string', () => {
    expect(isEmpty('abc')).toBe(true)
  })

  it('should return true for a number', () => {
    expect(isEmpty(123)).toBe(true)
  })

  it('should return true for a boolean', () => {
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(false)).toBe(true)
  })
})
