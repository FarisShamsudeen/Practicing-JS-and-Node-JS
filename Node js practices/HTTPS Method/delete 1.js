fetch('https://reqres.in/api/users/285', {
    method: 'DELETE'
})
    .then(res => res.json())
    .then(data => console.log('Deleted Data:  ', data))
    .catch(error => console.error('Error occurrancy: ', error))