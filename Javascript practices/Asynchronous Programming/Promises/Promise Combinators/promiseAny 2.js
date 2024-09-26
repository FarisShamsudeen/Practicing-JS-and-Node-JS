const promiseA = Promise.reject("Error in promiseA");
const promiseB = Promise.reject("Error in promiseB");
const promiseC = Promise.resolve("Success in promiseC");

Promise.any([promiseA, promiseB, promiseC])
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log(error)
    })