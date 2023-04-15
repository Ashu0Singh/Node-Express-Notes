const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const admin = require('./admin')

const router = express.Router();

router.get('/',(req,res,next) => {
    const products = admin.products;
    res.render('shop' , {prods: products , docTitle: "Shops"})
	// console.log(admin.products);
    // res.sendFile(path.join(rootDir,"views","shop.html"))
})

module.exports = router;