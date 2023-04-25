const Product = require('../models/product');

const getProducts = (req,res,next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list' , {
        prods: products,
        docTitle: "Product",
        path: "/products"
    })
    console.log(products);
  })
}

const getShop = (req,res,next) => {
  res.render('shop/index',{
    docTitle: "Shop",
    path: "/"
  })
}

const shopCart = (req,res,next) => {
    res.render('shop/cart' , {
        docTitle: "Shopping Cart",
        path: "/cart"
    })
}

const shopChekout = (req,res,next) => {
    res.render('shop/checkout' , {
        docTitle: "Checkout",
        path: "/checkout"
    })
}

const shopOrders = (req,res,next) => {
  res.render('shop/orders' , {
      docTitle: "Orders",
      path: "/orders"
  })
}

module.exports = {
  getProducts,
  shopCart,
  getShop,
  shopChekout,
  shopOrders
}