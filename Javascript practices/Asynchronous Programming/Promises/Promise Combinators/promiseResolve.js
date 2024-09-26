const defaultData = "Default Data";

const promise = Promise.resolve(defaultData)

promise.then(value => {
    console.log(value)
})