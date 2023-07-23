'use strict'

const categories = ['Electronics', 'Clothing', 'Beauty', 'Furniture', 'Food', 'Sport'].map(category => {
  return {
    name: category,
    created_at: new Date(),
    updated_at: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', categories, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  }
}
