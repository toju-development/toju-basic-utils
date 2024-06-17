import { isFunction } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('isFunction function', () => {
  it('should return true for a function', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(function () {})).toBe(true)
  })

  it('should return false for a string', () => {
    expect(isFunction('function')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isFunction(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isFunction(true)).toBe(false)
    expect(isFunction(false)).toBe(false)
  })

  it('should return false for an array', () => {
    expect(isFunction([1, 2, 3])).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isFunction({ a: 1 })).toBe(false)
  })

  it('should return false for null', () => {
    expect(isFunction(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isFunction(undefined)).toBe(false)
  })
})
