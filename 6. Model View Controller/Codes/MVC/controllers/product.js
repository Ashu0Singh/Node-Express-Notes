const Product = require('../models/product');
const getAddProduct = (req,res,next) => {
	res.render('add-product', {docTitle: "Add Products"})
}

const postAddProduct = (req,res,next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/admin/add-product');
}

const getProducts = (req,res,next) => {
  Product.fetchAll((products) => {
    res.render('shop' , {
        prods: products,
        docTitle: "Shops"
    })
    console.log(products);
  })
  // console.log(Product);
  // res.sendFile(path.join(rootDir,"views","shop.html"))
}

module.exports = {
  getAddProduct,
  postAddProduct,
  getProducts
}