function outerFunction() {
    let outerVariable = 'Im from the outer Scope'

    function innerFunction() {
        console.log(outerVariable)
    }

    return innerFunction

}

const closureFunction = outerFunction()

closureFunction()