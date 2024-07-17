const express = require('express')
const app = express()
const carRouter = require("./car")
global.pool = require("./db_connection")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/car', carRouter)

app.get('/', (req, res) => {
    res.send("hello car")
})

app.listen(8080, () => {
    console.log("server listeing on 8080")
})