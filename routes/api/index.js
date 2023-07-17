const express = require('express')
const router = express.Router()

const buyerController = require('../../controllers/buyerController')

// signup
router.post('/buyer/signup', buyerController.buyerSignup)

module.exports = router
