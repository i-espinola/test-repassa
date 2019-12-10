// Set up mongoose connection
import setup from './setup'
import { mongoose, connect, connection } from 'mongoose'

connect(setup.mongodb.uri, setup.mongodb.options)
connection.on('error', console.error.bind(console, 'MongoDB connection error:'))
connection.once('open', () => { console.log('MongoDB connection on') })
