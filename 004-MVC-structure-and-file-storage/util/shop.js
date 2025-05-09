const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/products/:id', shopController.getSingleProduct);


router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct)

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrder);


module.exports = router;
