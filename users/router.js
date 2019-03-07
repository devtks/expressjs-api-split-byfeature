const router = require('express').Router();

router.post('/login', require('./auth.controller').loginUser)
router.post('/register', require('./auth.controller').createNewUser)
module.exports = router