function createStepCounter(eachStep){
    let step = 0
    return function(){
        step += eachStep
        return step
    }
}



const stepCounter = createStepCounter(5);
console.log(stepCounter());  // Output: 5
console.log(stepCounter());  // Output: 10
console.log(stepCounter());  // Output: 15
