type MyPick<T extends object, K extends keyof T> = {
  [L in Extract<keyof T, K>]: T[L]
}

