function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const num = range(1, 5)

console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);