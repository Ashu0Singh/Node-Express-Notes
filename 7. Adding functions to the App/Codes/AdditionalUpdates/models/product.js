const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(__dirname,".."),
  'data','product.json'
);

const getFileContent = (callBack) => {
  fs.readFile(
    p,(err,fileContent) => {
      if(err)
        callBack([]);
      callBack(JSON.parse(fileContent));
  })
}
class Product {
  constructor(title,price,desc,image) {
    this.title = title;
    this.price = price;
    this.desc = desc;
    this.image = image;
  }
  save() {
    getFileContent((products) => {
      products.push(this);
      fs.writeFile(
        p,JSON.stringify(products),(err) => {
          console.log(err);
      })
    })
  }

  static fetchAll(sendRes) {
    getFileContent(sendRes);
  }
}

module.exports = Product;