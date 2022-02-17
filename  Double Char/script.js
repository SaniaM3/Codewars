// Учитывая строку, вы должны вернуть строку, 
// в которой каждый символ (с учетом регистра) повторяется один раз.

// doubleChar("String") ==> "SSttrriinngg"

function doubleChar(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++){
      newStr += str[i] + str[i];
    }
    return newStr;
  };