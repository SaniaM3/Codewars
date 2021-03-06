// Создайте функцию, которая просматривает массив arr и возвращает первый элемент в нем, 
// прошедший «проверку на истинность». Это означает, что для данного элемента x «проверка на истинность» пройдена, 
// если func(x) истинна. Если ни один элемент не проходит проверку, возвращается значение undefined.

function findElement(arr, func) {
    return arr.find(func);
  }