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

type EqualType<T, P extends keyof T> = Equal<Pick<T, P>, { readonly [I in P ]: T[I] }>

type GetReadonlyKeys<T> = keyof {
  [I in keyof T as EqualType<T, I> extends true ? I : never]: T[I]
}
