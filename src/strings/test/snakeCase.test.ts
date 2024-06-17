import { snakeCase } from '@Src/strings'
import { describe, expect, it } from 'vitest'

describe('snakeCase function', () => {
  it('should convert strings to snake_case', async () => {
    expect(snakeCase('hello world')).toBe('hello_world')
    expect(snakeCase('HELLO WORLD')).toBe('hello_world')
    expect(snakeCase('Hello World')).toBe('hello_world')
    expect(snakeCase('helloWorld')).toBe('hello_world')
    expect(snakeCase('HelloWorld')).toBe('hello_world')
    expect(snakeCase('hello_world')).toBe('hello_world')
    expect(snakeCase('hello   world')).toBe('hello_world')
  })

  it('should return null for non-string inputs', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(snakeCase(null)).toBeNull()
    expect(snakeCase('')).toBeNull()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(snakeCase(undefined)).toBeNull()
  })
})
