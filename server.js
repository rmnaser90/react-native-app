const express = require('express')
const app = express()
const path= require('path')

app.use(express.static(path.join(__dirname,'web-build')))
app.use(express.static(path.join(__dirname,'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const PORT = 3001
app.listen(PORT, function () {
    console.log("up and listening on port " + PORT);
})
