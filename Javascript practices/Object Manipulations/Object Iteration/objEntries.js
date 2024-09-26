const product = { name: "Laptop", price: 1200, stock: 30 };

const entries = Object.entries(product)

console.log(entries);

entries.forEach(([key, value]) => console.log(`${key}: ${value}`))