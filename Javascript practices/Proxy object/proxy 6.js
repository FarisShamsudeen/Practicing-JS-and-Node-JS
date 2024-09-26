const user = {
    username: "john_doe",
    password: "123456"
  };

  
const handler = {
    get(target, property) {
        if(property === 'password'){
            throw new Error('youre not allowed to read the password')
        }
        if (property === 'username') {
            return target[property]
        }
    }
}

const proxyUser = new Proxy(user, handler)

try {
    console.log(proxyUser.password)
} catch (error) {
    console.error(error.message);
}

console.log(proxyUser.username)