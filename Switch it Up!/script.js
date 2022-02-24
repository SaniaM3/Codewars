// Если указано число от 0 до 9, верните его словами. 
// Вход :: 1 Выход :: "Один". Если ваш язык поддерживает это, 
// попробуйте использовать оператор switch.

function switchItUp(number){
    var word = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
    return word[number];
  }

  //через switch

  function switchItUp(number){
    switch(number) {
      case 0:
        return 'Zero';
      case 1:
        return 'One';
      case 2:
        return 'Two';
      case 3:
        return 'Three';
      case 4:
        return  'Four';
      case 5:
        return 'Five';
      case 6:
        return 'Six';
      case 7:
        return 'Seven';
      case 8:
        return 'Eight';
      case 9:
        return 'Nine';
      default:
        return 'Unknown number';
    }
  }