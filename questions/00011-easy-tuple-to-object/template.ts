type TupleToObject<Tuple extends readonly any[]> = {
  [ I in Tuple[number] ]: I
}

