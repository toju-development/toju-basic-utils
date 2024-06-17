import { toNumber } from '@Src/convert-types'
import { describe, expect, it } from 'vitest'

describe('toNumber function', () => {
  it('should return the same value if the value is a number', () => {
    expect(toNumber(42)).toBe(42)
    expect(toNumber(0)).toBe(0)
    expect(toNumber(-42)).toBe(-42)
  })

  it('should convert a string to a number', () => {
    expect(toNumber('42')).toBe(42)
    expect(toNumber('0')).toBe(0)
    expect(toNumber('-42')).toBe(-42)
    expect(toNumber('abc')).toBe(0)
  })

  it('should convert a boolean to a number', () => {
    expect(toNumber(true)).toBe(1)
    expect(toNumber(false)).toBe(0)
  })

  it('should convert null and undefined to 0', () => {
    expect(toNumber(null)).toBe(0)
    expect(toNumber(undefined)).toBe(0)
  })

  it('should convert other values to 0', () => {
    expect(toNumber({})).toBe(0)
    expect(toNumber([])).toBe(0)
  })
})
