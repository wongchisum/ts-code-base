import type { UserType } from './typing'
export function setPerson<T extends UserType>(data: T) {
  const person = { ...data }
  person.age = person.age + 1

  return person
}
