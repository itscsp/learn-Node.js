const express = require('express');

const { getAddProduct, AddProduct } = require('../controllers/product');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/add-product => POST
router.post('/add-product', AddProduct);

module.exports = router;
