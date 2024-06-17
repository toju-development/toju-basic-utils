import { isPlainObject } from '@Src/check-types'

export function isEmptyObject (value: unknown): boolean {
  return isPlainObject(value) && Object.keys(value).length === 0
}
