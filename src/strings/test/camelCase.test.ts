import { camelCase } from '@Src/strings'
import { describe, expect, it } from 'vitest'

describe('camelCase function', () => {
  it('should convert strings to camelCase', async () => {
    expect(camelCase('hello world')).toBe('helloWorld')
    expect(camelCase('HELLO WORLD')).toBe('helloWorld')
    expect(camelCase('Hello World')).toBe('helloWorld')
    expect(camelCase('hello-world')).toBe('helloWorld')
    expect(camelCase('hello_world')).toBe('helloWorld')
    expect(camelCase('hello   world')).toBe('helloWorld')
  })
})
