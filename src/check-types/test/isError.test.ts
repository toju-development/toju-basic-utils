import { isError } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('isError function', () => {
  it('should return true for an Error object', () => {
    expect(isError(new Error())).toBe(true)
  })

  it('should return false for a string', () => {
    expect(isError('Error')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isError(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isError(true)).toBe(false)
    expect(isError(false)).toBe(false)
  })

  it('should return false for an array', () => {
    expect(isError([1, 2, 3])).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isError({ a: 1 })).toBe(false)
  })

  it('should return false for null', () => {
    expect(isError(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isError(undefined)).toBe(false)
  })
})
