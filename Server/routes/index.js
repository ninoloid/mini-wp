const express = require('express')
const router = express.Router()

router.use('/articles', require('./articleRouter'))

module.exports = router