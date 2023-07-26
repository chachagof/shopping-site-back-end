const { CartCommodity, Commodity } = require('../models')

const cartService = {
  addToCart: (req, cb) => {
    const commodityId = req.params.commodityId
    const cartId = req.user.Cart.id
    CartCommodity.findOne({
      where: {
        commodityId,
        cartId
      }
    })
      .then(cartcommodity => {
        if (!cartcommodity) {
          return CartCommodity.create({
            amount: 1,
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
  },
  editCart: (req, cb) => {
    const commodityId = req.params.commodityId
    const cartId = req.user.Cart.id
    CartCommodity.findOne({
      where: {
        commodityId,
        cartId
      }
    })
      .then(cartcommodity => cartcommodity.decrement('amount', { by: 1 }))
      .then(() => cb(null, { status: 200, message: '成功從購物車減少' }))
      .catch(err => cb(err))
  },
  deleteCart: (req, cb) => {
    const commodityId = req.params.commodityId
    const cartId = req.user.Cart.id
    CartCommodity.findOne({
      where: {
        commodityId,
        cartId
      }
    })
      .then(cartcommodity => {
        if (!cartcommodity) throw new Error('查無此商品')
        return cartcommodity.destroy()
      })
      .then(() => cb(null, { status: 200, message: '商品刪除成功' }))
      .catch(err => cb(err))
  },
  checkCart: async (req, cb) => {
    try {
      const { updateData } = req.body
      const cartId = req.user.Cart.id
      const res = await updateData.forEach(({ id, inventory }) => {
        Commodity.update({ inventory }, { where: { id } })
      })
      await CartCommodity.destroy({
        where: { cartId }
      })
      console.log(res)
      return cb(null, { status: 200, message: '完成結帳' })
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = cartService
