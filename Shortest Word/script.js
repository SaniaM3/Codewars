// Просто, учитывая строку слов, вернуть длину кратчайшего 
// слова (слов). Строка никогда не будет пустой, и вам не 
// нужно учитывать разные типы данных.

function findShort(s) {
    let res = s.split(' ');
    let a = Infinity;
    
    for (let i = 0; i < res.length; i++) {
      a = Math.min(res[i].length, a);
    }
    return a;
  }