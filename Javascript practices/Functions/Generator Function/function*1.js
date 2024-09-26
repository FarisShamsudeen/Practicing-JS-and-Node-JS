function* infiniteNumbers(){
    let num = 1;
    while(true){
        yield num++
    }
}

const numbers = infiniteNumbers()

console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
