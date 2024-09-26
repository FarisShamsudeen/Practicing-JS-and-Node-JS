// for...in loop: Iterates over all enumerable properties of an object.

const user = { name: "Alice", age: 25, city: "New York" };

for(let key in user){
    console.log(`${key}: "${user[key]}"`);
}