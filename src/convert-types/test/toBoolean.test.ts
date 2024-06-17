import { toBoolean } from '@Src/convert-types'
import { describe, expect, it } from 'vitest'

describe('toBoolean function', () => {
  it('should return the same value if the value is a boolean', () => {
    expect(toBoolean(true)).toBe(true)
    expect(toBoolean(false)).toBe(false)
    expect(toBoolean('true')).toBe(true)
  })

  it('should convert a string to a boolean', () => {
    expect(toBoolean('true')).toBe(true)
    expect(toBoolean('True')).toBe(true)
    expect(toBoolean('false')).toBe(false)
    expect(toBoolean('False')).toBe(false)
    expect(toBoolean('abc')).toBe(false)
  })

  it('should convert a number to a boolean', () => {
    expect(toBoolean(1)).toBe(true)
    expect(toBoolean(0)).toBe(false)
    expect(toBoolean(-1)).toBe(true)
  })

  it('should convert other values to a boolean', () => {
    expect(toBoolean(null)).toBe(false)
    expect(toBoolean(undefined)).toBe(false)
    expect(toBoolean('')).toBe(false)
    expect(toBoolean('abc')).toBe(false)
    expect(toBoolean([])).toBe(true)
    expect(toBoolean({})).toBe(true)
  })
})
