'use strict'
const { Buyer } = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const buyerCart = await Buyer.findAll({
      raw: true
    })
    const cart = buyerCart.map(data => {
      return {
        buyer_id: data.id,
        created_at: data.createdAt,
        updated_at: data.updatedAt
      }
    })
    await queryInterface.bulkInsert('carts', cart, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carts', null, {})
  }
}
