const buyerServices = require('../services/buyerServices')

const buyerControllers = {
  buyerSignup: (req, res, next) => {
    buyerServices.buyerSignUp(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = buyerControllers
