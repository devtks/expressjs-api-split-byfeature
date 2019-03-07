const router = require('express').Router();
const { swaggerSpec } = require('./swaggerSpec')
const swaggerUi = require('swagger-ui-express')
router.use('/docs', swaggerUi.serve)
router.get('/docs', swaggerUi.setup(swaggerSpec))

module.exports = router