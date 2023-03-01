type Chainable<Ob = {}> = {
  option<Value, Key extends string> (key: Key, value: Value): Chainable<Omit<Ob, Key> & Record<Key, Value>>
  get(): Ob
}
