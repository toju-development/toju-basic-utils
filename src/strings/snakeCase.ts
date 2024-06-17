import { isString } from '@Src/check-types'

export function snakeCase (str: string): string | null {
  if (!isString(str)) return null

  const result = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|[a-z][0-9]*|[0-9])|[A-Z]?[a-z]+[0-9]*|[A-Z]+|[0-9]+/g)

  if (result != null) {
    return result.join('_').toLowerCase()
  }

  return null
}
