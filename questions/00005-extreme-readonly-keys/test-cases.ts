import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

type RemoveReadonly<T extends object> = {
  +readonly [ I in keyof T]: T[I]
}

type GetReadonlyKeys<T extends object, K = RemoveReadonly<T> > = K extends K ? K : never

type Hello = GetReadonlyKeys<Todo1>
//    ^?
