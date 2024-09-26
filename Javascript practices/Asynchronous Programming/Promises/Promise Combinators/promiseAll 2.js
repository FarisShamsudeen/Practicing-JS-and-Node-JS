const api1 = fetch("https://fakestoreapi.com/products/1");
const api2 = fetch("https://fakestoreapi.com/products/2");
const api3 = fetch("https://fakestoreapi.com/products/3");


Promise.all([api1, api2, api3])
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log(error)
        console.log('Failed')
    })