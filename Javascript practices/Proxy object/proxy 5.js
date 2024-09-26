const profile = {
    name: "Alice",
    age: 25
  };

  
const handler = {
    set(target, property, value){
        throw new Error('The object is read-only')
    }, 
    get(target, property){
        return target[property]
    }
}

const proxyProfile = new Proxy(profile, handler)

try {
    proxyProfile.name = 'Faris'
} catch(error) {
    console.error(error.message)
}

console.log(proxyProfile)