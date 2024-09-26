const express = require('express')
const app = express()
const PORT = 3006
const {json} = require('body-parser')


app.get('/', (req,res) => {
    const name = req.query
    res.send(`${JSON.stringify(name)}`)
    console.log(name)
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})