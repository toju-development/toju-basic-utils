import { isPlainObject } from '@Src/check-types'

export function hasValue (obj: unknown, value: unknown): boolean {
  if (isPlainObject(obj)) {
    return Object.values(obj).includes(value)
  }
  return false
}
