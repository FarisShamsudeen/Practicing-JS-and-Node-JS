const car = { model: "Toyota", year: 2021, color: "red" };

const keys = Object.keys(car)
console.log(keys);

keys.forEach(key => console.log(` ${key}: ${car[key]}`))

