// Проверьте, содержит ли строка одинаковое количество «x» и «o». 
// Метод должен возвращать логическое значение и не учитывать регистр. 
// Строка может содержать любой символ.
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let x = 0, o = 0;
  
  for(let i = 0; i <= str.length; i++) {
    str.charAt(i) === "o" || str.charAt(i) === "O" ? o++ : null;
    str.charAt(i) === "x" || str.charAt(i) === "X" ? x++ : null;
  }
  return x === o ? true:false;
}