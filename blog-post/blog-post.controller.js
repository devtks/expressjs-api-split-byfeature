const { createBlogPost, getAllBlogPosts, getBlogPostsByCount, getBlogPostsCount, getBlogPostById } = require('./blog-post.service');

/*
 * call other imported services, or same service but different functions here if you need to
 */
const postBlogPost = async (req, res, next) => {
  const { user, content } = req.body
  try {
    await createBlogPost(user, content)
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.sendStatus(201)
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(e)
  }
}

const getBlogPosts = async (req, res, next) => {
  const { perPage, pageIndex } = req.query
  try {
    if (perPage == null) {
      let result = await getAllBlogPosts()
      res.json(result)
    } else {
      let blogs = await getBlogPostsByCount(Number(perPage), Number(pageIndex))
      let blogPostsCount = await getBlogPostsCount()

      let result = {
        blogs: blogs,
        allBlogsCount: blogPostsCount
      }
      res.json(result)
    }
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(e)
  }
}

const getSingleBlogPost = async (req, res, next) => {
  const { id } = req.params
  try {
    let blog = await getBlogPostById(id)
    let result = {
      blog: blog
    }
    res.json(result)
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(e)
  }
}

module.exports = {
  postBlogPost,
  getBlogPosts,
  getSingleBlogPost
}
