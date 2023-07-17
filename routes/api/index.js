const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const buyerController = require('../../controllers/buyerController')

// signup
router.post('/buyer/signup', buyerController.buyerSignup)
// signin
router.post('/buyer/signin', buyerController.buyerSignin)

module.exports = router
