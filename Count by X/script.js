// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    const result = []
    const limit = x * n
  
    for (let i = 1; i <= limit; i++) {
      if (i % x === 0) result.push(i)
    }
  
    return result
  }


  //второй вариант

  const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)