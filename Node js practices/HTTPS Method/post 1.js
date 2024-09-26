fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        email: 'johndoe@example.com'
    })
})
    .then(res => res.json())
    .then(data => console.log('New user data created: ', data))
    .catch(error => console.error('Error occurrancy: ', error))