const Product = require('../models/product');
const getAddProduct = (req,res,next) => {
	res.render('admin/add-product', {
    docTitle: "Add Products",
    path: "/admin/add-product"
  })
}

const postAddProduct = (req,res,next) => {
  const product = new Product(
    req.body.title,
    req.body.price,
    req.body.desc,
    req.body.image
  );
  product.save();
  res.redirect('/admin/add-product');
}

const getProduct = (req,res,next) => {
	Product.fetchAll((products) => {
    res.render('admin/products', {
      prods:products,
      docTitle: "Admin Products",
      path: "/admin/products"
    })
  })
}


module.exports = {
  getAddProduct,
  postAddProduct,
  getProduct
}