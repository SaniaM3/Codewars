// Рассмотрим массив/список овец, где некоторые овцы могут 
// отсутствовать на своем месте. Нам нужна функция, которая 
// подсчитывает количество овец, присутствующих в массиве (true означает наличие).

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length
}