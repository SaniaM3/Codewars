// Изограмма — это слово, в котором нет повторяющихся букв, 
// последовательных или непоследовательных. Реализуйте функцию, 
// определяющую, является ли строка, содержащая только буквы,
//  изограммой. Предположим, что пустая строка является изограммой.
// Игнорировать регистр букв.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }