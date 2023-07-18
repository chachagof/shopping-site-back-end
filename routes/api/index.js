const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const buyerController = require('../../controllers/buyerController')
const sellerController = require('../../controllers/sellerController')
const commodityController = require('../../controllers/commodityController')

const { authenticated, authenticatedBuyer, authenticatedSeller } = require('../../middleware/api-auth')

// signup
router.post('/buyer/signup', buyerController.buyerSignup)
router.post('/seller/signup', sellerController.sellerSignup)
// signin
router.post('/buyer/signin', buyerController.buyerSignin)
router.post('/seller/signin', sellerController.sellerSignin)

// commodity
// create
router.post('/commodity/:sellerId', authenticated, authenticatedSeller, commodityController.createCommodity)
// edit
router.put('/commodity/:commodityId', authenticated, authenticatedSeller, commodityController.editCommodity)
// delete
router.delete('/commodity/:commodityId', authenticated, authenticatedSeller, commodityController.deleteCommodity)

module.exports = router
