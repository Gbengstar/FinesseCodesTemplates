// type Mixed = (string | number)[];
// type UIX = { mixed: (string | number)[]; open(): number };
// type U = string[] | number[];
// interface Mix {
//   mixed: (string | number)[];
//   open(): number;
// }
// function interArry(A: Mixed, B: Mixed): Mix {
//   var container: Mixed = [];
//   for (const element of A) {
//     if (!B.includes(element)) {
//       container.push(element);
//     }
//   }
//   return {
//     mixed: [1, '1'],
//     open: () => {
//       return 1;
//     },
//   }; //container;
// }
// const A = [1, 2, 5];
// const B = [1, 'e'];
// // console.log(interArry(A, B));

// class Noun {
//   constructor(public name: string, public age: number) {
//     // this.name = name;
//     // this.age = age;
//   }
// }
// console.log(new Noun('gbenga', 20), Noun.name, Noun.length, Noun.toString());

// function printer(noun: Noun): number {
//   console.log('this is the age', noun.age);
//   console.log('this is the name', noun.name);

//   return 5;
// }

// console.log(printer(new Noun('gbenga', 40)));

// a function to return last 4 digit of a string
function string4(element: string) {
  var bucket: string = ``;
  for (let e = element.length - 4; e < element.length; e++) {
    bucket = bucket.concat(element[e]);
  }
  console.log('bucket', bucket);
  return bucket;
}
string4('08067105592');

function date(element: string) {
  var bucket: string = ``;
  for (let e = element.length - 4; e < element.length; e++) {
    bucket = bucket.concat(element[e]);
  }
  console.log('bucket', bucket);
  return bucket;
}
console.log(date(Date.now().toString()));
