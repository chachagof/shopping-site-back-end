const buyerService = require('../services/buyerService')

const buyerControllers = {
  buyerSignin: (req, res, next) => {
    buyerService.buyerSignin(req, (err, data) => err ? next(err) : res.json(data))
  },
  buyerSignup: (req, res, next) => {
    buyerService.buyerSignup(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = buyerControllers
