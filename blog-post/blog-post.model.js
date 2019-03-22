const mongoose = require('mongoose')

const BlogPostSchema = new mongoose.Schema({
    user: String,
    content: {
        title: String,
        post: String,
        date_added: Date
    }
})

module.exports = mongoose.model('Blog', BlogPostSchema)
