const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
// const array2 = [2, 3, 4];


const containsAll = array1.every(element => array2.includes(element))
console.log(containsAll)