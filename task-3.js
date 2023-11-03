//-------------------Task-3------------------------
//НЗадані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, 
//при цьому a виводится один раз, число а+1 - два рази і т.д.

console.log(createArray(3, 10));

function createArray(a, b) {
  const result = [];
  let count = 1;
  for (let i = a; i <= b; i++) {
    for (let j = 0; j < count; j++) {
      result.push(i);
    }
    count++;
  }
  return result;
}
