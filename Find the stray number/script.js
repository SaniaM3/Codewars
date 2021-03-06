// Вам дан массив целых чисел нечетной длины, 
// в котором все они одинаковы, кроме одного единственного числа. 
// Завершите метод, который принимает такой массив и возвращает 
// это единственное другое число. Входной массив всегда будет 
// действительным! (нечетная длина >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

const stray = nums => nums.reduce((a, b) => a ^ b);