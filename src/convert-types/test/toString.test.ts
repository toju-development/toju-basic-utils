import { toString } from '@Src/convert-types'
import { describe, expect, it } from 'vitest'

describe('toString function', () => {
  it('should return the same value if the value is a string', () => {
    expect(toString('abc')).toBe('abc')
  })

  it('should convert a number to a string', () => {
    expect(toString(42)).toBe('42')
    expect(toString(0)).toBe('0')
    expect(toString(-42)).toBe('-42')
  })

  it('should convert a boolean to a string', () => {
    expect(toString(true)).toBe('true')
    expect(toString(false)).toBe('false')
  })

  it('should convert null and undefined to an empty string', () => {
    expect(toString(null)).toBe('')
    expect(toString(undefined)).toBe('')
  })

  it('should convert other values to a string', () => {
    expect(toString({ a: 1 })).toBe('[object Object]')
    expect(toString([1, 2, 3])).toBe('1,2,3')
  })
})
