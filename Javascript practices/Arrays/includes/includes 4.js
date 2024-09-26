const products = ['Apple', 'Banana', 'Orange', 'Pineapple'];
const searchQuery = 'a';

const filteredProducts = products.filter(product => product.includes(searchQuery))
console.log(filteredProducts)