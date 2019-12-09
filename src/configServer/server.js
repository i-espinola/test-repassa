'use strict'

// IMPORTS
import http from 'http'
import express from 'express'
import setup from './setup'
import bodyParser from 'body-parser'

// Set up mongoose connection
const mongoose = require('mongoose')
const devDbUrl = setup.mongodb.uri
const mongoDB = process.env.MONGODB_URI || devDbUrl
mongoose.connect(mongoDB, setup.mongodb.options)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const product = require('./routes') // Imports routes for the products
const app = express()
app.use('/products', product)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.get(setup.prefixe + ':list', (request, response) => {
//   response
//     .status(setup.sucess.status)
//     .set(setup.headers)
//     .json(request.query)
//     .end()
// })

// app.post(setup.prefixe + ':add', (request, response) => {
//   response
//     .status(setup.sucess.status)
//     .set(setup.headers)
//     .json(request.query)
//     .end()
// })

// app.put(setup.prefixe + ':edit', (request, response) => {
//   response
//     .status(setup.sucess.status)
//     .set(setup.headers)
//     .json(request.query)
//     .end()
// })

// app.delete(setup.prefixe + ':del', (request, response) => {
//   response
//     .status(setup.sucess.status)
//     .set(setup.headers)
//     .json(request.query)
//     .end()
// })

// app.all('/*', (request, response) => {
//   response
//     .status(setup.error.status)
//     .set(setup.headers)
//     .json(setup.error)
//     .end()
// })

const server = http.createServer(app)
server.listen(setup.port, () => {
  console.log(setup.banner)
})

export default server
