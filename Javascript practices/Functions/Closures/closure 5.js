function Person(name) {
    let _name = name

    return {
        getName: function (){
            return _name
        }, 
        setName: function (newName){
            _name = newName
        }
    }
}

const person = Person('Faris')
console.log(person.getName())
person.setName('Shifana')
console.log(person.getName())
