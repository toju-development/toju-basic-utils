import { isBoolean } from '@Src/check-types'

export function toNumber (value: unknown): number {
  if (isBoolean(value)) return value ? 1 : 0

  const number = parseFloat(value as string)
  return isNaN(number) ? 0 : number
}
