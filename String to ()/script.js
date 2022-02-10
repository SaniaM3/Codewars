// The goal of this exercise is to convert a string to a new string where each character in the 
// new string is "(" if that character appears only once in the original string, or ")" if 
// that character appears more than once in the original string. Ignore capitalization when 
// determining if a character is a duplicate.


function duplicateEncode(str){
    var word = str.toLowerCase();    //Создание переменной word для отслеживания нижнего регистра

    var unique = '';    //Переменная unique создает строку

      for (var i = 0; i < word.length; i++) {    //Перебирает все буквы в строке

        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {    //Проверка символов на повторение
          unique += '('; //Присваиваем скобку
        } else
        unique += ')';  //Присваиваем скобку
      }
      return unique;
    
    }
    console.log(duplicateEncode('KakalaKoza'));