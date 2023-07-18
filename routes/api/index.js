const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const buyerController = require('../../controllers/buyerController')
const sellerController = require('../../controllers/sellerController')

// signup
router.post('/buyer/signup', buyerController.buyerSignup)
router.post('/seller/signup',sellerController.sellerSignup)
// signin
router.post('/buyer/signin', buyerController.buyerSignin)


module.exports = router
