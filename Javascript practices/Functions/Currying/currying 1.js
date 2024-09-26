function add(a){
    return function (b){
        return a+b
    }
}

const add5 = add(5)
const add10 = add(10)
console.log(add5(5))
console.log(add10(5))