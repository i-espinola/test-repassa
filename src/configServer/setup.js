// Server instance and settings
const setup = {
  path: 'build/',
  port: process.env.PORT || 3030,
  prefixe: '/api/',
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
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  error: {
    status: 400,
    message: 'bad request'
  },
  sucess: {
    status: 200,
    message: 'ok'
  }
}

export default setup
