const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 1000, 'Fast')
})

const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 1500, 'Slow')
})

Promise.race([promise1, promise2])
    .then(winner => {
        console.log(winner)
    })