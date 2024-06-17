import { isNullOrUndefined, isString } from '@Src/check-types'

export function isBlank (value: unknown): boolean {
  return isNullOrUndefined(value) || (isString(value) && value.trim().length === 0)
}
