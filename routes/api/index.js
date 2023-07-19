const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const buyerController = require('../../controllers/buyerController')
const sellerController = require('../../controllers/sellerController')
const commodityController = require('../../controllers/commodityController')
const cartController = require('../../controllers/cartController')

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
// read
router.get('/commodities', commodityController.getCommodities)
router.get('/commodities/:commodityId', commodityController.getCommodity)

// shop
router.get('/seller/:sellerId', sellerController.getSeller)

// cart
// create
router.post('/cart/:commodityId', authenticated, authenticatedBuyer, cartController.addToCart)

module.exports = router
