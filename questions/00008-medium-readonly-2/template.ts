type MyReadonly2<T, K extends keyof T = keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
} & {
  readonly [Key in keyof T as Key extends K ? Key : never]: T[Key];
}

