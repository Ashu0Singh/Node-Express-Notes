const express = require('express')
const path = require('path')
const {getAddProduct,postAddProduct,getProduct} = require('../controllers/admin')

const router = express.Router();
router.get('/add-product',getAddProduct)
router.post('/add-product',postAddProduct)
router.get('/products',getProduct)
module.exports = router;