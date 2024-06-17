export function mergeObjects<T extends object> (target: T, sources: T[]): T {
  return Object.assign({}, target, ...sources)
}
