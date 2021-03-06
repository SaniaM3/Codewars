// Вам будет предоставлен массив чисел. Вы должны 
// отсортировать нечетные числа в порядке возрастания, 
// оставив четные числа на их исходных позициях.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
 }

 //array filter создает новый массив с функцией
 //sort((a,b) => a - b) сортируем массив в порядке возрастания
 //odd.shift() удаляет первый элемент из массива и возвращает его значение