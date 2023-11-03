//-------------------Task-8------------------------
//Створити функцію create(), яка приймає один аргумент у вигляді рядка. Ця
//функція повертає анонімну функцію, яка перевіряє чи переданий в неї
//аргумент збігається з аргументом зовнішньої функції.
function create(str) {
    return function (string) {
      return str === string;
    };
  }
  
  const tom = create("pass_for_Tom");
  console.log(tom("pass_for_Tom"));
  console.log(tom("pass_for_tom"));
  