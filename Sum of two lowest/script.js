//вернуть сумму первых двух наименьших чисел
// Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.

function sumTwoSmallestNumbers(numbers) {  
    var ordered = numbers.sort(function(a,b){return a-b;});
    var result=0;
    
    for(i=0; i<ordered.length; i++){
      if(i==0){
        result+=ordered[0];
      }
      if(i==1){
        result+=ordered[1];
      }
    }
    return result;
  };

  //версия короче

  function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b); //сортируем массив в порядке возрастания, почему мне не лезет это в голову, задолбало, запомни уже!!!
    return numbers[0] + numbers[1];
  };