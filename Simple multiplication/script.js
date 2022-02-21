// Это ката об умножении заданного числа на восемь, 
// если оно четное, и на девять в противном случае.

const completion = require("gulp-cli/lib/shared/completion");

function simpleMultiplication(value){
    
    if(value%2===0 ){
     return value *8
    }
    else{
    return value* 9;
    }    
}

