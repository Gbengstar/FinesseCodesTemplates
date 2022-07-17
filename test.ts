type Mixed = (string | number)[];
type U = string[] | number[];
interface Mix {
  mixed: (string | number)[];
  open(): number;
}
function interArry(A: Mix, B: Mixed): Mix {
  const open = (): number => {
    return 1;
  };
  return { mixed: [1, '1'], open };
}
const b = [1, 'e'];
