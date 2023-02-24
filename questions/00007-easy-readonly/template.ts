type MyReadonly<D> = {
  readonly[I in keyof D]: D[I]
}

