interface Boss {
  length: number;
}

function moto<T extends Boss>(a: T): number {
  return a.length;
}

class Pint {
  constructor(public length: number) {}
}

console.log(moto({ length: 500, pef: 'this is a string' }));

console.log(new Pint(40));

console.log(moto(new Pint(50)));
