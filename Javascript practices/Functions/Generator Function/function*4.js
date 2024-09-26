async function* fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    for(let post of posts){
        yield post
    }
}


const getPost = fetchData()

getPost.next().then(response => console.log(response.value))
getPost.next().then(response => console.log(response.value))
getPost.next().then(response => console.log(response.value))
getPost.next().then(response => console.log(response.value))
getPost.next().then(response => console.log(response.value))