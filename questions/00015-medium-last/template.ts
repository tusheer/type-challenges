type Last<T extends unknown[]> = T extends [... infer Fisrs, infer Last] ? Last : never
