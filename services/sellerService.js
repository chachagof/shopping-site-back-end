const bcrypt = require('bcryptjs')

const { Seller } = require('../models')

const sellerService = {
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
  }
}

module.exports = sellerService
