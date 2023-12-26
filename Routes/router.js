const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController = require('../Controllers/wishlistController')
const cartController = require('../Controllers/cartController')

const router = new express.Router()

// get all products
router.get('/products/all',productController.getAllProductsController)
// register
router.post('/user/register',userController.registerController)
// login
router.post('/user/login',userController.loginController)
// get product
router.get('/product/get/:id',productController.getProductController)
// add to wishlist
router.post('/wishlist/add',jwtMiddleware,wishlistController.addToWishlistController)
// get wishlist
router.get('/wishlist/get-allproducts',jwtMiddleware,wishlistController.getWishlistController)
// remove product from wishlist
router.delete('/wishlist/remove/:id',jwtMiddleware,wishlistController.removeWishlistItemController)
// add to cart
router.post('/cart/add',jwtMiddleware,cartController.addtoCartController)
// get all cart products
router.get('/cart/get-allproducts',jwtMiddleware,cartController.getCartController)
// increment cart
router.get('/cart/increment/:id',jwtMiddleware,cartController.incrementCartController)
// decrement cart
router.get('/cart/decrement/:id',jwtMiddleware,cartController.decrementCartController)
// remove cart items
router.delete('/cart/remove/:id',jwtMiddleware,cartController.removeCartItemController)
// empty all cart items
router.delete('/cart/empty',jwtMiddleware,cartController.emptyCartController)
// search products
router.get('/products/filter',jwtMiddleware,productController.getFilteredProductResults)

module.exports = router