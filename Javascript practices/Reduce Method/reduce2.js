const number = [234,345,674521,342,57467,72,4524,5764,78]

const largest = number.reduce((largest, curr) => curr > largest ? curr : largest)

console.log(largest); 