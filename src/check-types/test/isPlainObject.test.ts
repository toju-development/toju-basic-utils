import { isPlainObject } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('isPlainObject function', () => {
  it('should return true for a plain object', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject({ a: 1 })).toBe(true)
  })

  it('should return false for an array', () => {
    expect(isPlainObject([1, 2, 3])).toBe(false)
  })

  it('should return false for a string', () => {
    expect(isPlainObject('abc')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isPlainObject(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isPlainObject(true)).toBe(false)
    expect(isPlainObject(false)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isPlainObject(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isPlainObject(undefined)).toBe(false)
  })

  it('should return false for a function', () => {
    expect(isPlainObject(() => {})).toBe(false)
  })
})
