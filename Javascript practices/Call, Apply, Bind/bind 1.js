function greet(greeting, name){
    console.log(`${greeting} ${name}`)
}

const greetWithSalam = greet.bind(null, 'Assalamulalaikum')
greetWithSalam('Faris');