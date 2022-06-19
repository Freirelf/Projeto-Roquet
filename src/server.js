const express = require('express') // express é o server   
const route = require('./route')
const path = require('path')
// const { decode } = require('punycode')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views')) //dirname (variavel global) é o caminho 

server.use(express.urlencoded({extended:true}))

server.use(route)

server.listen(3000, () => console.log("Rodandado"))

