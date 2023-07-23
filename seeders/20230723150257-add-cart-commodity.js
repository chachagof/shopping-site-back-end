'use strict'
const { Cart, Commodity } = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const cart = await Cart.findAll({
      raw: true,
      attributes: ['id']
    })
    const commodity = await Commodity.findAll({
      raw: true,
      attributes: ['id', 'inventory']
    })
    const CartCommodities = Array.from({ length: 20 }).map((data, i) => {
      const randomCommodity = commodity[Math.floor(Math.random() * commodity.length)]
      return {
        amount: randomCommodity.inventory,
        commodity_id: randomCommodity.id,
        cart_id: cart[Math.floor(Math.random() * cart.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    })
    await queryInterface.bulkInsert('CartCommodities', CartCommodities, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CartCommodities', null, {})
  }
}
