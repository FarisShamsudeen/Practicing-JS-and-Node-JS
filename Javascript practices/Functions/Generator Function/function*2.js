function* fibonacci() {
    var [prev, curr] = [1, 1]
    while (true) {
        yield curr
        [prev, curr] = [curr, prev + curr]
    }
}

const fib = fibonacci()

console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);