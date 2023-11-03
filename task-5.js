//-------------------Task-5------------------------
//Є масив arr, який може містити підмасиви, написати функцію
// showByTypes яка виведе у консоль масиви які складаються із
//примітивних даних початкового масиву і усіх вкладених масивів, але
//одного типу даних (не приводити тип String в Number навіть, якщо там
//лише число).

let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
showByTypes(arr);

function showByTypes(arr) {
    const numbers = [];
    const strings = [];
  
    function checkAndSplit(subarr) {
      for (let i = 0; i < subarr.length; i++) {
        if (Array.isArray(subarr[i])) {
          checkAndSplit(subarr[i]);
        } else if (typeof subarr[i] === "number") {
          numbers.push(subarr[i]);
        } else if (typeof subarr[i] === "string") {
          strings.push(subarr[i]);
        }
      }
    }
  
    checkAndSplit(arr);
  
    console.log(numbers);
    console.log(strings);
}

