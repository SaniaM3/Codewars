// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  if (operation == '+'){
        return value1+value2
    }
   else if (operation == '-'){
        return value1-value2
     }
    else if (operation == '*'){
        return value1*value2
      }
    else if (operation == '/'){
        return value1/value2
      }
}

//через switch case
// switch (operation) {
//     case '+':
//         return value1 + value2;
//     case '-':
//         return value1 - value2;
//     case '*':
//         return value1 * value2;
//     case '/':
//         return value1 / value2;
//     default:
//         return 0;
// }