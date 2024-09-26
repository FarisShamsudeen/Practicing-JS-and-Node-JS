function createIdGenerator(){
    let id = 0;
    return function(){
        id++
        return id
    }
}


const idGenerator = createIdGenerator();
console.log(idGenerator());  // Output: 1
console.log(idGenerator());  // Output: 2
console.log(idGenerator());  // Output: 3
