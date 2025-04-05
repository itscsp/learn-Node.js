
const express = require('express');

const { getAllProduct } = require('../controllers/product');

const router = express.Router();

router.get('/', getAllProduct);

module.exports = router;
