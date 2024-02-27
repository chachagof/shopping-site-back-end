'use strict'
const bcrypt = require('bcryptjs')
const { faker } = require('@faker-js/faker')

const seller = Array.from({ length: 5 }).map((data, i) => ({
  name: `seller00${i + 1}`,
  account: `seller00${i + 1}`,
  password: bcrypt.hashSync('titaner', bcrypt.genSaltSync(10), null),
  role: 'seller',
  avatar: 'https://placedog.net/200/200',
  description: faker.lorem.paragraph().substring(0, 160),
  created_at: new Date(),
  updated_at: new Date()
}))
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sellers', seller, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sellers', null, {})
  }
}
