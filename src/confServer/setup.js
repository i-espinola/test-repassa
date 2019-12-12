// Server instance and settings
const setup = {
  path: 'build/',
  port: process.env.PORT || 3030,
  prefixe: '/api',
  headers: {
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  },
  banner: '\nExpress server on\n',
  favicon: 'build/favicon.ico',
  mongodb: {
    uri: 'mongodb://repassa-api:J#eBYx5WUkYmG8Y@ds253348.mlab.com:53348/heroku_k66nk669',
    options: {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    },
    database: 'heroku_k66nk669',
    user: 'repassa-api',
    collection: 'users'
  },
  status200: {
    code: 200,
    message: 'Ok'
  },
  status400: {
    code: 400,
    message: 'Bad Request'
  },
  status404: {
    code: 404,
    message: 'Not Found'
  },
  status500: {
    code: 500,
    message: 'Internal Server Error'
  }
}

export default setup
