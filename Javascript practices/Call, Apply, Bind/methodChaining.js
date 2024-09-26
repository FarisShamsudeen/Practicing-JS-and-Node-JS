const person = {
    name: 'Faris', 
    greet: function() {
        console.log(`Assalamualaikum, my name is ${this.name}`)
        return this
    }, 
    age: 30,
    getAge: function(){
        console.log(`Assalamualaikum, my age is ${this.age}`)
        return this
    }
}

person.greet().getAge()