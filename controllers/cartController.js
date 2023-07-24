const cartService = require('../services/cartService')

const cartController = {
  addToCart: (req, res, next) => {
    cartService.addToCart(req, (err, data) => err ? next(err) : res.json(data))
  },
  getCart: (req, res, next) => {
    cartService.getCart(req, (err, data) => err ? next(err) : res.json(data))
  },
  editCart: (req, res, next) => {
    cartService.editCart(req, (err, data) => err ? next(err) : res.json(data))
  },
  deleteCart: (req, res, next) => {
    cartService.deleteCart(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = cartController
