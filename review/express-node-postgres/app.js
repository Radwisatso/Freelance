const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/1")
app.get("/2")
app.get("/3")
app.get("/4")
app.get("/5")

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})