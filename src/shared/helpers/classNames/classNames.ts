type Mods = Record<string, boolean | string>
export function classNames (
  cls: string,
  mods?: Mods,
  additional?: string[]
): string {
  const classNamesArray: string[] = [cls]

  if (additional) {
    classNamesArray.push(...additional.filter(Boolean))
  }

  if (mods) {
    classNamesArray.push(
      ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([classNames]) => classNames)
    )
  }

  return classNamesArray.join(' ')
}
