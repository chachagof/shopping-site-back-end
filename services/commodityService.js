const { Commodity, Seller } = require('../models')
const { Op } = require('sequelize')

const commodityService = {
  // create
  createCommodity: (req, cb) => {
    const { name, price, inventory, description } = req.body
    const sellerId = req.user.id
    if (!name || !price || !inventory) throw new Error('所有欄位都是必填的')
    Commodity.create({
      name,
      price,
      inventory,
      description,
      sellerId,
      categoryId: 1// example
    })
      .then(() => cb(null, { status: 200, message: '商品建立成功' }))
      .catch(err => cb(err))
  },
  // edit
  editCommodity: (req, cb) => {
    const { name, price, inventory, description } = req.body
    const { commodityId } = req.params
    if (!name || !price || !inventory) throw new Error('所有欄位都是必填的')
    Commodity.findByPk(commodityId)
      .then(commodity => {
        if (!commodity) throw new Error('查無此商品')
        return commodity.update({
          name,
          price,
          inventory,
          description,
          categoryId: 1// example
        })
      })
      .then(() => cb(null, { status: 200, message: '商品修改成功' }))
      .catch(err => cb(err))
  },
  // delete
  deleteCommodity: (req, cb) => {
    const { commodityId } = req.params
    Commodity.findByPk(commodityId)
      .then(commodity => {
        if (!commodity) throw new Error('查無此商品')
        return commodity.destroy()
      })
      .then(() => cb(null, { status: 200, message: '商品刪除成功' }))
      .catch(err => cb(err))
  },
  // read all
  getCommodities: (req, cb) => {
    const condition = {}
    if (req.query.category) {
      condition.categoryId = +req.query.category
    }
    Commodity.findAll({
      where: condition,
      raw: true
    })
      .then(commodities => {
        return cb(null, commodities)
      })
      .catch(err => cb(err))
  }
}

module.exports = commodityService
