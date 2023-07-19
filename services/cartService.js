const { CartCommodity } = require('../models')

const cartService = {
  addToCart: (req, cb) => {
    const commodityId = req.params.commodityId
    const cartId = req.user.toJSON().Cart.id
    console.log(cartId, commodityId)
    CartCommodity.create({
      commodityId,
      cartId
    })
      .then(() => cb(null, { status: 200, message: '成功加入購物車' }))
      .catch(err => cb(err))
  }
}

module.exports = cartService
