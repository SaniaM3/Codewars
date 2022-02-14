// Вам будет дано число, и вам нужно будет вернуть его в 
// виде строки в расширенной форме. Например:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
    var multiple = 10;
    var result = [];
    while (num > 1){
      var remainder = num%multiple;
      if(remainder >0){
        result.unshift(remainder);
      }
      num -= remainder;
      multiple = multiple * 10;
    }
    return result.join(" + ");
  }