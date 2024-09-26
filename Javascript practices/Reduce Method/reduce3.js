
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana', 'apple'];


const fruitCount = fruits.reduce((accumulator, fruit) => {
    accumulator[fruit] = (accumulator[fruit] || 0) + 1
    return accumulator
}, {})

console.log(fruitCount);
