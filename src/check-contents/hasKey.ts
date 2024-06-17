import { isPlainObject, isString } from '@Src/check-types'

export function hasKey (obj: unknown, key: unknown): boolean {
  if (isPlainObject(obj) && isString(key)) {
    return Object.prototype.hasOwnProperty.call(obj, key)
  }
  return false
}
