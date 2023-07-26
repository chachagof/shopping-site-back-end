const { Category } = require('../models')

const categoryService = {
  getCategory: (req, cb) => {
    Category.findAll()
      .then(category => cb(null, { status: 200, data: category }))
      .catch(err => console.log(err))
  }
}

module.exports = categoryService
