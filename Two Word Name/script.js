// Напишите функцию для преобразования имени в инициалы. 
// Это ката строго состоит из двух слов с одним пробелом 
// между ними. На выходе должны быть две заглавные буквы с 
// точкой, разделяющей их. 
// Это должно выглядеть так: Сэм Харрис => SH Патрик Фини => P.F.

function abbrevName(name) {
    // split разделяет объект на массив строк. 
    // В данном случае указан разделитель пробел.
    var separate = name.split(" ");

    //берем первое слово и берем из него первый символ
    var abbrev = (separate[0].charAt(0)
    //прибавляем точку и берем второе слово...
    //преобразуем в uppercase
    + "." + separate[1].charAt(0)).toUpperCase();
    return abbrev;
}

abbrevName("sam harris");