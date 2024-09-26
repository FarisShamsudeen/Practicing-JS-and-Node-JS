const promise1 = Promise.resolve(10)
const promise2 = Promise.reject('Error in promise2')
const promise3 = Promise.resolve(30)

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log(results)
    })

    // Promise.allSettled() returns the status (either "fulfilled" or "rejected") of each promise along with the corresponding value or reason.