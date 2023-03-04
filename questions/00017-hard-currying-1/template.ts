type Lastt<L> = L extends [...infer Fists, infer Last] ? Last : never

type POPP<L> = L extends [...infer Fists, infer Last] ? [...Fists] : never

type Curry<Fn extends Function, Return = ReturnType<Fn>, Parameteter = Parameters<Fn>> = Fn extends () => any ? Fn : Parameteter extends []
  ? Return
  : Curry<Fn, (value: Lastt<Parameteter>) => Return, POPP<Parameteter> >

declare function Currying<Fn extends Function>(fn: Fn): Curry<Fn>

