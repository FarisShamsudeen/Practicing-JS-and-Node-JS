const user = {
    age: 25
}

const handler = {
    set (target, property, value){
        if(property === 'age' && typeof value !== "number") throw new Error('Age must be a number');
        target[property] = value;
        return true;
    }
}

const proxyUser = new Proxy(user, handler)

// proxyUser.age = '42'

try {
    proxyUser.age = 32
} catch (e) {
    console.log(e)
}

console.log(proxyUser.age)