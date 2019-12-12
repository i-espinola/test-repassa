// IMPORTS
// eslint-disable-next-line no-unused-vars
import database from './confServer/database'
import routes from './confServer/routes'
import setup from './confServer/setup'
import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'

const app = express()
app.use(setup.prefixe, routes)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const server = http.createServer(app)
server.listen(setup.port, () => {
  console.log(`${setup.banner} --port ${setup.port}`)
})
