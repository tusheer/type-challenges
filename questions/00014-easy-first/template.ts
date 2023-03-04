type First<T extends unknown[]> = T extends [ infer First, ...infer Second] ? First : never
