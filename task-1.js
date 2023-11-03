//-------------------Task-1------------------------
//Написати функцію compact() яка має приймати на вхід масив,
// а на вихід має повертати значення нового масиву без повторень.

console.log("-------------------Task-1------------------------");
const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2);

function compact(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }
  return result;
}
