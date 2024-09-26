const promise1 = Promise.resolve(10)
const promise2 = Promise.reject(20)
const promise3 = Promise.resolve(30)

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values)
    })
    .catch(error => {
        console.log(error)
    })

    // Promise.all() waits for all promises to resolve and returns their values as an array. If any promise rejects, it will catch the error.