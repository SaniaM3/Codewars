// Ваша задача — написать функцию, которая увеличивает строку, 
// чтобы создать новую строку. Если строка уже заканчивается числом,
//  число должно быть увеличено на 1. Если строка не заканчивается 
//  цифрой. число 1 должно быть добавлено к новой строке.

//  Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
}