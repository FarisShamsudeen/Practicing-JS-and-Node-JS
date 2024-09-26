function multiply(a){
    return function (b){
        return a * b
    }
}

const multiply5 = multiply(5)
const multiply10 = multiply(10)

console.log(multiply5(5))
console.log(multiply10(5))
