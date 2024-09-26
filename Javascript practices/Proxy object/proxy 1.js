const person = {
    name: 'faris', 
    age: 19
}

const handler = {
    get (target, property){
        console.log(`Getting Property ${property}`)
        return target[property]
    }
}

const proxyPerson = new Proxy(person, handler)

console.log(proxyPerson.name)
console.log(proxyPerson.name)

// a funny example

// const pennu = {
//     name: 'farisa', 
//     age: 19
// }

// const cherkkan = {
//     get (target, property){
//         console.log(`Getting Property ${property}`)
//         return target[property]
//     }
// }

// const penninteVappa = new Proxy(pennu, cherkkan)

// console.log(penninteVappa.name)
// console.log(penninteVappa.age)