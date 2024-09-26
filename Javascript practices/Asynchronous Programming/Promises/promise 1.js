
let randomNum = Math.random()

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(randomNum > 0.65){
                resolve('Data Fetched')
            } else {
                reject('Could not fetch the data !')
            }
        }, 1000)
    })
}

fetchData()
    .then((data) => console.log(data, randomNum))
    .catch((error) => console.log(error, randomNum))
    .finally(() => console.log("Operation Ended."))