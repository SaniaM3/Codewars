// Напишите функцию, которая принимает список строк и 
// возвращает каждую строку с правильным номером перед ним.

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number=function(array){
    return array.map((line, index) => {
      return `${index + 1}: ${line}`
    });
  }
