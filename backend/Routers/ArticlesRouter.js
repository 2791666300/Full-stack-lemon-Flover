const express = require('express')

const ArticlesController = require('../Controllers/ArticlesController')


const router = express.Router()


router
   .route('/')
   .get(ArticlesController.getAllArticles)
   .post(ArticlesController.createArticle)

router
   .route('/:id')
   .get(ArticlesController.getArticle)
   .patch(ArticlesController.updateArticle)
   .delete(ArticlesController.deleteArticle)

module.exports = router