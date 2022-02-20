// Задача о максимальной сумме подмассива состоит в 
// нахождении максимальной суммы непрерывной подпоследовательности 
// в массиве или списке целых чисел:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

const maxSequence = (a,sum=0) => a.reduce((max,v) => 
        Math.max(sum = Math.max(sum + v, 0), max), 0);