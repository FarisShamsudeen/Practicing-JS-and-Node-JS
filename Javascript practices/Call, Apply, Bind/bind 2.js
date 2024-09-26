const calculator = {
    add: function(x, y){
        return x + y
    }
}

const addWithContext = calculator.add.bind(calculator)

const result = addWithContext(5, 5)

console.log(result)