const router = require('express').Router();

router.post('/login', require('./user.controller').loginUser)
router.post('/register', require('./user.controller').createNewUser)
module.exports = router