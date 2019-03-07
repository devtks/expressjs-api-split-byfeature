const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
  info: {
    title: 'REST API for my Yannick App', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'This is the REST API for my stuff' // short description of the app
  },
  host: 'localhost:3000', // the host or url of the app
  basePath: '/' // the basepath of your endpoint
}

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./*/*.yaml']
}
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options)

module.exports = { swaggerSpec }
