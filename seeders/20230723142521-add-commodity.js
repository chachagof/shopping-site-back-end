'use strict'
const { Category, Seller } = require('../models')
const { faker } = require('@faker-js/faker')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const category = await Category.findAll({ raw: true, attributes: ['id'] })
    const seller = await Seller.findAll({ raw: true, attributes: ['id'] })
    const commodities = Array.from({ length: 30 }).map((data, i) => {
      return {
        name: faker.commerce.product(),
        description: faker.lorem.paragraph().substring(0, 160),
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 10),
        avatar: 'https://placedog.net/201/201',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    })
    await queryInterface.bulkInsert('Commodities', commodities, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Commodities', null, {})
  }
}
