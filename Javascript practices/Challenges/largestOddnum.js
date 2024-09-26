const arr = [ 1,2,3,4,5,6,7,8,9,10 ]

const oddnums = arr.filter((i) => i % 2 !== 0 )

console.log(oddnums)

let largest = 0
let secondlargest = 0

for(let value of oddnums){
    if (value > largest){
        secondlargest = largest
        largest = value
    } else if (value > secondlargest && value !== largest){
        secondlargest = value
    }
    
}

console.log(largest)
console.log(secondlargest)