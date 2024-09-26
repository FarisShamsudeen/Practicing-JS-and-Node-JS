function subtractor(x){
    return function (y){
        return x-y
    }
}

const subtract = subtractor(10)(5)
console.log(subtract)