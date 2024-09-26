fetch('https://reqres.in/api/users/285', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'new_email@example.com'
    })
})
    .then(res => res.json())
    .then(data => console.log('User updated ', data))
    .catch(error => console.error('Error occurrancy: ', error))