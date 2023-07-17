const buyerServices = require('../services/buyerServices')

const buyerControllers = {
  buyerSignin: (req, res, next) => {
    buyerServices.buyerSignin(req, (err, data) => err ? next(err) : res.json(data))
  },
  buyerSignup: (req, res, next) => {
    buyerServices.buyerSignup(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = buyerControllers
