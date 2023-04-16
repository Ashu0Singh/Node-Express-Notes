const express = require('express')
const path = require('path')
const rootDir = require("./util/path")
const pug = require('pug')

const bodyParser = require('body-parser')

const adminRoute = require('./routes/admin.js')
const shop = require('./routes/shop.js')

const app = express();

app.set('view engine','ejs')
app.set('views','views')

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(rootDir,"public")))

app.use('/admin',adminRoute);
app.use(shop)

app.use((req,res,next) => {
    res.status(404).sendFile(
	    path.join(rootDir,"views","pageNotFound.html")
	)
});

app.listen(3000);