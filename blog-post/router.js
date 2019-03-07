const router = require('express').Router();

router.post('/blogpost', require('./blog-post.controller').postBlogpost)

module.exports = router