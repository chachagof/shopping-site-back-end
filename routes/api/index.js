const express = require('express')
const router = express.Router()

const buyerController = require('../../controllers/buyerController')
const sellerController = require('../../controllers/sellerController')
const commodityController = require('../../controllers/commodityController')
const cartController = require('../../controllers/cartController')
const categoryController = require('../../controllers/categoryController')

const { authenticated, authenticatedBuyer, authenticatedSeller } = require('../../middleware/api-auth')

// signup
router.post('/buyer/signup', buyerController.buyerSignup)
router.post('/seller/signup', sellerController.sellerSignup)
// signin
router.post('/buyer/signin', buyerController.buyerSignin)
router.post('/seller/signin', sellerController.sellerSignin)

// commodity
// create
router.post('/commodity/', authenticated, authenticatedSeller, commodityController.createCommodity)
// edit
router.put('/commodity/:commodityId', authenticated, authenticatedSeller, commodityController.editCommodity)
// delete
router.delete('/commodity/:commodityId', authenticated, authenticatedSeller, commodityController.deleteCommodity)
// read
router.get('/commodities', commodityController.getCommodities)
router.get('/commodities/:commodityId', commodityController.getCommodity)

// shop
router.get('/seller/:sellerId', sellerController.getSeller)

// category
router.get('/category', categoryController.getCategory)

// cart
// read
router.get('/cart', authenticated, authenticatedBuyer, cartController.getCart)
// check
router.put('/cart', authenticated, authenticatedBuyer,
  cartController.checkCart)
// create
router.post('/cart/:commodityId', authenticated, authenticatedBuyer, cartController.addToCart)

// edit
router.put('/cart/:commodityId', authenticated, authenticatedBuyer, cartController.editCart)
// remove
router.delete('/cart/:commodityId', authenticated, authenticatedBuyer, cartController.deleteCart)

module.exports = router
