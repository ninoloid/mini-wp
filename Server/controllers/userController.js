const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

module.exports = {
  register(req, res) {
    const { username, email, password } = req.body
    const img_url = req.body.img_url || 'https://ryanacademy.ie/wp-content/uploads/2017/04/user-placeholder-300x300.png'
    User
      .create({ username, email, password, img_url })
      .then(user => {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET)
        res
          .status(201)
          .json({ msg: 'register success', token })
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ msg: err.message })
      })
  },

  login(req, res) {
    const { email, password } = req.body
    User.findOne({ email })
      .then(user => {
        if (!user) {
          res
            .status(409)
            .json({ msg: 'Email isn\'t registered' })
        } else {
          const valid = bcryptjs.compareSync(password, user.password)
          if (valid) {
            const token = jwt.sign({ _id: user._id }, process.env.SECRET)
            req.headers.user_token = token
            res
              .status(200)
              .json({ token })
          } else {
            res
              .status(403)
              .json({ msg: 'Password Invalid' })
          }
        }
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ msg: err.message })
      })
  }
}
