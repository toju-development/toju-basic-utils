import { isString } from '@Src/check-types'
import { describe, expect, it } from 'vitest'

describe('isString function', () => {
  it('should return true for strings', () => {
    expect(isString('')).toBe(true)
    expect(isString('string')).toBe(true)
    expect(isString('123')).toBe(true)
  })

  it('should return false for non-strings', () => {
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString(123)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
  })
})
