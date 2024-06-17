import { isArray, isNullOrUndefined, isPlainObject, isString } from '@Src/check-types'

export function toArray (value: unknown): unknown[] {
  if (isArray(value)) {
    return value
  } else if (isString(value)) {
    return value.split('')
  } else if (isPlainObject(value)) {
    return Object.values(value)
  } else if (!isNullOrUndefined(value)) {
    return [value]
  }
  return []
}
