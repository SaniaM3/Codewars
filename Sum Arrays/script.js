// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

function sum (numbers) {
    let total = 0;
  numbers.forEach(value => { //Метод forEach выполняет функцию для каждого элемента в массиве
    total += value;
  });
    
  return total;
    
};