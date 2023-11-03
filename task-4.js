//-------------------Task-4------------------------
//Напишіть функцію randArray(k), яка заповнюватиме масив k
//випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

function randArray(k) {
    const arrRandomNumbers = [];
    const max = 500;
    const min = 1;
  
    for (let i = 0; i < k; i++) {
      let randomNumber = Math.round(Math.random() * (max - min) + min);
      arrRandomNumbers.push(randomNumber);
    }
    console.log(arrRandomNumbers);
  }
  
  randArray(5);