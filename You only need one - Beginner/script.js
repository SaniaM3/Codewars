// Вам будет дан массив a и значение x. 
// Все, что вам нужно сделать, это проверить, содержит ли 
// предоставленный массив значение. Массив может содержать 
// числа или строки. Х может быть любым. Возвращает true, 
// если массив содержит значение, и false, если нет.


function check(a, x) {
    return a.indexOf(x) > -1 ? true : false
  }

  //второй вариант
  const check = (a,x) => a.includes(x);