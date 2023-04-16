const express = require('express')
const path = require('path')
const {getAddProduct,postAddProduct,products} = require('../controllers/product')

const router = express.Router();
router.get('/add-product',getAddProduct)
router.post('/add-product',postAddProduct)
module.exports = router;