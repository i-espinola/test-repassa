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
app.options('/*', (req, res) => { res.status(setup.status200.code).set(setup.headers).end() })

const server = http.createServer(app)
server.listen(setup.port, () => {
  console.log(`${setup.banner} --port ${setup.port}`)
})
