import { type NullOrUndefined } from '@Src/types'

export function isNullOrUndefined (value: unknown): value is NullOrUndefined {
  return value === null || value === undefined
}
