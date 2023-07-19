const { CartCommodity } = require('../models')

const cartService = {
  addToCart: (req, cb) => {
    const commodityId = req.params.commodityId
    const cartId = req.user.Cart.id
    CartCommodity.create({
      commodityId,
      cartId
    })
      .then(() => cb(null, { status: 200, message: '成功加入購物車' }))
      .catch(err => cb(err))
  },
  getCart: (req, cb) => {
    const cartId = req.user.Cart.id
    CartCommodity.findAll({
      where: { cartId }
    })
      .then(commodities => cb(null, { status: 200, data: commodities }))
      .catch(err => cb(err))
  }
}

module.exports = cartService
