const person = {
    name: 'Faris', 
    greet: function(){
        console.log(`Hello! My name is ${this.name}`);
    }
}

const anotherPerson = {
    name: 'Adnan'
}

person.greet.call(anotherPerson)

person.greet.apply(anotherPerson)

const boundGreet = 
person.greet.bind(anotherPerson)

boundGreet()