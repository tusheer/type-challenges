type Pop<T extends unknown[]> = T extends [...infer P, infer Last] ? [...P] : []
