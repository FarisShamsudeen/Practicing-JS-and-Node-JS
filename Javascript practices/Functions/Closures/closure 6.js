function createCounter(){
    let counter = []

    for (let i = 0; i < 3; i++) {
        counter.push(function(){
            return i
        })
        
    }

    return counter
}

const counterFunc = createCounter()

console.log(counterFunc[0]())
console.log(counterFunc[1]())
console.log(counterFunc[2]())
console.log(counterFunc[3]())