const promise1 = Promise.resolve(100);
const promise2 = Promise.reject("Failure in promise2");
const promise3 = Promise.resolve(300);

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log(results)
    })