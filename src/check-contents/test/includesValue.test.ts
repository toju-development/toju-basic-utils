import { includesValue } from '@Src/check-contents'
import { describe, expect, it } from 'vitest'

describe('includes function', () => {
  it('should return true if searchValue is in stringValue', () => {
    expect(includesValue('hello', 'ell')).toBe(true)
  })

  it('should return false if stringValue is undefined', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(includesValue(undefined, 'world')).toBe(false)
  })

  it('should return false if searchValue is undefined', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(includesValue('hello', undefined)).toBe(false)
  })

  it('should return false if searchValue is not in stringValue', () => {
    expect(includesValue('hello', 'world')).toBe(false)
  })
})
