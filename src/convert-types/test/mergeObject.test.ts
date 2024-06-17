import { mergeObjects } from '@Src/convert-types'
import { describe, expect, it } from 'vitest'

type objectMap = Record<string, number>

describe('mergeObjects function', () => {
  it('should merge multiple source objects into the target object', () => {
    const target = { a: 1 }
    const sources: objectMap[] = [{ b: 2 }, { c: 3 }]
    const result = mergeObjects<objectMap>(target, sources)
    expect(result).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should overwrite properties in the target object with properties from the source objects', () => {
    const target = { a: 1, b: 2 }
    const sources: objectMap[] = [{ b: 3, c: 4 }]
    const result = mergeObjects<objectMap>(target, sources)
    expect(result).toEqual({ a: 1, b: 3, c: 4 })
  })

  it('should not modify the target object', () => {
    const target = { a: 1 }
    const sources: objectMap[] = [{ b: 2 }]
    const result = mergeObjects<objectMap>(target, sources)
    expect(result).toEqual({ a: 1, b: 2 })
    expect(target).toEqual({ a: 1 })
  })

  it('should not modify the source objects', () => {
    const target = { a: 1 }
    const sources: objectMap[] = [{ b: 2 }]
    const result = mergeObjects<objectMap>(target, sources)
    expect(result).toEqual({ a: 1, b: 2 })
    expect(sources[0]).toEqual({ b: 2 })
  })

  it('should return a new object, not the target object', () => {
    const target = { a: 1 }
    const sources: objectMap[] = [{ b: 2 }]
    const result = mergeObjects<objectMap>(target, sources)
    expect(result).not.toBe(target)
  })
})
