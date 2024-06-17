import { isString } from '@Src/check-types'

export function capitalize (value: string): string {
  if (!isString(value)) return value

  const words = value.split(' ')
  return words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
}
