const numbers = [234,345,6745212,342,57467,72,4524,5764,78]

const largestOdd = numbers.reduce((largest, current) => (current % 2 !== 0 && current > largest) ? current : largest, -Infinity)

console.log(largestOdd);