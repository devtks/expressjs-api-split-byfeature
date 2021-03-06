const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
let jwtVerification = require('./middleware/jwt-verificator')
require('dotenv').config()
const db = require('./db/index');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./users/open-router'))

// All the secure route items must be named router.js
require('./secure_routes').getSecuredRoutes().then(routes => {
  app.use('/api', jwtVerification.checkToken, routes)
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = {
  app
}

