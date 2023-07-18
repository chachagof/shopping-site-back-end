const { Commodity } = require('../models')

const commodityService = {
  createCommodity: (req, cb) => {
    const { name, price, inventory, description } = req.body
    const sellerId = req.params.sellerId
    if (!name || !price || !inventory) throw new Error('所有欄位都是必填的')
    Commodity.create({
      name,
      price,
      inventory,
      description,
      sellerId,
      categoryId: 1// example
    })
      .then(() => cb(null, { status: 200, say: '商品建立成功' }))
      .catch(err => cb(err))
  }
}

module.exports = commodityService
