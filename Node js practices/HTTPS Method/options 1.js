fetch('https://reqres.in/api/users/2', {
    method: 'OPTIONS'
})
    .then(res => res.headers.get('Allow'))
    .then(data => console.log('Supported methods:  ', data))
    .catch(error => console.error('Error occurrancy: ', error))