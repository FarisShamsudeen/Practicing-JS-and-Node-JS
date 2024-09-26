function secretMessage(){
    let message = "This is a secret"
    return {
        getMessage: function(){
            return message;
        }, 
        setMessage: function (newMessage){
            message = newMessage
        }
    }
}

const secret = secretMessage()
console.log(secret.getMessage())
secret.setMessage('New Secret')
console.log(secret.getMessage())