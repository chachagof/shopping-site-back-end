const passport = require('passport')
const passportJWT = require('passport-jwt')

const { Buyer, Seller } = require('../models')

const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

passport.use(new JWTStrategy(jwtOptions, (jwtPayload, cb) => {
  if (jwtPayload.role === 'buyer') {
    Buyer.findByPk(jwtPayload.id)
      .then(user => cb(null, user))
      .catch(err => cb(err))
  }
  if (jwtPayload.role === 'seller') {
    Seller.findByPk(jwtPayload.id)
      .then(user => cb(null, user))
      .catch(err => cb(err))
  }
}))

module.exports = passport
