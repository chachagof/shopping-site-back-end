'use strict'
const bcrypt = require('bcryptjs')

const buyer = Array.from({ length: 5 }).map((data, i) => ({
  name: `buyer00${i + 1}`,
  account: `buyer00${i + 1}`,
  password: bcrypt.hashSync('titaner', bcrypt.genSaltSync(10), null),
  role: 'buyer',
  avatar: 'https://i.imgur.com/ehh37fR.jpg',
  created_at: new Date(),
  updated_at: new Date()
}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Buyers', buyer, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Buyers', null, {})
  }
}
