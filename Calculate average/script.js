// Напишите функцию, которая вычисляет среднее значение чисел 
// в заданном списке. Примечание. Пустые массивы должны возвращать 0.

function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }