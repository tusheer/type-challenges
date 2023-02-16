type MyOmit<T extends object, K extends keyof T> = {
  [U in Exclude<keyof T, K>]: T[U];
}
