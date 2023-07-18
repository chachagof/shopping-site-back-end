const sellerService = require('../services/sellerService')

const sellerController = {
  sellerSignup: (req, res, next) => {
    sellerService.sellerSignup(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = sellerController
