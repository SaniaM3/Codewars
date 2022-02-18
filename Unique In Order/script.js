// Реализуйте функцию unique_in_order, которая принимает в 
// качестве аргумента последовательность и возвращает список 
// элементов без каких-либо элементов с одинаковым значением 
// рядом друг с другом и с сохранением исходного порядка элементов.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function(iterable){
    return (typeof iterable == "object") 
    ? iterable.filter((v,i,a) => a[i] !== a[i+1]) 
    : iterable.split("").filter((v,i,a) => a[i] !== a[i+1]);
  }