const router = require('express').Router();

router.post('/addBlogpost', require('./blog-post.controller').postBlogPost)
router.get('/blogposts', require('./blog-post.controller').getBlogPosts)

module.exports = router