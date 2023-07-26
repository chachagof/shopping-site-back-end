const { Commodity, Seller, Category } = require('../models')
const { Op } = require('sequelize')

const commodityService = {
  // create
  createCommodity: (req, cb) => {
    const { name, price, avatar, inventory, description, categoryId } = req.body
    const sellerId = req.user.id
    if (!name || !price || !inventory) throw new Error('所有欄位都是必填的')
    Commodity.create({
      name,
      price,
      avatar,
      inventory,
      description,
      sellerId,
      categoryId
    })
      .then(() => cb(null, { status: 200, message: '商品建立成功' }))
      .catch(err => cb(err))
  },
  // edit
  editCommodity: (req, cb) => {
    const { name, price, inventory, description, avatar } = req.body
    const { commodityId } = req.params
    if (!name || !price || !inventory) throw new Error('所有欄位都是必填的')
    Commodity.findByPk(commodityId)
      .then(commodity => {
        if (!commodity) throw new Error('查無此商品')
        return commodity.update({
          name,
          price,
          inventory,
          avatar,
          description
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
  getCommodities: async (req, cb) => {
    try {
      const condition = {}
      // category
      if (req.query.category) {
        const categories = await Category.findAll({
          where: {
            name: {
              [Op.startsWith]: req.query.category
            }
          }
        })
        const categoryId = categories.map(category => category.id)
        condition.categoryId = { [Op.or]: categoryId }
      }
      // commodity name
      if (req.query.name) {
        condition.name = { [Op.startsWith]: req.query.name }
      }
      // commodity's seller name
      if (req.query.seller) {
        const sellers = await Seller.findAll({
          where: {
            name: {
              [Op.startsWith]: req.query.seller
            }
          },
          raw: true
        })
        const sellerId = sellers.map(seller => seller.id)
        condition.sellerId = { [Op.or]: sellerId }
      }
      // price
      if (req.query.price) {
        const priceRange = req.query.price.split(',').map(element => +element)
        condition.price = { [Op.between]: priceRange }
      }
      const commodities = await Commodity.findAll({
        where: condition,
        raw: true
      })
      return cb(null, { status: 200, data: commodities })
    } catch (err) {
      return cb(err)
    }
  },
  // read one
  getCommodity: (req, cb) => {
    const { commodityId } = req.params
    Commodity.findByPk(commodityId)
      .then(commodity => {
        if (!commodity) throw new Error('查無此商品')
        return cb(null, { status: 200, data: commodity.toJSON() })
      })
      .catch(err => cb(err))
  }
}

module.exports = commodityService
