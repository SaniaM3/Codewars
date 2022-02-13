// Часы показывают ч часов, m минут и s секунд после полуночи. 
// Ваша задача — написать функцию, которая возвращает время 
// с полуночи в миллисекундах.

function past(h, m, s) {
    let timeArray = [];
    if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
      return "Please type in existing hours";
    } else {
      timeArray.push(h * 3600000);
      timeArray.push(m * 60000);
      timeArray.push(s * 1000);
    }
    return timeArray.reduce((a, b) => a + b, 0);
  }

  console.log(past(0, 1, 1)); // 61000