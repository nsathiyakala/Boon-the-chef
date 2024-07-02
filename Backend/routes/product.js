const express = require('express');
const { getProducts, getSingleProduct, getWholeProduct, getFilterProducts } = require('../controller/productController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct); 
router.route('/wholeProduct').get(getWholeProduct)
// router.route('/products/:category').get(getFilterProducts)
module.exports = router;
