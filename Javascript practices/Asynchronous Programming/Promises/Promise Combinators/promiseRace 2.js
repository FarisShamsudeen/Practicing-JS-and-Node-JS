const fastTask = new Promise(resolve => setTimeout(resolve, 100, "Fast"));
const slowTask = new Promise(resolve => setTimeout(resolve, 500, "Slow"));

Promise.race([fastTask, slowTask])
    .then(first => {
        console.log(first)
    })