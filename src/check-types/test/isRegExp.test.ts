import { isRegExp } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('isRegExp function', () => {
  it('should return true for a RegExp object', () => {
    expect(isRegExp(/abc/)).toBe(true)
    expect(isRegExp(new RegExp('abc'))).toBe(true)
  })

  it('should return false for a string', () => {
    expect(isRegExp('abc')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isRegExp(123)).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isRegExp(true)).toBe(false)
    expect(isRegExp(false)).toBe(false)
  })

  it('should return false for an array', () => {
    expect(isRegExp([1, 2, 3])).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isRegExp({ a: 1 })).toBe(false)
  })

  it('should return false for null', () => {
    expect(isRegExp(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isRegExp(undefined)).toBe(false)
  })

  it('should return false for a function', () => {
    expect(isRegExp(() => {})).toBe(false)
  })
})
