import { hasValue } from '@Src/check-contents'
import { describe, expect, it } from 'vitest'

describe('hasValue function', () => {
  it('should return true if the object has the value', () => {
    expect(hasValue({ a: 1, b: 2, c: 3 }, 2)).toBe(true)
  })

  it('should return false if the object does not have the value', () => {
    expect(hasValue({ a: 1, b: 2, c: 3 }, 4)).toBe(false)
  })

  it('should return false if the first argument is not a plain object', () => {
    expect(hasValue([1, 2, 3], 2)).toBe(false)
    expect(hasValue('abc', 'b')).toBe(false)
    expect(hasValue(123, 1)).toBe(false)
    expect(hasValue(true, true)).toBe(false)
    expect(hasValue(null, null)).toBe(false)
    expect(hasValue(undefined, undefined)).toBe(false)
  })
})
