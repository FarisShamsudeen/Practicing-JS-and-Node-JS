fetch('https://api.publicapis.org/entries')
    // .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error occured: ', error))