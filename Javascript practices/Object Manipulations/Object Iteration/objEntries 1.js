const product = {
    name: "Laptop",
    price: 1200,
    stock: 30
  };

const product1 = Object.fromEntries(Object.entries(product).map(([key, value]) => [key.toUpperCase(), value]))
console.log(product)
console.log(product1)