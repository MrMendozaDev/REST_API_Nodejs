require("dotenv").config()
const express = require("express")
const http = require("http")
const path = require("path")
const router = require("./controllers/routes")
const {createDB, createTable} = require("./models/querySQL")
var phpExpress = require('php-express')({
    binPath: 'php'
});


const port = process.env.PORT || 8081

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(router)
// set view engine to php-express


app.use(express.static(__dirname + "/public"))

const httpServer = http.createServer(app)

httpServer.listen(port, () => {
    createTable().then((res) => {
        console.log("The Table was created and un server VUEJS in the port ", port)
    })

})