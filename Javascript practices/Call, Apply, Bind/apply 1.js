const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

array1.push.apply(array1, array2)
console.log(array1)
console.log(array2)