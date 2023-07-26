const categoryService = require('../services/categoryService')

const categoryController = {
  getCategory: (req, res, next) => {
    categoryService.getCategory(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = categoryController
