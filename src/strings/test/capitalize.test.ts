import { capitalize } from '@Src/strings'
import { describe, expect, it } from 'vitest'

describe('capitalize function', () => {
  it('should capitalize the first letter of each word in a string', () => {
    const str = 'hello world'
    const result = capitalize(str)
    expect(result).toBe('Hello World')
  })

  it('should return the same string if it is already capitalized', () => {
    const str = 'Hello World'
    const result = capitalize(str)
    expect(result).toBe('Hello World')
  })

  it('should handle single-word strings', () => {
    const str = 'hello'
    const result = capitalize(str)
    expect(result).toBe('Hello')
  })

  it('should handle empty strings', () => {
    const str = ''
    const result = capitalize(str)
    expect(result).toBe('')
  })

  it('should handle strings with leading and trailing whitespace', () => {
    const str = ' hello world '
    const result = capitalize(str)
    expect(result).toBe(' Hello World ')
  })

  it('should return an empty string if the input is not a string', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(capitalize(123)).toBe(123)
  })
})
