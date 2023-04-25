const express = require('express')
const path = require('path')

const {getProducts,shopCart,getShop,shopChekout,shopOrders} = require('../controllers/shop')

const router = express.Router();

router.get('/',getShop);
router.get('/products',getProducts);
router.get('/cart',shopCart);
router.get('/checkout',shopChekout);
router.get('/orders',shopOrders);
module.exports = router;