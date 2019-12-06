'use strict'

// IMPORTS
import http from 'http'
import path from 'path'
import express from 'express'
import allowCors from './cors'
import setup from './setup'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'
import queryParser from 'express-query-int'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(setup.path)))
app.use(favicon(setup.favicon))
app.use(bodyParser.json())
app.use(allowCors)
app.use(queryParser())

const server = http.createServer(app)
server.listen(setup.port, () => {
  console.log(setup.banner)
})

export default app
