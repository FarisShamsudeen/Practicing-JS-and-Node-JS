const promise1 = Promise.reject("Error in promise1");
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve("Error in promise3");

Promise.any([promise1, promise2, promise3])
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log(error)
    })


// Promise.any() resolves as soon as the first promise resolves, ignoring rejected promises unless all promises reject.