import { isNullOrUndefined } from '@Src/check-types'

export function toString (value: unknown): string {
  if (isNullOrUndefined(value)) {
    return ''
  }
  return String(value)
}
