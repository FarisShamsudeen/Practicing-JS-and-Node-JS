const user = {
  name: "John",
  age: 30,
  city: "New York"
};

const userArray = []

for(let [key, value] of Object.entries(user)){
  userArray.push(`${key}: ${value}`)
}

console.log(userArray)