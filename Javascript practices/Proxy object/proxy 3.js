const product = {
    id: 101, 
    name: 'laptop'
}

const handler = {
    deleteProperty(target, property) {
        if(property == 'id') throw new Error('ID Property cannot be deleted')
        delete target[property]
        return true
    }
}

const proxyProperty = new Proxy(product, handler)

console.log(proxyProperty)

delete proxyProperty.name

console.log(proxyProperty)

try {
    delete proxyProperty.id
} catch (error) {
    console.log(error)
}

console.log(proxyProperty)