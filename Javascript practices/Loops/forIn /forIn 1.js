const person = { name: 'Alice', age: 25, city: 'New York' };
for (const key in person) {
  console.log(`${key}: ${person[key]}`); // Outputs: name: Alice, age: 25, city: New York
}