const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const router = express.Router();

const products = [];

router.get('/add-product',(req,res,next) => {
	res.render('add-product', {docTitle: "Add Products"})
})

router.post('/add-product',(req,res,next) => {
    products.push(req.body);
    res.redirect('/admin/add-product');
})

module.exports.routes = router;
module.exports.products = products;