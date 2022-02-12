// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b ){
    if (a == b) return a; //(1)
    if (a < b) {
       return a + getSum(a+1, b); //(2)
    }else {
       return a + getSum(a-1,b); //(3)
    }
 }
 
 getSum(1,3)