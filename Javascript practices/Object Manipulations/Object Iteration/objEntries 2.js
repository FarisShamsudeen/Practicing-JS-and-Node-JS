const inventory = {
  apple: 10,
  orange: 0,
  banana: 5,
  mango: 0
};


const zeroStock = Object.fromEntries(Object.entries(inventory).filter(([item, stock]) => stock !== 0))

console.log(zeroStock)