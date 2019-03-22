const User = require('./user.model')
let jwt = require('jsonwebtoken')
const config = require('../config')
const bcrypt = require('bcrypt')

const createUser = async (username, password) => {
  try {
    var result = await User.create({ username, password })
    return result
  } catch (e) {
    throw new Error(e.message)
  }
}

const getAuthToken = async (username, password) => {
  try {
    let currentUser = await User.find({ 'username': username });
    let match;
    if (currentUser[0] == undefined) {
      match = false;
    } else {
      match = await bcrypt.compare(password, currentUser[0].password);
    }

    if (match) {
      let token = jwt.sign({ username: username }, config.secret, {
        expiresIn: '24h' // expires in 24 hours
      })
      return {
        success: true,
        message: 'Authentication successful!',
        token: token
      }
    } else {
      return {
        success: false,
        message: 'Incorrect username or password',
        token: null
      }
    }
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  createUser,
  getAuthToken
}
