// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!

// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
    if (name.toLowerCase().charAt(0) == 'r') {
      name = name + ' plays banjo';
    }
    else {
      name = name + ' does not play banjo';
    }
    return name;
  }