const { createUser, getAuthToken } = require('./user.service')

const createNewUser = async (req, res, next) => {
    const { username, password } = req.body
    try {
      let result = await createUser(username, password)
      res.json(result)
      next()
    } catch (e) {
      console.log(e.message)
      res.status(500).send('Invalid JSON string')
    }
}

const loginUser = async (req, res, next) => {
  const { username, password } = req.body
  try {
    let result = await getAuthToken(username, password)
    res.json(result)
    next()
  } catch (e) {
    console.log(e.message)
    res.status(500) && next(e)
  }
}

module.exports = {
    createNewUser,
    loginUser
}
  