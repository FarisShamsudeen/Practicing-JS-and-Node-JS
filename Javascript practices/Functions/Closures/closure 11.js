function createLastAccessedTracker(initial){
    let currValue = initial
    let lastValue = undefined

    return {
        setValue: function (newValue){
            lastValue = currValue
            currValue = newValue
        },
        getLastValue: function (){
            return lastValue
        }
    }
}




const tracker = createLastAccessedTracker("initial");
tracker.setValue("new");
console.log(tracker.getLastValue());  // Output: initial
tracker.setValue("latest");
console.log(tracker.getLastValue());  // Output: new
