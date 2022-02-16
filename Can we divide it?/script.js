//Делится ли число на a, b
// Пример
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

function isDivideBy(number, a, b) {
    if (number % a === 0 && number % b === 0) { //тут проверяем есть ли остаток при делении, если нету, значит тру
    return true;
   } else {
    return false;
    }
    } 