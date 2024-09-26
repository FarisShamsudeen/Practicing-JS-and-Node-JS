// Object.freeze():
// Completely prevents modifications to an object.
    // You cannot:
        // Add new properties.
        // Delete existing properties.
        // Modify the values of existing properties.
// This makes the object fully immutable (except for nested objects).


// const user = { name: "John", age: 30 };
// Object.freeze(user);

// // Attempt to modify properties
// user.age = 35; // Will fail
// user.city = "New York"; // Will fail
// delete user.name; // Will fail

// console.log(user); 
// // Output: { name: "John", age: 30 } (unchanged)

// _______________________________________________________________________________________________________

// const config = { mode: "production", debug: false };
// Object.freeze(config);

// // Try to change existing properties or add new ones
// config.debug = true;  // Will fail
// config.version = "1.0";  // Will fail

// console.log(config); 
// // Output: { mode: "production", debug: false } (unchanged)

// _______________________________________________________________________________________________________

// const settings = { theme: "dark", notifications: true };
// settings.theme = 'light'
// Object.freeze(settings)
// settings.notifications = false
// console.log(settings);

// _______________________________________________________________________________________________________

// const user = { name: "Alice", preferences: { language: "en", theme: "dark" } };

// user.name = 'Faris'

// Object.freeze(user)

// user.preferences.language = 'mal'

// console.log(user);