const express = require('express')
const path = require('path')
const rootDir = require("./util/path")

const bodyParser = require('body-parser')

const admin = require('./routes/admin.js')
const shop = require('./routes/shop.js')

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(rootDir,"public")))

app.use('/admin',admin);
app.use(shop)

app.use((req,res,next) => {
    res.status(404).sendFile(
	    path.join(rootDir,"views","pageNotFound.html")
	)
});

app.listen(3000);