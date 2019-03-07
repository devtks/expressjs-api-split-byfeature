const { authenticateUser, creatUser } = require('./auth.service')

const loginUser = async (req, res, next) => {
  const { username, password } = req.body
  try {
    let result = await authenticateUser(username, password)
    res.json(result)
    next()
  } catch (e) {
    console.log(e.message)
    res.status(500) && next(error)
  }
}

const createNewUser = async (req, res, next) => {
  const { username, password } = req.body
  try {
    let result = await creatUser(username, password)
    res.json(result)
    next()
  } catch (e) {
    console.log(e.message)
    res.status(500).send('Invalid JSON string')
  }
}

module.exports = {
  loginUser,
  createNewUser
}
