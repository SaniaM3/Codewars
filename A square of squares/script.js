// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function(n){
    if (n === 0) {
      return true;
    }
    else {
    return n > 0 && Math.sqrt(n) % 1 === 0;
    } 
  }
  
  