// Set up mongoose connection
import setup from '../index'
import { connect, connection } from 'mongoose'

console.log(setup.mongodb.uri)
connect(setup.mongodb.uri, setup.mongodb.options)
connection.once('error', console.error.bind(console, 'MongoDB connection error'))
connection.once('open', console.log.bind(console, 'MongoDB connection ok'))

export default connection
