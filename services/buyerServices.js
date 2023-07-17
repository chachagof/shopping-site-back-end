const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { Buyer } = require('../models')

const buyerServices = {
  buyerSignin: (req, cb) => {
    const { account, password } = req.body
    if (!account || !password) throw new Error('請輸入帳號密碼')
    Buyer.findOne({ where: { account } })
      .then(buyer => {
        if (!buyer) throw new Error('帳號或密碼輸入錯誤！')
        return bcrypt.compare(password, buyer.password)
          .then(res => {
            if (!res) throw new Error('帳號或密碼輸入錯誤！')
            const payload = { id: buyer.id }
            const token = jwt.sign(payload, process.env.JWT_SECRET)
            const buyerData = buyer.toJSON()
            delete buyerData.password
            return cb(null, {
              status: 200,
              message: '登入成功!',
              token,
              user: buyerData
            })
          })
      })
      .catch(err => cb(err))
  },
  buyerSignup: (req, cb) => {
    const { name, account, password, passwordCheck } = req.body
    // check all items
    if (!name || !account || !password || !passwordCheck) throw new Error('需填寫所有欄位')
    // check password
    if (password !== passwordCheck) throw new Error('密碼及確認密碼需一致')
    Buyer.findOne({ where: { account } })
      .then(buyer => {
        if (buyer) throw new Error('此帳號已存在')
        return bcrypt.hash(password, 10)
      })
      .then(hash => {
        Buyer.create({
          name,
          account,
          password: hash
        })
      })
      .then(() => {
        cb(null, {
          status: 200,
          message: '註冊成功'
        })
      })
      .catch(err => cb(err))
  }
}

module.exports = buyerServices
