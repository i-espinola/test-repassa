'use strict'

import server from './config/server'
import routes from './config/routes'
import './config/database'

// eslint-disable-next-line no-unused-vars
const route = routes(server)
