fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'  
    },
    body: JSON.stringify({
        name: 'John Adnan',
        email: 'joeAdnan@example.com'
    })
})

.then(res => res.json)
.then(data => console.log(data))
.catch(error => console.error('Error occurance : ', error))