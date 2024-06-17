import { isBoolean, isNumber, isString } from '@Src/check-types'

export function toBoolean (value: unknown): boolean {
  if (isBoolean(value)) return value

  if (isNumber(value)) return value !== 0

  if (isString(value)) return value.toLowerCase() === 'true'

  return Boolean(value)
}
