// Сможете ли вы найти иголку в стоге сена? Напишите функцию 
// findNeedle(), которая принимает массив, полный мусора, 
// но содержащий одну «иглу». После того, как ваша функция 
// найдет иглу, она должна вернуть сообщение (в виде строки), 
// в котором говорится:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

function findNeedle(haystack) {
    return 'found the needle at position ' 
    + haystack.findIndex((s) => s == 'needle');
  }