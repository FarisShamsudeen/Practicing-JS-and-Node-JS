const settings = {
    theme: "dark",
    notifications: true
  };

  
const handler = {
    set(target, property, value){
        if ( property === 'theme' && typeof value !== "string"){
            throw new Error(`The input for the ${property} must be in string value`)
        }
        target[property] = value
        console.log(`Value in the ${property} property has changed to ${target[property]}`)
        return true
    }
}

const proxySettings = new Proxy(settings, handler)

proxySettings.theme = 'light'

console.log(proxySettings)