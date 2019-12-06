// Server instance and settings
const setup = {
  path: 'build/',
  port: process.env.PORT || 3030,
  api: '/api',
  headers: {
    accept: 'application/json'
  },
  banner: '\nExpress server on\n',
  favicon: 'build/favicon.ico',
  mongodb: {
    host: 'mongodb://localhost/mongodb',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
}

export default setup
