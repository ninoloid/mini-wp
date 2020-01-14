const express = require('express')
const articleRouter = express.Router()
const { articleController } = require('../controllers')
const authenticated = require('../middlewares/authentication')

articleRouter.use(authenticated)
articleRouter.get('/', articleController.showArticle)
articleRouter.post('/', articleController.addArticle)
articleRouter.put('/:id', articleController.updateArticle)
articleRouter.delete('/:id', articleController.deleteArticle)

module.exports = articleRouter