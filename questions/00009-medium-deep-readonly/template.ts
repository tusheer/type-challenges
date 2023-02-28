type DeepReadonly<T> = {
  readonly [U in keyof T]: T[U] extends Record<string, unknown> | Array<unknown> ? DeepReadonly<T[U]> : T[U]
}

