// Учитывая случайное неотрицательное число, 
// вы должны вернуть цифры этого числа в массиве в обратном порядке.

// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    var initialArray = (""+n).split('');
    var reversedArray = [];
    for (var i = initialArray.length - 1; i >= 0; i--) {
      reversedArray[i] = parseInt(initialArray.shift(),10);
    }
    return reversedArray;
  }