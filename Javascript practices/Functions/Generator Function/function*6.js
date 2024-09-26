function* reverser(value){
    for (let i = value; i >= 0; i--) {
        yield i;
    }
}

const reversenumberfrom10 = reverser(10)

console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)
console.log(reversenumberfrom10.next().value)