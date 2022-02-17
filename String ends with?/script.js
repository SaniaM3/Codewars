// Завершите решение так, чтобы оно возвращало true, 
// если первый переданный аргумент (строка) заканчивается
//  вторым аргументом (тоже строкой).

//  solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){ 
    return str.endsWith(ending); //endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках
 }