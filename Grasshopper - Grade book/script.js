// Завершите функцию, чтобы она нашла среднее из трех переданных 
// ей оценок и вернула буквенное значение, связанное с этой оценкой.

// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
 
function getGrade (s1, s2, s3) {
    let i = Math.floor((s1 + s2 + s3) / getGrade.length) //Math.floor - округление до меньшего целого числа
    console.log(i)
    if( i >= 90 &&  i <= 100) {
    return 'A'
    } else if ( i >= 80 && i <= 89){
    return 'B' 
    }  else if ( i >= 70  && i <= 79) {
    return 'C' 
    } else if ( i >= 60 && i <= 69) {
    return 'D'
    } else  {
    return 'F'
    }
    }

