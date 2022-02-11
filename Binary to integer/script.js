// Учитывая массив единиц и нулей, преобразуйте 
// эквивалентное двоичное значение в целое число.

// Например: [0, 0, 0, 1]рассматривается как 0001
// двоичное представление 1.

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2

const binaryArrayToNumber = arr => parseInt(arr.join(''),2);
//- parseInt(строка, [система счисления]) -  преобразует строку в целое число 
//arr.join преобразует элементы массива в строкове значение