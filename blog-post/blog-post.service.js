const BlogPost = require('./blog-post.model')

/*
 * if you need to make calls to additional tables, data stores (Redis, for example),
 * or call an external endpoint as part of creating the blogpost, add them to this service
 */
const createBlogPost = async (user, content) => {
  try {
    content.date_added = new Date()
    return await BlogPost.create({ user, content })
  } catch (e) {
    throw new Error(e.message)
  }
}

const getAllBlogPosts = async () => {
  try {
    return await BlogPost.find({})
  } catch (e) {
    throw new Error(e.message)
  }
}

const getBlogPostsByCount = async (perPage, pageIndex) => {
  try {
    return await BlogPost.find()
      .skip(perPage * pageIndex)
      .limit(perPage)
      .sort({ current_date: 1 })
  } catch (e) {
    throw new Error(e.message)
  }
}

const getBlogPostsCount = async () => {
  try {
    return await BlogPost.count()
  } catch (e) {
    throw new Error(e.message)
  }
}

const getBlogPostById = async (id) => {
  try {
    return await BlogPost.find({ "_id": Object(id) })
  } catch (e) {
    throw new Error(e.message)
  }
}

const deleteBlogPostById = async (id) => {
  try {
    return await BlogPost.deleteOne({ "_id": Object(id) })
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostsByCount,
  getBlogPostsCount,
  getBlogPostById,
  deleteBlogPostById
}
