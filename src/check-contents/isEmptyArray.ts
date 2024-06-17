import { isArray } from '@Src/check-types'

export function isEmptyArray (value: unknown): boolean {
  return isArray(value) && value.length === 0
}
