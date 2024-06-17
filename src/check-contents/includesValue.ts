import { isString } from '@Src/check-types'

export function includesValue (stringValue: string, searchValue: string): boolean {
  return isString(stringValue) && isString(searchValue) && stringValue.includes(searchValue)
}
