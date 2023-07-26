const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { Seller, Commodity } = require('../models')

const sellerService = {
  // signin
  sellerSignin: (req, cb) => {
    const { account, password } = req.body
    if (!account || !password) throw new Error('請輸入帳號密碼')
    Seller.findOne({ where: { account } })
      .then(seller => {
        if (!seller) throw new Error('帳號或密碼輸入錯誤！')
        return bcrypt.compare(password, seller.password)
          .then(res => {
            if (!res) throw new Error('帳號或密碼輸入錯誤！')
            const payload = { id: seller.id, role: seller.role }
            const token = jwt.sign(payload, process.env.JWT_SECRET)
            const sellerData = seller.toJSON()
            delete sellerData.password
            return cb(null, {
              status: 200,
              message: '登入成功!',
              token,
              user: sellerData
            })
          })
      })
      .catch(err => cb(err))
  },
  // signup
  sellerSignup: (req, cb) => {
    const { name, account, password, passwordCheck } = req.body
    // check all items
    if (!name || !account || !password || !passwordCheck) throw new Error('需填寫所有欄位')
    // check password
    if (password !== passwordCheck) throw new Error('密碼及確認密碼需一致')
    Seller.findOne({ where: { account } })
      .then(seller => {
        if (seller) throw new Error('此帳號已存在')
        return bcrypt.hash(password, 10)
      })
      .then(hash => {
        Seller.create({
          name,
          account,
          password: hash
        })
      })
      .then(() => {
        cb(null, {
          status: 200,
          message: '賣家註冊成功'
        })
      })
      .catch(err => cb(err))
  },
  // shop
  getSeller: (req, cb) => {
    const sellerId = req.params.sellerId
    console.log(sellerId)
    Seller.findByPk(sellerId, {
      include: [Commodity],
      nest: true
    })
      .then(seller => cb(null, seller))
      .catch(err => cb(err))
  }
}

module.exports = sellerService
