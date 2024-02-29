'use strict'
const { Category, Seller } = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const category = await Category.findAll({ raw: true, attributes: ['id'] })
    const seller = await Seller.findAll({ raw: true, attributes: ['id'] })
    const commodities = [
      {
        name: '超級芭比粉口紅',
        description: '讓你塗了超好看的口紅',
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 100),
        avatar: 'https://assets-au-01.kc-usercontent.com/e095818a-c2b1-025d-b9b3-a502057ea75e/63340212-05d8-4716-a0f9-f71265aa7754/iStock-960458948%201.png',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '超萬用吹風機',
        description: '保證1分鐘內吹乾頭髮',
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 100),
        avatar: 'https://cw1.tw/CW/images/fck/F1450079513946.jpg',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '全能洗面乳',
        description: '保證可以把臉清洗乾淨',
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 100),
        avatar:
          'https://assets-au-01.kc-usercontent.com/e095818a-c2b1-025d-b9b3-a502057ea75e/655446c2-6a59-445c-a4b7-e50624710aae/iStock-1350857525%201.png',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '男人香',
        description: '散發淡淡男人香',
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 100),
        avatar:
          'https://i2.wp.com/cdn03.pinkoi.com/pinkoi.magz/NPs667Ct/14676215257372.jpg?w=600&ssl=1',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '客製化衣服',
        description: '全客製化衣服',
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 100),
        avatar: 'https://cdn01.pinkoi.com/product/hsxzNVLu/5/640x530.jpg',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '潮流素T',
        description: '簡約有形',
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 100),
        avatar:
          'https://aime-bra.com/images/202108/goods_img/132_P_1627885276221.jpg',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '潮流外套',
        description: '潮流好看',
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 100),
        avatar:
          'https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/9198275/0/638355613605400000?v=1',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '有夠冰冰淇淋',
        description: '有夠冰',
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 100),
        avatar:
          'https://ottonet.com.tw/images/property_images/work_lightbox_image/31123d59de716a2f5c9a2350acf7ae8438d41781.jpeg',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '一片地瓜片',
        description: '只有一片',
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 100),
        avatar:
          'https://cdn1.cybassets.com/media/W1siZiIsIjE2NzA4L3Byb2R1Y3RzLzMzMDA3ODYxLzE2MTM4OTYyMjBfYzExYWE2NTdkZmUzMDczMTZlN2MucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=1da620b242981977',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '流血蛋塔',
        description: '超爆漿',
        price: Math.ceil(Math.random() * 1000),
        inventory: Math.ceil(Math.random() * 100),
        avatar:
          'https://image-cdn-flare.qdm.cloud/q6b9fe4eb615e1/image/cache/data/2023/06/16/b2cdf6a647a1eba85d89b821c16babe1-cr-627x627.jpg',
        seller_id: seller[Math.floor(Math.random() * seller.length)].id,
        category_id: category[Math.floor(Math.random() * category.length)].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
    await queryInterface.bulkInsert('Commodities', commodities, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Commodities', null, {})
  }
}
