const cartService = require('../services/cartService')

const cartController = {
  addToCart: (req, res, next) => {
    cartService.addToCart(req, (err, data) => err ? next(err) : res.json(data))
  },
  getCart: (req, res, next) => {
    cartService.getCart(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = cartController