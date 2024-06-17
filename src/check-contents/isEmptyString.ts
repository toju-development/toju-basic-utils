import { isString } from '@Src/check-types'

export function isEmptyString (value: unknown): boolean {
  return isString(value) && value.trim().length === 0
}
