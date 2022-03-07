// Повторить заданную строку str (первый аргумент) num раз (второй аргумент). 
// Возвращает пустую строку, если num не является положительным числом.
//  В этой задаче не используйте встроенный метод .repeat().

function repeatStringNumTimes(string, times) {
    if(times <= 0) 
      return "";
    if(times === 1) 
      return string;
    else 
      return string + repeatStringNumTimes(string, times - 1);
  }
  repeatStringNumTimes("abc", 3);