// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
    return (num > 0) ? -num : (num < 0) ? +num : 0
  };

//   условие ? выражение1 : выражение2 
// Если num > 0, то возвращаем -num, иначе если num < 0,
// возвращаем +num, иначе возвращаем 0