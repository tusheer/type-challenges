import type { Equal } from '@type-challenges/utils'

type EqualType<T, P extends keyof T> = Equal<Pick<T, P>, { readonly [I in P ]: T[I] }>

type GetReadonlyKeys<T> = keyof {
  [I in keyof T as EqualType<T, I> extends true ? I : never]: T[I]
}
