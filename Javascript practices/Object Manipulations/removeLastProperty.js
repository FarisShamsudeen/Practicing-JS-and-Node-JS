function removeLastProperty(obj){
    const keys = Object.keys(obj)
    const lastkey = keys.pop()
    delete obj[lastkey]
}

const object = { a: 1, b: 2, c: 3, d: 4 };
removeLastProperty(object);
console.log(object); // Output: { a: 1, b: 2 }