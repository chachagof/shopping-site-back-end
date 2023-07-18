const sellerService = require('../services/sellerService')

const sellerController = {
  sellerSignin: (req, res, next) => {
    sellerService.sellerSignin(req, (err, data) => err ? next(err) : res.json(data))
  },
  sellerSignup: (req, res, next) => {
    sellerService.sellerSignup(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = sellerController
