import { kebabCase } from '@Src/strings'
import { describe, expect, it } from 'vitest'

describe('kebabCase function', () => {
  it('should convert strings to kebab-case', async () => {
    expect(kebabCase('hello world')).toBe('hello-world')
    expect(kebabCase('HELLO WORLD')).toBe('hello-world')
    expect(kebabCase('Hello World')).toBe('hello-world')
    expect(kebabCase('helloWorld')).toBe('hello-world')
    expect(kebabCase('HelloWorld')).toBe('hello-world')
    expect(kebabCase('hello_world')).toBe('hello-world')
    expect(kebabCase('hello   world')).toBe('hello-world')
  })

  it('should return null for non-string inputs', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(kebabCase(null)).toBeNull()
    expect(kebabCase('')).toBeNull()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(kebabCase(undefined)).toBeNull()
  })
})
