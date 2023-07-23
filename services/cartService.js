const { CartCommodity, Commodity } = require('../models')

const cartService = {
  addToCart: (req, cb) => {
    const commodityId = req.params.commodityId
    const cartId = req.user.Cart.id
    const { amount } = req.body
    CartCommodity.findOne({
      where: {
        commodityId,
        cartId
      }
    })
      .then(cartcommodity => {
        if (!cartcommodity) {
          return CartCommodity.create({
            amount,
            commodityId,
            cartId
          })
        }
        return cartcommodity.increment('amount', { by: 1 })
      })
      .then(() => cb(null, { status: 200, message: '成功加入購物車' }))
      .catch(err => cb(err))
  },
  getCart: (req, cb) => {
    const cartId = req.user.Cart.id
    CartCommodity.findAll({
      where: { cartId },
      include: [Commodity]
    })
      .then(commodities => cb(null, { status: 200, data: commodities }))
      .catch(err => cb(err))
  }
}

module.exports = cartService
