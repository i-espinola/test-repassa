'use strict'

// IMPORTS
import http from 'http'
import express from 'express'
import setup from './setup'
import database from './database'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()
app.use('/api', routes)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const server = http.createServer(app)
server.listen(setup.port, () => {
  console.log(setup.banner)
})

export default server
