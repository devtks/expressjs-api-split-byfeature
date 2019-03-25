const router = require('express').Router();

router.post('/addBlogpost', require('./blog-post.controller').postBlogPost)
router.get('/blogposts', require('./blog-post.controller').getBlogPosts)
router.get('/blogpost/:id', require('./blog-post.controller').getSingleBlogPost)

module.exports = router