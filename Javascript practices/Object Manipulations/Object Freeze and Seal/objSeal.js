// Object.seal():
// Prevents adding or removing properties but allows modifying existing property values.
//     You cannot:
//         Add new properties.
//         Delete existing properties.
//     You can:
//         Modify the values of existing properties.
// This makes the object partially immutable (you can still change values of existing properties).

// _______________________________________________________________________________________________________

// const car = { model: "Toyota", year: 2021 };
// Object.seal(car);

// // Modifying properties works
// car.year = 2022;  // This works

// // Adding or deleting properties will fail
// car.color = "red";  // Will fail
// delete car.model;  // Will fail

// console.log(car); 
// // Output: { model: "Toyota", year: 2022 }

// _______________________________________________________________________________________________________

// const product = { id: 1, name: "Laptop", price: 1000 };
// Object.seal(product);

// // Modifying properties works
// product.price = 1200;  // This works

// // Adding or deleting properties fails
// product.stock = 10;  // Will fail
// delete product.name;  // Will fail

// console.log(product); 
// // Output: { id: 1, name: "Laptop", price: 1200 }

// _______________________________________________________________________________________________________

// const movie = { title: "Inception", rating: 9.0 };

// Object.seal(movie)

// movie.title = 'The Message'

// movie.PGrating = '13+'
// delete movie.rating

// console.log(movie);

// _______________________________________________________________________________________________________

// const profile = { name: "Bob", age: 25 };

// Object.seal(profile)

// profile.name = "Faris"
// profile.place = 'Alappuzha'
// delete profile.age

// console.log(profile);