// Вы, наверное, знаете систему «лайков» из Facebook и 
// других страниц. Люди могут «лайкать» сообщения в блогах, 
// изображения или другие элементы. Мы хотим создать текст, 
// который должен отображаться рядом с таким элементом. 
// Реализуйте функцию, которая принимает массив, 
// содержащий имена людей, которым понравился элемент. 
// Он должен возвращать отображаемый текст, 
// как показано в примерах:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes (names) {
    var templates = [
      'no one likes this',
      '{name} likes this',
      '{name} and {name} like this',
      '{name}, {name} and {name} like this',
      '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);

    return templates[idx].replace(/{name}|{n}/g, function (val) {
      return val === '{name}' ? names.shift() : names.length;
    });
  }