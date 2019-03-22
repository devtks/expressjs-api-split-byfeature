var mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB Connected'))
  .catch(err => console.error(err))

module.exports = {
  mongoose
}
