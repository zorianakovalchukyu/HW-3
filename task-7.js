//-------------------Task-7------------------------
//Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє
//на унікальність його елементи. Якщо всі елементи масиву унікальні (не
//мають дублів), то функція поверне true, інакше - false.
function findUnique(arr) {
    const uniqueNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueNumbers.indexOf(arr[i]) === -1) {
        uniqueNumbers.push(arr[i]);
      } else {
        return false;
      }
    }
    return true;
  }
  
  console.log(findUnique([1, 2, 3, 5, 3]));
  findUnique(([1, 2, 3, 5, 11]));