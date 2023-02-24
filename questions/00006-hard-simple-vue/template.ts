declare function SimpleVue< Data, Computed, Methods>(options: {
  data?: (this: void) => Data
  computed?: Computed & ThisType<Methods & Data>
  methods?: Methods & ThisType<Data & ComputedType<Computed> & Methods>
}): any

type ComputedType<C> = {
  [ I in keyof C]: C[I] extends (t: any) => infer B ? B : never
}

