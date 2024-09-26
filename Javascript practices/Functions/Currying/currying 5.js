function concatinator(string1){
    return function(string2){
        return (string1 + " " + string2)
    }
}

const concat = concatinator('Faris')('Shamsudeen')

console.log(concat)
