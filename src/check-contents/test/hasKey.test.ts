import { hasKey } from '@Src/check-contents'
import { describe, expect, it } from 'vitest'

describe('hasKey function', () => {
  it('should return true if the object has the key', () => {
    expect(hasKey({ a: 1 }, 'a')).toBe(true)
  })

  it('should return false if the object does not have the key', () => {
    expect(hasKey({ a: 1 }, 'b')).toBe(false)
  })

  it('should return false if the key is not a string', () => {
    expect(hasKey({ a: 1 }, 123)).toBe(false)
  })

  it('should return false if the first argument is not a plain object', () => {
    expect(hasKey([1, 2, 3], '0')).toBe(false)
    expect(hasKey('abc', '0')).toBe(false)
    expect(hasKey(123, '0')).toBe(false)
    expect(hasKey(true, '0')).toBe(false)
    expect(hasKey(null, '0')).toBe(false)
    expect(hasKey(undefined, '0')).toBe(false)
  })
})
