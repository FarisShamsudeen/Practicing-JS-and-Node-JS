const people = {
    Alice: 25,
    Bob: 30,
    Carol: 35
  };

  
const totalAge = Object.values(people).reduce((total, age) => total + age)

console.log(totalAge)