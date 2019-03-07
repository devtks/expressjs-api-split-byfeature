const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const logger = require('./logger/logger')
let jwtVerif = require('./middleware/jwt-verificator')
require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var myLogger = function(req, res, next) {
  logger.debug('Some debug messages')
  next()
}

app.use(myLogger)

app.use('/', require('./users/router'))
app.use('/api', jwtVerif.checkToken, require('./api-documentation/router'))
app.use('/api', require('./blog-post/router'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = {
  app
}
